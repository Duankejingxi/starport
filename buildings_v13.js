/* 星港 — buildings_v13.js：v1.3 新增 8 种建筑（军事/战争向） */

// ═══════════════════════════════════════════════════════════════════════
// v1.3 军事建筑包（8 种 × 3 级）
// 加载顺序：index.html 中本文件位于 build.js 之后，直接 Object.assign 扩展 BUILDINGS。
// 约定：
//   - cost 的 key 只能用现有资源：iron / ice / rare / water / food / steel / tech / uranium / he3
//   - 自定义效果字段（towerDmgMul / raidWarnBonus / siloStrike / moraleMul / mercSquads / nukeReady
//     等）全部用「★ 读取约定」注释写清，供 military.js / pop.js 防御性读取。
//   - 文件末尾提供 BuildManager.prototype 聚合接口（损坏跳过、老化折算），
//     military.js 直接调用聚合接口即可，不必自己遍历。
//   - 注意：本版本 build.js 里还没有防御塔/敌群实体，military.js 为后续版本；
//     所有军事效果字段现在只做数据声明，不产生即时游戏内行为。
// ═══════════════════════════════════════════════════════════════════════

Object.assign(BUILDINGS, {

  // ═══════════════════════════════════════════════════════════════
  // 1. 🎖️ 军事学院 mil_academy
  // 定位：防御体系的「伤害放大器」，越早出收益越高（全图塔共享）。
  // ★ 读取约定（military.js 防御性读取）：
  //   const lv = BUILDINGS.mil_academy.levels[b.level] || {};
  //   const dmgBonus = lv.towerDmgMul || 0;          // 加法汇总
  //   const elite = !!lv.eliteTraining;              // Lv3 专属：塔射速 +10%
  //   最终塔伤 = 基础伤害 × (1 + 学院加成) × (1 + 兵工厂加成)   ← 两者乘法叠加
  //   射速加成只在 eliteTraining 为 true 时生效：射速 × 1.10
  // 数值平衡注释：
  //   - +15%/级是「线性成长、指数价值」：塔越多、学院等级越高，边际收益越大，
  //     因此成本曲线故意陡峭（Lv3 要 30 稀有矿，卡中期资源瓶颈）。
  //   - needPop 8/16/25：学院是人力密集型建筑，人口不足时先补居住舱。
  //   - 与兵工厂联动：学院(Lv3 45%) × 兵工厂(Lv3 30%) = 1.45 × 1.30 = 1.885，
  //     接近翻倍，这是 v1.3 军事流的理论上限，military.js 按乘法实现。
  // ═══════════════════════════════════════════════════════════════
  mil_academy: {
    id: 'mil_academy', name: '军事学院', icon: '🎖️',
    levels: [null,
      { cost: { iron: 40, steel: 10 }, needPop: 8, powerUse: 2,
        towerDmgMul: 0.15,
        desc: '开设初级指挥课程：所有防御塔伤害 +15%',
        flavor: '「第一课：在火星上，纪律比氧气更稀缺。」——《学院入学手册》扉页', },
      { cost: { iron: 100, steel: 30 }, needPop: 16, powerUse: 3,
        towerDmgMul: 0.30,
        desc: '高级战术推演：所有防御塔伤害 +30%',
        flavor: '沙盘上的每一次推演，都是为了前线少流一滴血。', },
      { cost: { steel: 60, rare: 30 }, needPop: 25, powerUse: 4,
        towerDmgMul: 0.45, eliteTraining: true,
        desc: '精英训练计划：防御塔伤害 +45%，射速 +10%',
        flavor: '毕业生走出校门那天，连沙尘暴都会让路。', },
    ],
    desc: '训练军官，防御塔伤害 +15%/级；Lv3 解锁精英训练（塔射速+10%）',
    flavor: '火星上第一所不教种地、只教打仗的学校。',
  },

  // ═══════════════════════════════════════════════════════════════
  // 2. 🏭 兵工厂 arms_factory
  // 定位：防御塔的「弹药补给线」。概念上生产"弹药"，实现上简化为塔伤加成
  // （不引入新资源类型，避免经济系统膨胀）。
  // ★ 读取约定（military.js 防御性读取）：
  //   const ammoBonus = (BUILDINGS.arms_factory.levels[b.level] || {}).ammoDmgMul || 0;
  //   最终塔伤 = 基础伤害 × (1 + 学院加成) × (1 + 兵工厂加成)
  //   多座兵工厂：加成加法汇总（由 BuildManager.prototype.ammoDmgBonus 聚合）。
  // 数值平衡注释：
  //   - 单级只有 +10%，弱于学院的 +15%，因为兵工厂同时是「耗电大户」
  //     （powerUse 3/5/8），逼玩家在电力规划上做取舍：要火力就得先解决能源。
  //   - Lv3 成本含 20 科技点：把兵工厂 Lv3 锁在实验室体系之后，
  //     防止纯速攻流跳过科技线。
  //   - 与军事学院联动：两者乘法叠加，满配 1.885 倍塔伤，是后期守波核心。
  //   - 与维修站联动：兵工厂被袭击损坏后塔伤加成归零，维修站优先级上升。
  // ═══════════════════════════════════════════════════════════════
  arms_factory: {
    id: 'arms_factory', name: '兵工厂', icon: '🏭',
    levels: [null,
      { cost: { iron: 60, rare: 10 }, needPop: 10, powerUse: 3,
        ammoDmgMul: 0.10,
        desc: '弹药生产线投产：防御塔伤害 +10%',
        flavor: '流水线昼夜不停——和平时期它造零件，战争时期它造底气。', },
      { cost: { steel: 50, rare: 25 }, needPop: 20, powerUse: 5,
        ammoDmgMul: 0.20,
        desc: '扩建第二条生产线：防御塔伤害 +20%',
        flavor: '厂长说：我们的产品从不积压，因为前线永远缺货。', },
      { cost: { steel: 120, tech: 20 }, needPop: 30, powerUse: 8,
        ammoDmgMul: 0.30,
        desc: '全自动军工复合体：防御塔伤害 +30%',
        flavor: '最后一道工序是刻字：「为了星港，绝不哑火。」', },
    ],
    desc: '防御塔弹药补给，塔伤害 +10%/级（与军事学院乘法叠加），耗电大户',
    flavor: '整个星港最吵的建筑，也是战时最安心的建筑。',
  },

  // ═══════════════════════════════════════════════════════════════
  // 3. 📡 雷达站 radar
  // 定位：袭击预警。注意与 v1.1 气象站 / v1.2 气象卫星区分：
  //   - 气象站/卫星：warnBonus（毫秒）→ 灾难（disaster.js）预警；
  //   - 雷达站：raidWarnBonus（秒）→ 敌袭（military.js）预警。两者互不干扰。
  // ★ 读取约定（military.js 防御性读取）：
  //   const sec = (BUILDINGS.radar.levels[b.level] || {}).raidWarnBonus || 0; // 秒
  //   预警提前量(毫秒) = sec × 1000；多座雷达站加法汇总（见 raidWarnBonusMs 聚合接口）。
  //   损坏的雷达站不计入；老化按 agingEff() 折算后向下取整到秒。
  // 数值平衡注释：
  //   - +15 秒/级：Lv1 雷达 ≈ 给玩家多一轮布防时间；Lv3 的 45 秒配合导弹井
  //     （120 秒 CD）可以实现「预警→导弹先手→塔群收尾」的完整防御链。
  //   - 成本含科技点（5/12/30）：雷达是信息战建筑，锁在科技线之后，
  //     与实验室/学校形成联动：想早预警，先搞科研。
  //   - powerUse 2/2/3：常开设备，缺电时预警失效——停电挨打，符合设定。
  // ═══════════════════════════════════════════════════════════════
  radar: {
    id: 'radar', name: '雷达站', icon: '📡',
    levels: [null,
      { cost: { steel: 30, tech: 5 }, needPop: 12, powerUse: 2,
        raidWarnBonus: 15,
        desc: '远程扫描阵列：袭击预警时间 +15 秒',
        flavor: '天线转动的每一圈，都在替全城人多争取十五秒。', },
      { cost: { steel: 70, tech: 12 }, needPop: 20, powerUse: 2,
        raidWarnBonus: 30,
        desc: '相控阵升级：袭击预警时间 +30 秒',
        flavor: '值班员说：最幸福的夜班，是屏幕上一片干净。', },
      { cost: { steel: 150, tech: 30 }, needPop: 30, powerUse: 3,
        raidWarnBonus: 45,
        desc: '轨道同步扫描：袭击预警时间 +45 秒',
        flavor: '敌人在集结的时候，我们已经在喝第三杯咖啡了。', },
    ],
    desc: '袭击预警时间 +15秒/级，military.js 读取 raidWarnBonus（秒）',
    flavor: '看不见敌人的城市，注定只能挨打。',
  },

  // ═══════════════════════════════════════════════════════════════
  // 4. 🚀 导弹井 missile_silo
  // 定位：自动反击火力。每 120 秒一次齐射，重创来袭敌群（AOE 伤害）。
  // ★ 读取约定（military.js 防御性读取）：
  //   const s = (BUILDINGS.missile_silo.levels[b.level] || {}).siloStrike || {};
  //   const intervalMs = s.intervalMs || 120000;  // 固定 120 秒，不随等级变化
  //   const dmg = s.dmg || 0;                      // 单次齐射总伤害，随等级提升
  //   行为规则（military.js 实现）：冷却转好后，若当前有来袭敌群则自动发射；
  //   若无目标则待机（不浪费齐射）。多座导弹井各自独立冷却。
  //   损坏/老化：损坏跳过；伤害按 agingEff() 折算。
  // 数值平衡注释：
  //   - CD 固定 120 秒是刻意设计：导弹井是「节奏型」武器，玩家围绕它的
  //     转好时间组织防御；升级只提升单发伤害（50/120/250），不缩 CD，
  //     避免后期多井轮射形成无间隙火力覆盖。
  //   - Lv3 成本加入 10 铀矿：把顶级导弹井锁在铀矿机（v1.2）之后，
  //     形成 v1.2→v1.3 的资源链条：铀矿 → 导弹 → 核弹。
  //   - 与雷达站联动：45 秒预警 + 120 秒 CD，military.js 可在预警时
  //     提示「导弹 X 秒后就绪」，把两个建筑的操作节奏串起来。
  // ═══════════════════════════════════════════════════════════════
  missile_silo: {
    id: 'missile_silo', name: '导弹井', icon: '🚀',
    levels: [null,
      { cost: { steel: 80, tech: 10 }, needPop: 15, powerUse: 4,
        siloStrike: { intervalMs: 120000, dmg: 50 },
        desc: '战术导弹井：每 120 秒自动齐射，伤害 50',
        flavor: '井盖打开的声音，是全城人最爱听的交响乐前奏。', },
      { cost: { steel: 180, tech: 30 }, needPop: 25, powerUse: 6,
        siloStrike: { intervalMs: 120000, dmg: 120 },
        desc: '增程导弹井：每 120 秒自动齐射，伤害 120',
        flavor: '「射程之内，皆是真理。」——井壁上的涂鸦', },
      { cost: { steel: 350, tech: 70, uranium: 10 }, needPop: 40, powerUse: 8,
        siloStrike: { intervalMs: 120000, dmg: 250 },
        desc: '重型导弹井：每 120 秒自动齐射，伤害 250',
        flavor: '发射按钮有三道保险——以及一道写着"冷静"的纸条。', },
    ],
    desc: '每 120 秒自动发射导弹，重创来袭敌群；military.js 读取 siloStrike',
    flavor: '把愤怒埋进地底，等敌人来的时候再请它升空。',
  },

  // ═══════════════════════════════════════════════════════════════
  // 5. 🕳️ 防空洞 shelter
  // 定位：人口保护。双重作用：平时 +人口上限（走现有 popCap 通道，
  // BuildManager.totalPopCap() 会自动汇总，无需 pop.js 改代码）；战时免人口损失。
  // ★ 读取约定（military.js 防御性读取）：
  //   const lv = BUILDINGS.shelter.levels[b.level] || {};
  //   const cap = lv.popCap || 0;            // 人口上限加成（现有通道自动生效）
  //   const protect = !!lv.raidProtect;      // 袭击时保护人口不损失
  //   判定规则（military.js 实现）：只要存在至少一座「未损坏」的防空洞，
  //   本次袭击波结算时人口损失 = 0。防空洞本身仍可被摧毁。
  // 数值平衡注释：
  //   - +6/级的人口上限：三座满级防空洞 = 54 人口上限，约等于 2.5 座满级居住舱，
  //     但成本远低于居住舱——因为防空洞不提供 growthBonus，只保人不增产，
  //     是纯粹的防御型人口建筑。
  //   - Lv1 零人口需求、零耗电：开局就能建，是新手的第一道保险；
  //     Lv2/Lv3 开始要人口和电，防止无脑铺。
  //   - 与战争纪念碑联动：防空洞「保住人」，纪念碑「让人长得快」，
  //     一守一攻构成人口引擎的防御闭环。
  // ═══════════════════════════════════════════════════════════════
  shelter: {
    id: 'shelter', name: '防空洞', icon: '🕳️',
    levels: [null,
      { cost: { iron: 30 }, needPop: 0, powerUse: 0,
        popCap: 6, raidProtect: true,
        desc: '简易掩体：人口上限 +6，袭击时保护人口不损失',
        flavor: '第一批住户在墙上刻下全家人的名字——一个都没少。', },
      { cost: { iron: 70, steel: 10 }, needPop: 6, powerUse: 1,
        popCap: 12, raidProtect: true,
        desc: '加固掩体：人口上限 +12，袭击时保护人口不损失',
        flavor: '通风、照明、热水——避难也要有避难的体面。', },
      { cost: { steel: 50, rare: 20 }, needPop: 12, powerUse: 1,
        popCap: 18, raidProtect: true,
        desc: '地下堡垒：人口上限 +18，袭击时保护人口不损失',
        flavor: '最深的洞，住着最安心的人。', },
    ],
    desc: '人口上限 +6/级，袭击时保护人口不损失（military.js 读 raidProtect）',
    flavor: '穹顶之外是战场，穹顶之下是家。',
  },

  // ═══════════════════════════════════════════════════════════════
  // 6. 🗿 战争纪念碑 war_memorial
  // 定位：便宜的士气建筑。人口增长 +10%/级，走 moraleMul 通道。
  // ★ 读取约定（pop.js 防御性读取）：
  //   const m = (BUILDINGS.war_memorial.levels[b.level] || {}).moraleMul || 0;
  //   实际增长率 = 基础增长率 × (1 + ΣmoraleMul + 医院 growthBonus …)
  //   多座纪念碑加法汇总（见 BuildManager.prototype.moraleMul 聚合接口）；
  //   损坏跳过、老化按 agingEff() 折算。pop.js 不存在该字段时保持原行为。
  // 数值平衡注释：
  //   - 刻意便宜（Lv1 只要 15 铁）：纪念碑是「情绪价值」建筑，数值上
  //     对标医院 Lv1（growthBonus 0.5，成本 50 铁+10 钢）——纪念碑用极低成本
  //     换 0.1 增长，前期性价比极高，但上限只有 0.3/座，后期被医院/克隆中心超越。
  //   - 零耗电 Lv1/Lv2：纪念碑不需要电，停电的夜晚它依然亮着（字面意思）。
  //   - 与医院联动：两者都是增长乘区，加法叠加；与防空洞联动：一个保人、
  //     一个催生，是人口流派的两件套。
  // ═══════════════════════════════════════════════════════════════
  war_memorial: {
    id: 'war_memorial', name: '战争纪念碑', icon: '🗿',
    levels: [null,
      { cost: { iron: 15 }, needPop: 0, powerUse: 0,
        moraleMul: 0.10,
        desc: '无名战士碑：人口增长 +10%',
        flavor: '第一个名字刻上去那天，全城人自发来献了一束火星花。', },
      { cost: { iron: 40, steel: 5 }, needPop: 4, powerUse: 0,
        moraleMul: 0.20,
        desc: '英烈长廊：人口增长 +20%',
        flavor: '孩子们放学总爱绕到这里，摸一摸那些发烫的名字。', },
      { cost: { steel: 30 }, needPop: 8, powerUse: 1,
        moraleMul: 0.30,
        desc: '永恒火炬：人口增长 +30%',
        flavor: '名字刻在石头上，勇气长在心里。', },
    ],
    desc: '便宜的士气建筑：人口增长 +10%/级，pop.js 防御性读取 moraleMul',
    flavor: '纪念牺牲，是为了让活着的人更想活下去。',
  },

  // ═══════════════════════════════════════════════════════════════
  // 7. 💰 雇佣兵营地 merc_camp
  // 定位：花钱雇佣的机动防御。每级提供 1 队雇佣兵，每波袭击自动参战一队。
  // ★ 读取约定（military.js 防御性读取）：
  //   const squads = (BUILDINGS.merc_camp.levels[b.level] || {}).mercSquads || 0;
  //   行为规则（military.js 实现）：
  //     - 每一波袭击结算时，每座「未损坏」的营地派出 min(可用小队, 1) 队参战；
  //     - 参战小队按营地等级造成固定伤害后撤回（不永久消耗）；
  //     - 营地被摧毁则本波无援军。
  //   多座营地：小队数加法汇总（见 BuildManager.prototype.mercSquads 聚合接口）。
  // 数值平衡注释：
  //   - 「花钱雇佣」的体现：成本侧重 rare（稀有矿=硬通货），20/40 的稀有矿
  //     花费对应雇佣兵的佣金；Lv3 另需 15 科技点（高级装备）。
  //   - 与导弹井对比：导弹井是固定 CD 的 AOE，雇佣兵是每波必到的单体补刀；
  //     前者打敌群，后者点杀漏网之鱼，定位不重叠。
  //   - needPop 6/12/20：营地需要后勤人员，人口不足时雇佣兵也没有饭吃。
  //   - 与贸易站联动（v1.1）：贸易站换来的稀有矿可以直接变成雇佣兵，
  //     是「经济→军事」转化的最短链路。
  // ═══════════════════════════════════════════════════════════════
  merc_camp: {
    id: 'merc_camp', name: '雇佣兵营地', icon: '💰',
    levels: [null,
      { cost: { iron: 50, rare: 20 }, needPop: 6, powerUse: 1,
        mercSquads: 1,
        desc: '一队雇佣兵驻扎：每波袭击自动参战 1 队',
        flavor: '「我们不问为什么打仗，只问工钱什么时候到账。」——营地招牌', },
      { cost: { steel: 60, rare: 40 }, needPop: 12, powerUse: 2,
        mercSquads: 2,
        desc: '两队雇佣兵驻扎：每波袭击自动参战 2 队',
        flavor: '第二队的队长是第一队队长的前妻——配合反而更默契了。', },
      { cost: { steel: 120, tech: 15 }, needPop: 20, powerUse: 3,
        mercSquads: 3,
        desc: '精锐佣兵团：每波袭击自动参战 3 队',
        flavor: '他们的战旗上绣着一句话：「专业，可靠，概不赊账。」', },
    ],
    desc: '花钱雇佣：每级提供 1 队雇佣兵，每波袭击自动参战；military.js 读 mercSquads',
    flavor: '忠诚可以培养，但有时候直接购买更快。',
  },

  // ═══════════════════════════════════════════════════════════════
  // 8. ☢️ 核弹发射井 nuke_silo
  // 定位：终极威慑，手动发射，一次清屏所有来袭敌人。长冷却 10 分钟。
  // ★ 读取约定（military.js 防御性读取）：
  //   const lv = BUILDINGS.nuke_silo.levels[b.level] || {};
  //   const canNuke = !!lv.nukeReady;                 // 是否具备发射能力
  //   const cdMs = lv.nukeCooldownMs || 600000;       // 冷却 10 分钟（固定）
  //   const charges = lv.nukeCharges || 1;            // 可储存弹头数，随等级提升
  //   接口（BuildManager.prototype.nukeReady）：返回
  //     { ok:true, level, charges, cooldownMs } 或 { ok:false, reason }
  //   行为规则（military.js 实现）：
  //     - 发射按钮放在「军事面板」，由 military.js 渲染；只有 ok:true 且
  //       冷却转好、弹头数 >0 时可点击；
  //     - 发射后：清除当前所有来袭敌人（清屏），消耗 1 枚弹头，进入 10 分钟冷却；
  //     - 弹头平时缓慢补充（由 military.js 计时），上限 = charges；
  //     - 发射井被摧毁：未发射的弹头保留，但无法发射直到修复。
  // 数值平衡注释：
  //   - 三重门槛：科技（30/60/120）+ 铀矿（10/25/60）+ 人口（40/60/80），
  //     确保核弹是后期终极手段，不可能速攻rush出来。
  //   - 冷却固定 10 分钟不随等级缩减：核弹是「救场按钮」不是「常规武器」；
  //     等级提升只增加弹头储备（1/2/3），允许连续应对多波高压袭击。
  //   - 耗电 8/12/18：发射井待机也要维持制导系统供电，缺电=哑火，
  //     逼玩家配套聚变电站/核电站，形成能源→终极武器的依赖链。
  //   - 与导弹井联动：导弹井是自动常规火力，核弹是手动清屏；
  //     一自动一手动，操作节奏互补。
  // ═══════════════════════════════════════════════════════════════
  nuke_silo: {
    id: 'nuke_silo', name: '核弹发射井', icon: '☢️',
    levels: [null,
      { cost: { steel: 150, tech: 30, uranium: 10 }, needPop: 40, powerUse: 8,
        nukeReady: true, nukeCooldownMs: 600000, nukeCharges: 1,
        desc: '单弹头核发射井：手动发射核弹清屏，冷却 10 分钟',
        flavor: '按钮盖上写着：「希望你永远用不上我。」', },
      { cost: { steel: 300, tech: 60, uranium: 25 }, needPop: 60, powerUse: 12,
        nukeReady: true, nukeCooldownMs: 600000, nukeCharges: 2,
        desc: '双弹头核发射井：可储备 2 枚弹头，冷却 10 分钟',
        flavor: '第二枚弹头的存在，是为了让第一枚永远不用发射。', },
      { cost: { steel: 600, tech: 120, uranium: 60 }, needPop: 80, powerUse: 18,
        nukeReady: true, nukeCooldownMs: 600000, nukeCharges: 3,
        desc: '三弹头核发射井：可储备 3 枚弹头，冷却 10 分钟',
        flavor: '威慑的终极形态：让敌人连"试试"的念头都不敢有。', },
    ],
    desc: '终极武器：手动发射核弹清屏所有敌人，冷却 10 分钟；military.js 读 nukeReady 接口',
    flavor: '整个星港最安静的建筑——因为没人敢让它开口。',
  },

}); // end Object.assign(BUILDINGS, …)

