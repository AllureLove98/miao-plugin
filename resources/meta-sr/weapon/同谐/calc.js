export default function (staticIdx, keyIdx) {
  return {
    与行星相会: [],
    但战斗还未结束: [
      staticIdx(1, 'recharge')
    ],
    '舞！舞！舞！': [],
    记忆中的模样: [
      staticIdx(1, 'stance')
    ],
    调和: [
      keyIdx('进入战斗提高速度[speed]', 'speed', 1)
    ],
    轮契: [],
    过往未来: [],
    镂月裁云之意: [
      keyIdx('攻击Buff下提高攻击力[atkPct]%', 'atkPct', 1)
    ],
    齐颂: [
      keyIdx('进入战斗后，攻击力提高[atkPct]%', 'atkPct', 1)
    ],
    镜中故我: [
      staticIdx(1, 'stance'),
      keyIdx('装备者释放终结技后，我方全体造成伤害提高[dmg]%', 'dmg', 2)
    ],
    游戏尘寰: [
      staticIdx(1, 'cdmg')
    ],
    美梦小镇大冒险: [
      (tables) => {
        return {
          title: '普攻、战技、终结技造成的伤害提高[_dmg]%',
          data: {
            _dmg: tables[1],
            aDmg: tables[1],
            eDmg: tables[1],
            qDmg: tables[1]
          }
        }
      }
    ]
  }
}
