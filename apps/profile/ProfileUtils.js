import { Cfg } from '#miao'
import { MysApi } from '#miao.models'
import { miaoPath } from '#miao.path'

/** 获取角色卡片的原图 */
export async function getOriginalPicture (e) {
  let source
  if (e.reply_id) {
    source = { message_id: e.reply_id }
  } else {
    if (!e.hasReply && !e.source) {
      return false
    }
    // 引用的消息不是自己的消息
    if (e.source.user_id !== e.self_id) {
      return false
    }
    // 获取原消息
    if (e.group?.getChatHistory) {
      source = (await e.group.getChatHistory(e.source.seq, 1)).pop()
    } else if (e.friend?.getChatHistory) {
      source = (await e.friend.getChatHistory(e.source.time, 1)).pop()
    }
    // 引用的不是纯图片
    if (!(source?.message?.length === 1 && source?.message[0]?.type === 'image')) {
      return false
    }
  }
  let originalPic = Cfg.get('originalPic') * 1
  if (source) {
    let imgPath = await redis.get(`miao:original-picture:${source.message_id}`)
    if (imgPath) {
      try {
        if (imgPath[0] === '{') {
          imgPath = JSON.parse(imgPath)
        } else {
          imgPath = { img: imgPath, type: '' }
        }
      } catch (e) {
      }
      if (!e.isMaster) {
		if (imgPath.type === 'character' && [2, 0].includes(originalPic)) {
			let imgReply = segment.image('https://gchat.qpic.cn/gchatpic_new/746659424/4144974507-2439053290-125E4E51B9D45F2C955E6675AF7C6CEE/0?term=3&is_origin=0');
			e.reply([imgReply]);
			return true
		}
		if (imgPath.type === 'profile' && [1, 0].includes(originalPic)) {
			let imgReply = segment.image('https://gchat.qpic.cn/gchatpic_new/746659424/4144974507-2439053290-125E4E51B9D45F2C955E6675AF7C6CEE/0?term=3&is_origin=0');
			e.reply([imgReply]);
			return true
		}
      }
      if (imgPath && imgPath.img) {
        e.reply(segment.image(`file://${miaoPath}/resources/${decodeURIComponent(imgPath.img)}`), false, { recallMsg: 30 })
      }
      return true
    }
    // 对at错图像的增加嘲讽...
    e.reply(segment.image(`file://${miaoPath}/resources/common/face/what.jpg`))
    return false
  }
  e.reply('消息太过久远了，俺也忘了原图是啥了，下次早点来吧~')
  return false
}

/* #敌人等级 */
export async function enemyLv (e) {
  let selfUser = await MysApi.initUser(e)
  if (!selfUser || !e.msg) {
    return true
  }
  let ret = /(敌人|怪物)等级\s*(\d{1,3})\s*$/.exec(e.msg)
  if (ret && ret[2]) {
    let lv = ret[2] * 1
    await selfUser.setCfg('char.enemyLv', lv)
    lv = await selfUser.getCfg('char.enemyLv', 103)
    e.reply(`敌人等级已经设置为${lv}`)
    return true
  }
  return true
}