// v1.3 建筑顺序（UI 用；game.js 可按需拼接到 BUILD_ORDER 后）
const BUILD_ORDER_V13 = ['mil_academy', 'arms_factory', 'radar', 'missile_silo',
  'shelter', 'war_memorial', 'merc_camp', 'nuke_silo'];

// ═══════════════════════════════════════════════════════════════════════
// v1.3 聚合接口：供 military.js / pop.js 防御性读取。
// 风格照抄 build.js 现有方法（shieldDodge / satelliteWarnBonus）：
// 损坏建筑跳过，老化按 this.agingEff(b) 折算。
// military.js 尚未接入时，这些接口静默返回 0 / false，不影响现有逻辑。
// ═══════════════════════════════════════════════════════════════════════

// 军事学院：防御塔伤害加成（加法汇总；military.js 内再与兵工厂做乘法叠加）
BuildManager.prototype.milTowerDmgBonus = function() {
  let s = 0;
  for (const b of this.buildings) {
    if (b.id !== 'mil_academy' || b.damaged) continue;
    const lv = this.levelDef(b);
    s += (lv.towerDmgMul || 0) * this.agingEff(b);
  }
  return s;
};
// 兵工厂：弹药伤害加成（加法汇总）
BuildManager.prototype.ammoDmgBonus = function() {
  let s = 0;
  for (const b of this.buildings) {
    if (b.id !== 'arms_factory' || b.damaged) continue;
    const lv = this.levelDef(b);
    s += (lv.ammoDmgMul || 0) * this.agingEff(b);
  }
  return s;
};
// 精英训练：是否存在未损坏的 Lv3 军事学院（塔射速 +10%）
BuildManager.prototype.eliteTraining = function() {
  return this.buildings.some(b =>
    b.id === 'mil_academy' && !b.damaged && b.level >= 3 &&
    !!this.levelDef(b).eliteTraining);
};
// 雷达站：袭击预警加成（毫秒；military.js 直接加到预警计时上）
BuildManager.prototype.raidWarnBonusMs = function() {
  let s = 0;
  for (const b of this.buildings) {
    if (b.id !== 'radar' || b.damaged) continue;
    const lv = this.levelDef(b);
    s += (lv.raidWarnBonus || 0) * 1000 * this.agingEff(b);
  }
  return Math.floor(s);
};
// 导弹井：取伤害最高的一座（未损坏）；military.js 按各自冷却独立调度
BuildManager.prototype.bestSiloStrike = function() {
  let best = null;
  for (const b of this.buildings) {
    if (b.id !== 'missile_silo' || b.damaged) continue;
    const lv = this.levelDef(b);
    const s = lv.siloStrike || {};
    const dmg = Math.floor((s.dmg || 0) * this.agingEff(b));
    if (!best || dmg > best.dmg) {
      best = { level: b.level, intervalMs: s.intervalMs || 120000, dmg };
    }
  }
  return best; // 无导弹井时返回 null，military.js 防御性处理
};
// 防空洞：是否存在未损坏的防空洞（袭击人口保护开关）
BuildManager.prototype.hasRaidProtect = function() {
  return this.buildings.some(b =>
    b.id === 'shelter' && !b.damaged && !!this.levelDef(b).raidProtect);
};
// 战争纪念碑：士气加成（加法汇总；pop.js 乘到人口增长率上）
// 注意：popCap 部分走现有 totalPopCap() 通道自动生效，此处只聚合 moraleMul。
BuildManager.prototype.moraleMul = function() {
  let s = 0;
  for (const b of this.buildings) {
    if (b.id !== 'war_memorial' || b.damaged) continue;
    const lv = this.levelDef(b);
    s += (lv.moraleMul || 0) * this.agingEff(b);
  }
  return s;
};
// 雇佣兵营地：可用小队总数（未损坏营地按等级累加）
BuildManager.prototype.mercSquads = function() {
  let s = 0;
  for (const b of this.buildings) {
    if (b.id !== 'merc_camp' || b.damaged) continue;
    s += this.levelDef(b).mercSquads || 0;
  }
  return s;
};
// 核弹发射井：nukeReady 接口（military.js 在军事面板渲染发射按钮时调用）
// 返回 { ok:true, level, charges, cooldownMs }；无可用发射井时 { ok:false, reason }
BuildManager.prototype.nukeReady = function() {
  let best = null;
  for (const b of this.buildings) {
    if (b.id !== 'nuke_silo' || b.damaged) continue;
    const lv = this.levelDef(b);
    if (!lv.nukeReady) continue;
    const charges = lv.nukeCharges || 1;
    if (!best || charges > best.charges) {
      best = { level: b.level, charges, cooldownMs: lv.nukeCooldownMs || 600000 };
    }
  }
  if (!best) return { ok: false, reason: '无可用核弹发射井' };
  return Object.assign({ ok: true }, best);
  // 冷却计时与弹头补充由 military.js 维护，本接口只提供静态能力数据。
};

