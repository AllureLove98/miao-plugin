export const details = [{
  title: 'E后普攻一段伤害',
  dmg: ({ talent }, dmg ) => dmg(talent.a['一段伤害'], 'a')
},{
  check: ({ cons }) => cons >= 2,
  title: '血偿勒令回收伤害',
  dmg: ({ attr }, { basic }) => basic(attr.atk * 900 / 100, 'e')
},{
  title: 'E切斩伤害',
  dmg: ({ talent }, dmg ) => dmg(talent.e['切斩伤害'], 'e')
},{
  title: 'Q伤害',
  dmg: ({ talent }, dmg ) => dmg(talent.q['技能伤害'], 'q')
},{
  title: 'Q蒸发伤害',
  dmg: ({ talent }, dmg ) => dmg(talent.q['技能伤害'], 'q', 'vaporize')
},{
  title: 'Q治疗量',
  params: { BondOfLife: 145 },
  dmg: ({ talent, attr, weapon }, { heal }) => heal(150 / 100 * ((weapon.name === '赤月之形' ? 170 : 145) / 100) * attr.hp + 150 / 100 * attr.atk)
}]

export const defDmgIdx = 0
export const mainAttr = 'atk,cpct,cdmg,mastery'
export const defParams = { BondOfLife: 130 }//生命之契在此调整,请勿超过200

export const buffs = [
{
  title: '阿蕾奇诺天赋：[buffCount]%最大生命值的生命之契,普通攻击伤害提升[aPlus]',
  data: {
    buffCount: ({ params , weapon }) => Math.min(params.BondOfLife + (weapon.name === '赤月之形' ? 25 : 0), 200),
    aPlus: ({ talent , attr , params , cons , weapon }) => attr.atk * ((Math.min((params.BondOfLife + (weapon.name === '赤月之形' ? 25 : 0)), 200) / 100) * ((cons >= 1 ? (talent.a['红死之宴提升值比例'] + 100) : talent.a['红死之宴提升值比例']) / 100 ))
  }
},
{
  title: '阿蕾奇诺天赋：在战斗状态下获得[dmg]%伤害加成',
  data: {
    dmg: 40
  }
},
{
  title: '阿蕾奇诺6命：Q造成的伤害提高[qPlus],且释放后普通攻击与元素爆发的暴击率提高[aCpct]%,暴击伤害提高[aCdmg]%',
  cons: 6,
  data: {
    qPlus: ({ attr , params , weapon }) => attr.atk * (Math.min((params.BondOfLife + (weapon.name === '赤月之形' ? 25 : 0)), 200) / 100) * (700 / 100),
    aCpct: 10 ,
    aCdmg: 70 ,
    qCpct: 10 ,
    qCdmg: 70
  }
}, 'vaporize']

export const createdBy = 'liangshi'