// 简化一些过长的装备文案，以在面板中获得更好的展示效果
export const descFix = {
  // 法器
  万世流涌大典: '生命值提升$[0]。生命值变化时，重击伤害提升$[1]。持续4秒，至多叠加3次；<br/>叠加至3层或3层时间刷新时，恢复$[2]点能量，每12秒一次。',
  纯水流华: '施放战技时，元素伤害提升$[0]，获得24%生命值上限的生命之契，吸收治疗满后移除。移除时，每1000点提供$[1]元素伤害加成，上限$[2]，持续12秒。',
  碧落之珑: '施放元素爆发或创造护盾后的3秒内：每2.5秒恢复$[0]能量，基于生命值上限，每1000点提升元素伤害$[1]，上限$[2]。处于队伍后台也能触发。',
  不灭月华: '治疗加成提升$[0]；普攻击造成的伤害增加，值为角色生命值上限的$[1]。施放爆发后的12秒内，普攻命中敌人恢复0.6点能量。',
  千夜浮梦: '基于其他角色的元素类型为装备者提供效果。每个同元素角色提升$[0]精通；不同元素角色提升$[1]元素伤害。队伍其他角色的精通提升$[2]点。',
  图莱杜拉的回忆: '普通攻击速度提升$[0]；施放战技后14秒内：普攻击伤害每1秒提升$[1]；普攻命中敌人后，普攻伤害提升$[2]，上限$[3]。',
  金流监督: '攻击力提升$[0]。生命值变更时，普攻伤害提升$[1]，重击伤害提升$[2]，持续4秒，至多3层；3层后攻速提升$[3]。',
  神乐之真意: '施放战技时获得神乐舞效果，持续16秒，至多叠加3层。每层使角色的战技伤害提高$[0]。3层时，角色获得$[1]元素伤害加成。',
  盈满之实: '触发元素反应后，获得效果：每层精通提升$[0]点，攻击力降低5%，至多5层，处于后台时也能触发。未触发元素反应时将每6秒失去一层。',
  流浪的晚星: '每10秒基于精通的$[0]提升攻击力，并基于该提升的30%为其他角色提升攻击力，持续12秒，处于后台时也能触发，多件同名武器可叠加。',

  // 单手剑
  降临之剑: '普通攻击与重击命中敌人后有50%概率在小范围内造成200%攻击力的伤害。该效果每10秒只能触发一次；<br/>此外，旅行者装备降临之剑时，攻击力提升66点。',
  天目影打刀: '施放元素战技获得1个胤种，至多同时存在3个。<br/>施放元素爆发清除所有胤种，并在2秒之后，基于消耗的胤种数量，每个为该角色恢复$[0]点元素能量。',
  风鹰剑: '攻击力提高$[0]；<br/>受到伤害时触发：恢复等同于攻击力的$[1]的生命值，并对周围的敌人造成$[2]攻击力的伤害。每15秒只能触发一次。',
  天空之刃: '暴击率提升$[0]；施放元素爆发时：移动速度提升10%，攻击速度提升10%，普通攻击与重击命中时，额外造成$[1]攻击力的伤害，持续12秒。',
  苍古自由之誓: '造成的伤害提高$[0]；触发元素反应时，获得奋起之符。拥有2枚时，消耗并获得12秒状态：普攻、重击、下落攻击伤害提高$[1]，攻击力提升$[2]。',
  雾切之回光: '获得$[0]所有元素伤害加成。<br/><strong>获得巴印：</strong>普攻造成元素伤害时5秒；施放元素爆发时10秒；能量低于100%时。当持有1/2/3层巴印时，获得$[1]元素伤害加成。',
  波乱月白经津: '获得$[0]元素伤害加成；其他角色施放战技时，产生1层波穗，至多2层。装备武器的角色施放战技时，消耗波穗每层提升$[1]普攻伤害，持续8秒。',
  圣显之钥: '生命值提升$[0]。战技命中敌人时：自己获得$[1]生命上限的精通，至多3层。叠加至3层之后为所有角色提供$[2]生命上限的精通，持续20秒。',
  静水流涌之辉: '装备者生命值变化时，战技伤害提升$[0]，持续6秒，至多3层；其他角色生命值变化时，装备者的生命上限提升$[1]，持续6秒，至多2层。',
  原木刀: '触发草元素反应后，每20秒产生至多存在10秒的种识之叶，后台也能触发。拾取提升精通$[0]点，持续12秒。',
  西福斯的月光: '每10秒基于精通的$[0]提升充能效率，并基于该提升的30%为其他角色提升充能效率，持续12秒。处于后台时也能触发，多件同名武器可叠加。',
  东花坊时雨: '攻击命中敌人后，为命中的一名敌人施加状态，对该状态敌人造成的伤害提升$[0]。状态持续10秒，每15秒至多一次；敌人被击败时清除CD。',
  船坞长剑: '受到或进行治疗时，获得标记，最多3层，处于后台也能获得。施放战技或爆发时，消耗标记：每枚标记提高$[0]点精通，恢复$[1]点能量。每15秒至多一次。',
  海渊终曲: '施放战技时，攻击力提升$[0]，持续12秒，获得24%生命值上限的生命之契，吸收治疗满后移除。基于清除值的$[1]提升至多$[2]点攻击力，持续12秒。',
  水仙十字之剑: '装备者不具备「始基力」时：普攻、重击、下落攻击命中时，释放芒性或荒性的能量冲击，造成$[0]攻击力的伤害。每12秒至多一次。',

  // 双手剑
  便携动力锯: '受到或进行治疗时，获得标记，最多3层，处于后台也能获得。施放战技或爆发时，消耗标记：每枚标记提高$[0]精通，恢复$[1]点能量。',
  松籁响起之时: '攻击力提高$[0]；普攻或重击命中时，获得低语之符。拥有4枚低语之符时，将消耗所有：普攻速度提高$[1]，攻击力提升$[2]，持续12秒。',
  森林王器: '触发草元素反应后，每20秒产生至多存在10秒的种识之叶，后台也能触发。拾取提升精通$[0]点，持续12秒。',
  玛海菈的水色: '每10秒基于精通的$[0]提升攻击力，并基于该提升的30%为其他角色提升攻击力，持续12秒。处于后台时也能触发，多件同名武器可叠加。',
  雪葬的星银: '普攻与重击命中敌人时，有$[0]概率造成$[1]攻击力的范围伤害。若敌人处于冰元素影响下，则造成$[2]攻击力的伤害。每10秒至多一次。',
  裁断: '攻击力提升$[0]；获取结晶晶片时，为装备者赋予1枚约印，使下一个战技伤害提升$[1]，约印持续15秒，至多持有2枚。',
  苇海信标:'战技命中敌人提升$[0]攻击力；受到伤害提升$[1]攻击力，各持续8秒，后台也能触发。无护盾时，生命值上限提高$[2]。',

  // 长柄武器
  勘探钻机: '受到或进行治疗时，获得标记，最多3层，处于后台也能获得。施放战技或爆发时，消耗标记：每枚标记提高$[0]攻击力与$[1]元素伤害加成。',
  贯月矢: '触发草元素反应后，每20秒产生至多存在10秒的种识之叶，后台也能触发。拾取提升攻击力<nobr>32%</nobr>，持续12秒。',
  护摩之杖: '生命值提升$[0]。<br/>获得$[1]生命值上限的攻击力提升，生命值低于50%时，进一步获得$[2]生命值上限的攻击力提升。',
  薙草之稻光: '攻击力获得提升，提升程度相当于充能效率超出100%部分的$[0]，至多提升$[1]。<br/>施放爆发后的12秒内，充能效率提升$[2]。',
  '「渔获」': '元素爆发的伤害提升$[0]<br/>元素爆发的暴击率提升$[1]',

  // 弓
  终末嗟叹之诗: '精通提高$[0]点；战技或爆发命中敌人时，获得追思之符，后台也能触发。4枚时消耗所有追思之符：精通提高$[1]点，攻击力提升$[2]，持续12秒。',
  冬极白星: '战技和爆发伤害提高$[0]；普攻、重击、战技或爆发命中后，将产生1层效果。处于1/2/3/4层效果时，攻击力将提高$[1]。',
  飞雷之弦振: '攻击力提高$[0]，获得巴印：普攻时，持续5秒；施放战技时，持续10秒；能量低于100%时。持有1/2/3层巴印时，普攻伤害提高$[1]。',
  猎人之径: '获得$[0]元素伤害加成。重击命中敌人后：重击伤害值提高，为精通的$[1]。该效果将在生效12次或10秒后消失，每12秒至多获得一次状态。',
  最初的大魔术: '重击伤害提升$[0]；队伍中每有1/2/3个同属性（包括自身）攻击力提升$[1]，每1/2/3个不同属性移动速度提升$[2]。',
  测距规: '受到或进行治疗时，获得标记，最多3层，处于后台也能获得。施放战技或爆发时，消耗标记：每枚标记提高$[0]攻击力与$[1]元素伤害，持续10秒。',
  王下近侍: '施放战技或爆发时，精通提升$[0]点，持续12秒，每20秒至多触发一次。状态结束或切换角色被移除时，对附近一名敌人造成$[1]攻击力的伤害。',
  竭泽: '施放战技后获得持续15秒的状态，CD12秒：在攻击命中敌人时造成$[0]攻击力的范围伤害，每2秒至多一次，触发3次后移除。'
}