if (typeof module !== 'undefined') { module.exports.BUILD_ORDER_V13 = BUILD_ORDER_V13; }

// ═══════════════════════════════════════════════════════════════════════
// 附录 A：v1.3 军事系统设计总览（给 military.js 实现者 & 数值策划）
// ═══════════════════════════════════════════════════════════════════════
// 威胁模型（military.js 后续实现时的假设）：
//   - 敌袭以「波次」为单位来袭，每波有敌群规模（HP 总量）与行进时间；
//   - 玩家防御手段 = 防御塔（常驻 DPS）+ 导弹井（定时 AOE）+ 雇佣兵（每波补刀）
//     + 核弹（手动清屏）；
//   - 本文件只声明建筑数值，不实现敌群 AI——military.js 负责波次生成与结算。
// 设计支柱：
//   1) 「预警→火力→保人」三段链：雷达（预警）→ 学院/兵工厂/导弹井（火力）
//      → 防空洞/纪念碑（保人）。缺任何一段都会在对应环节吃亏。
//   2) 乘法叠加只给「学院 × 兵工厂」这一对，避免多乘区失控；其余全部加法。
//   3) 终极武器（核弹）用三重门槛 + 固定长 CD 锁死强度天花板，保证它永远是
//      「救场按钮」而不是「日常武器」。
// 电力警示：v1.3 军事建筑普遍耗电（满配约 30+ 电力），
// 必须配套 v1.1 核电站 / v1.2 聚变电站，否则「停电=哑火」。
//
// ═══════════════════════════════════════════════════════════════════════
// 附录 B：逐建筑升级决策 & 联动矩阵 & 反制手段
// ═══════════════════════════════════════════════════════════════════════
//
// —— 1. 🎖️ 军事学院 mil_academy ——
// 升级决策：
//   Lv1（40 铁+10 钢）：开局第 2 波袭击前必出，性价比之王；
//   Lv2（100 铁+30 钢）：塔群成型（≥4 座塔）后补，收益开始超过单建一座塔；
//   Lv3（60 钢+30 稀有）：大后期质变，精英训练的 +10% 射速对高攻速塔是独立乘区。
// 联动矩阵：
//   × 兵工厂：唯一乘法叠加对，满配 1.45×1.30=1.885 倍塔伤；
//   × 维修站（v1.1）：学院被炸毁则全图塔伤加成清零，维修优先级最高；
//   × 学校（v1.1）：学校加速实验室→科技点→学院 Lv3 的稀有矿科技线，间接联动。
// 反制（敌方视角）：学院是高价值目标，military.js 可实现敌群优先攻击学院；
//   玩家侧反制手段：用防空洞无关——学院被毁靠的是维修站秒修 + 导弹井前置清波。
//
// —— 2. 🏭 兵工厂 arms_factory ——
// 升级决策：
//   Lv1（60 铁+10 稀有）：学院 Lv1 之后第二顺位，+10% 全塔伤；
//   Lv2（50 钢+25 稀有）：中期塔群扩张期，配合电力扩容一起上；
//   Lv3（120 钢+20 科技）：锁科技，先把实验室拉到 Lv2 再考虑。
// 联动矩阵：
//   × 军事学院：乘法叠加，见上；
//   × 冶炼厂（v1.0）/ 纳米工厂（v1.2）：兵工厂 Lv2/Lv3 的钢材需求巨大，
//     冶炼线必须提前铺好，否则卡钢；
//   × 核电站/聚变电站：powerUse 8 的 Lv3 兵工厂是电老虎，电力规划先行。
// 反制：高耗电=高脆弱，沙尘暴（disaster.js）期间太阳能打折→
//   若全靠太阳能，兵工厂会在沙尘暴中停工，塔伤加成暂时失效。
//
// —— 3. 📡 雷达站 radar ——
// 升级决策：
//   Lv1（30 钢+5 科技）：第一波袭击预警刚需，越早越好；
//   Lv2（70 钢+12 科技）：导弹井建成后必升，让 120 秒 CD 的发射节奏可被预判；
//   Lv3（150 钢+30 科技）：后期多线布防，45 秒预警=从容调度的分水岭。
// 联动矩阵：
//   × 导弹井：预警时间 vs 导弹 CD 的节奏配合（military.js 可做"导弹 X 秒后就绪"提示）；
//   × 气象站/气象卫星：注意区分——气象系管灾难预警（毫秒，disaster.js），
//     雷达管敌袭预警（秒，military.js），两者数值通道独立、可同时存在；
//   × 实验室：雷达全系成本含科技点，科研是前置。
// 反制：雷达本身不提供任何火力/防御，被敌群直扑时毫无还手之力，
//   需用塔群或雇佣兵贴身保护；损坏后预警归零，等于"盲打"。
//
// —— 4. 🚀 导弹井 missile_silo ——
// 升级决策：
//   Lv1（80 钢+10 科技）：中期第一口井，50 伤齐射可秒小波次杂兵；
//   Lv2（180 钢+30 科技）：120 伤进入"重创"区间，配合塔群可无伤守波；
//   Lv3（350 钢+70 科技+10 铀）：250 伤质变，但铀矿门槛把它锁在 v1.2 铀矿机之后。
// 联动矩阵：
//   × 雷达站：预警→齐射的节奏链；
//   × 铀矿机（v1.2）：Lv3 的 10 铀矿是 v1.2→v1.3 资源链的第一环；
//   × 核弹发射井：导弹是自动常规火力，核弹是手动清屏，一自动一手动互补。
// 反制：120 秒固定 CD 是阿喀琉斯之踵——连续两波间隔 <120 秒的袭击会让
//   第二口井哑火；military.js 可设计"佯攻波"专门骗导弹齐射。
//   另：无目标时不发射，好钢用在刀刃上，但也被"分批佯攻"战术克制。
//
// —— 5. 🕳️ 防空洞 shelter ——
// 升级决策：
//   Lv1（30 铁，0 人口 0 耗电）：开局无脑建，新手第一道保险；
//   Lv2（70 铁+10 钢）：人口破 30 后补，上限+12 开始有体感；
//   Lv3（50 钢+20 稀有）：大后期人口破百时，18 上限/座的性价比超过居住舱。
// 联动矩阵：
//   × 战争纪念碑：防空洞"保住人"，纪念碑"让人长得快"，人口引擎防御闭环；
//   × 居住舱/生态穹顶：popCap 走同一通道（totalPopCap 自动汇总），
//     可混合搭配：居住舱管上限基数，防空洞管战时不掉人；
//   × 医院/克隆中心：增长乘区建筑只管"生"，不管"死"，防空洞补上死的缺口。
// 反制：防空洞只保人口不保建筑，敌群"拆家流"（专打生产建筑）不受影响；
//   且 raidProtect 只要有一座未损坏就生效——敌方最优策略是优先点杀所有防空洞。
//
// —— 6. 🗿 战争纪念碑 war_memorial ——
// 升级决策：
//   Lv1（15 铁）：全游戏最便宜的建筑，开局顺手建；
//   Lv2（40 铁+5 钢）：+20% 增长，前期人口滚雪球的核心；
//   Lv3（30 钢）：+30% 封顶，后期让位给医院/克隆中心（成长曲线被超越）。
// 联动矩阵：
//   × 医院（v1.0）：同为增长乘区，加法叠加，前期纪念碑+医院双管齐下；
//   × 防空洞：见上，人口闭环；
//   × 学校：学校加速科技→解锁高级人口建筑，纪念碑负责把"人口基数"撑大，
//     两者共同服务于发射台/方舟的人口门槛（60/200 人）。
// 反制：纪念碑是纯增益建筑，被摧毁只损失增长加成、不损失已有人品；
//   因此它是敌方低优先级目标——某种意义上"便宜+不拉仇恨"就是它的生存策略。
//
// —— 7. 💰 雇佣兵营地 merc_camp ——
// 升级决策：
//   Lv1（50 铁+20 稀有）：第一波袭击前的"雇佣保险"，1 队补刀；
//   Lv2（60 钢+40 稀有）：中期多波次压力，2 队轮换；
//   Lv3（120 钢+15 科技）：3 队精锐，质变点在"稳定每波都有援军"。
// 联动矩阵：
//   × 贸易站（v1.1）：稀有矿是佣金，贸易站→稀有矿→雇佣兵是最短的"经济转军事"链；
//   × 导弹井：导弹打群伤、雇佣兵点杀漏网，火力分工；
//   × 军事学院/兵工厂：雇佣兵伤害是否吃塔伤加成，由 military.js 定，
//     本文件不预设（防御性：military.js 可自行决定乘区归属）。
// 反制：雇佣兵每波只参战固定队数，面对"超大规模单波"会力不从心；
//   且营地被毁=本波无援军，是敌方高优先级目标，需要塔群保护营地本身。
//
// —— 8. ☢️ 核弹发射井 nuke_silo ——
// 升级决策：
//   Lv1（150 钢+30 科技+10 铀，40 人口）：终极威慑入场券，1 发救场；
//   Lv2（300 钢+60 科技+25 铀，60 人口）：2 发储备，可连打两波高压；
//   Lv3（600 钢+120 科技+60 铀，80 人口）：3 发+满级排面，威慑拉满。
// 联动矩阵：
//   × 铀矿机/聚变电站（v1.2）：铀矿是燃料，聚变是电力，v1.2 能源线是前置；
//   × 指挥中心（v1.0）：发射权限走指挥体系，military.js 可要求"有指挥中心
//     才能点火"（本文件不强制，留给 military.js 做 needCommand 式校验）；
//   × 雷达站：45 秒预警+手动核弹=玩家有充足时间决定"这一发值不值"。
// 反制：10 分钟固定 CD + 手动发射=操作压力；敌方"多波次车轮战"专治核弹流——
//   第一发清屏后，后续 10 分钟内的波次只能靠常规火力硬吃。
//   另：核弹清屏不区分敌我？本文件不预设，military.js 可自行决定
//   是否有误伤/辐射debuff（扩展点）。\n//
// ═══════════════════════════════════════════════════════════════════════
// 附录 C：v1.3 数值速查表（成本 / 人口 / 耗电 / 效果）
// ═══════════════════════════════════════════════════════════════════════
// 建筑            Lv1 成本              Lv2 成本               Lv3 成本                  needPop    电力     效果/级
// ─────────────────────────────────────────────────────────────────────────────────────────────────────────────
// 军事学院 🎖️     铁40 钢10            铁100 钢30            钢60 稀有30              8/16/25    2/3/4    塔伤+15%，Lv3 射速+10%
// 兵工厂 🏭       铁60 稀有10          钢50 稀有25           钢120 科技20            10/20/30   3/5/8    塔伤+10%（与学院乘法叠加）
// 雷达站 📡       钢30 科技5           钢70 科技12           钢150 科技30            12/20/30   2/2/3    袭击预警+15秒
// 导弹井 🚀       钢80 科技10          钢180 科技30          钢350 科技70 铀10      15/25/40   4/6/8    120秒齐射，伤害50/120/250
// 防空洞 🕳️       铁30                 铁70 钢10             钢50 稀有20              0/6/12     0/1/1    人口上限+6，袭击免人口损失
// 纪念碑 🗿       铁15                 铁40 钢5              钢30                     0/4/8      0/0/1    人口增长+10%
// 雇佣兵营地 💰   铁50 稀有20          钢60 稀有40           钢120 科技15            6/12/20    1/2/3    每级1队雇佣兵/波
// 核弹井 ☢️       钢150 科技30 铀10    钢300 科技60 铀25     钢600 科技120 铀60     40/60/80   8/12/18  手动核弹清屏，CD 10分钟，弹头1/2/3
// ─────────────────────────────────────────────────────────────────────────────────────────────────────────────
// 满配参考：8 建筑全 Lv3 总耗电 = 4+8+3+8+1+1+3+18 = 46 电力，
// 需至少一座聚变电站 Lv1（100 电）或核电站 Lv2（70 电）支撑，电力规划先行。

// ═══════════════════════════════════════════════════════════════════════
// 附录 D：describe() 扩展 —— 让建造/升级面板能正确描述 v1.3 建筑的军事字段。
// 实现方式：包装原 BuildManager.prototype.describe（build.js），
// 在原有描述字符串后追加 v1.3 专属字段说明；不影响 v1.0–v1.2 建筑。
// ═══════════════════════════════════════════════════════════════════════
(function() {
  const _origDescribe = BuildManager.prototype.describe;
  BuildManager.prototype.describe = function(b) {
    let s = _origDescribe.call(this, b);
    const lv = this.levelDef(b);
    try {
      if (b.id === 'mil_academy') {
        if (lv.towerDmgMul) s += `｜防御塔伤害+${Math.round(lv.towerDmgMul * 100)}%`;
        if (lv.eliteTraining) s += `｜精英训练：塔射速+10%`;
      } else if (b.id === 'arms_factory') {
        if (lv.ammoDmgMul) s += `｜防御塔伤害+${Math.round(lv.ammoDmgMul * 100)}%（弹药补给）`;
      } else if (b.id === 'radar') {
        if (lv.raidWarnBonus) s += `｜袭击预警+${lv.raidWarnBonus}秒`;
      } else if (b.id === 'missile_silo') {
        const st = lv.siloStrike || {};
        if (st.dmg) s += `｜每${(st.intervalMs || 120000) / 1000}秒齐射，伤害${st.dmg}`;
      } else if (b.id === 'shelter') {
        // popCap 已由原 describe 输出（｜+N人口上限），这里只补保护说明
        if (lv.raidProtect) s += `｜袭击时人口不损失`;
      } else if (b.id === 'war_memorial') {
        if (lv.moraleMul) s += `｜人口增长+${Math.round(lv.moraleMul * 100)}%`;
      } else if (b.id === 'merc_camp') {
        if (lv.mercSquads) s += `｜每波雇佣兵${lv.mercSquads}队参战`;
      } else if (b.id === 'nuke_silo') {
        if (lv.nukeReady) s += `｜☢️核弹待命：手动清屏，冷却${(lv.nukeCooldownMs || 600000) / 60000}分钟，弹头×${lv.nukeCharges || 1}`;
      }
    } catch (e) { /* 描述增强失败不影响原描述 */ }
    return s;
  };
})();

// ═══════════════════════════════════════════════════════════════════════
// 附录 E：军事总览快照 —— military.js 军事面板可直接调用，
// 一次拿到全城军事态势（火力 / 预警 / 保人 / 终极武器），用于面板渲染。
// 返回值全部为普通数据（无函数），military.js 可 JSON 序列化。
// ═══════════════════════════════════════════════════════════════════════
BuildManager.prototype.militarySnapshot = function() {
  const towerDmgBonus = this.milTowerDmgBonus();
  const ammoDmgBonus = this.ammoDmgBonus();
  // 最终塔伤乘数 = (1+学院) × (1+兵工厂)，与读取约定一致
  const towerDmgMulFinal = (1 + towerDmgBonus) * (1 + ammoDmgBonus);
  const nuke = this.nukeReady();
  return {
    // 火力
    towerDmgMulFinal: Math.round(towerDmgMulFinal * 1000) / 1000,
    eliteTraining: this.eliteTraining(),
    siloStrike: this.bestSiloStrike(),           // null = 无导弹井
    mercSquads: this.mercSquads(),
    // 预警
    raidWarnBonusMs: this.raidWarnBonusMs(),
    // 保人
    raidProtect: this.hasRaidProtect(),
    moraleMul: Math.round(this.moraleMul() * 1000) / 1000,
    // 终极武器（military.js 据此渲染发射按钮的可用状态）
    nuke: nuke.ok
      ? { ready: true, level: nuke.level, charges: nuke.charges, cooldownMs: nuke.cooldownMs }
      : { ready: false, reason: nuke.reason },
  };
};
