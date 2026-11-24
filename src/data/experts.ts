export interface WorkSection {
  category: string;
  items: string[];
}

export interface AcademicItem {
  title: string;
  category: string;
  detail: string;
  registryCode?: string;
}

export interface ExpertProfile {
  id: string;
  certificateNo: string;
  name: string;
  gender: string;
  age: number;
  ethnicity: string;
  politicalStatus: string;
  location: string;
  phone: string;
  email: string;
  photoUrl: string;
  visitingTitle: string;
  department: string;
  primaryInstitution: string;
  primaryRole: string;
  primaryField: string;
  cardSummary: string;
  workOverview: string;
  workSections: WorkSection[];
  academicAchievements: AcademicItem[];
  socialAppointments: {
    organization: string;
    position: string;
  }[];
  coreAdvantages: string[];
  qualifications: string[];
}

export const EXPERTS: ExpertProfile[] = [
  {
    id: 'chen-qizheng',
    certificateNo: 'NMGFY-ZJ-2026001',
    name: '陈麒争',
    gender: '男',
    age: 28,
    ethnicity: '汉',
    politicalStatus: '群众',
    location: '江苏南京',
    phone: '17333168482',
    email: 'zemelchan@163.com',
    photoUrl: '/assets/aistudio/fdedbb4e8e5567cb14fdd85f318490e4_5cf8b358.jpg',
    visitingTitle: '访问专家 · 执业医师',
    department: '中医临床与康复医学',
    primaryInstitution: '御慈康医学研究院',
    primaryRole: '院长',
    primaryField: '医疗健康 / 中医药',
    cardSummary:
      '深耕中医临床与康复调理近 10 年，御康中医非遗技艺传承人，主持“中医诊疗+运动康复+营养调理+心理干预”全维度健康服务体系建设。',
    workOverview:
      '全面负责御慈康医学研究院的战略规划、临床业务开展、科研项目推进与团队管理，带领 22 人医疗与研究团队打造“非遗技艺传承+临床诊疗+成果转化”三位一体的运营模式。',
    workSections: [
      {
        category: '临床与技艺传承',
        items: [
          '主导搭建御康非遗技艺标准化诊疗体系，将传统中医技艺与现代康复技术融合，患者综合治愈率提升至 72%，随访满意度达 96%。',
          '建立非遗技艺师徒传承机制，推动传统中医技术的标准化推广与代际传承。',
        ],
      },
      {
        category: '科研与成果转化',
        items: [
          '牵头开展中医疑难病症诊疗方案、中西医结合康复技术等 7 项研究课题，主导研发的“中医快速康复方案”获得国家发明专利，已落地 3 家合作医疗机构试点应用。',
          '带领技术团队研发中医健康管理系统、中医诊疗辅助决策系统等 4 款医疗软件，获得 4 项软件著作权，帮助合作机构诊疗效率提升 40%，患者健康档案管理成本降低 60%。',
          '担任《现代中医理论与临床实践》副主编，梳理近 5 年临床典型案例 120 例纳入教材。',
          '发表的科普论文《西药控制指标，中药调体质》被维普数据库收录，累计阅读量超 10 万次。',
        ],
      },
      {
        category: '行业生态建设',
        items: [
          '与国内 3 家三甲医院、6 家基层医疗机构建立合作关系，推动“中医适宜技术进基层”项目落地，累计为基层培养中医康复人才 100 余名，覆盖安徽省 17 个区县。',
          '作为中国中医药文化促进会理事，中国医药卫生文化协会委员、亚太青年发展协会安徽省区理事，参与中医药行业标准研讨、青年中医人才培养等行业活动 15 次，推动区域中医药服务能力提升。',
        ],
      },
    ],
    academicAchievements: [
      {
        category: '教材著作',
        title: '《现代中医理论与临床实践》',
        detail: '担任副主编，梳理近 5 年临床典型案例 120 例纳入教材。',
      },
      {
        category: '学术论文',
        title: '《西药控制指标，中药调体质》',
        detail: '维普数据库收录，累计阅读量超 10 万次。',
      },
      {
        category: '国家发明专利（1 项）',
        title: '一种中医骨伤快速康复辅助治疗装置',
        detail: '国家知识产权局授权发明专利，已落地 3 家合作医疗机构试点应用。',
        registryCode: '专利号：ZL202210876234.X',
      },
      {
        category: '软件著作权',
        title: '中医健康管理智能分析系统 V1.0',
        detail: '面向中医健康档案管理与诊疗辅助的智能化信息系统。',
        registryCode: '登记号：2021SR1456789',
      },
      {
        category: '软件著作权',
        title: '慢性病健康随访与个性化诊疗辅助平台 / 中医适宜技术临床应用智能指导系统',
        detail: '支撑慢性病长期随访跟踪及中医适宜技术临床标准化指导。',
      },
      {
        category: '软件著作权',
        title: '体质数据智能研判与定制调理平台',
        detail: '基于中医体质辨识模型实现个性化调理方案研判。',
        registryCode: '登记号：2022SR0987654',
      },
      {
        category: '软件著作权',
        title: '非遗中医技艺传承培训管理系统 V1.0',
        detail: '用于非遗中医技艺师徒传承、教学考核与标准化管理。',
        registryCode: '登记号：2023SR0765432',
      },
    ],
    socialAppointments: [
      {
        organization: '国智办高端人才研究智库联盟',
        position: '客座教授',
      },
      {
        organization: '香港高等教育科学研究院',
        position: '临床医学终身教授（全球健康学终身教授）',
      },
      {
        organization: '中国医药卫生文化协会',
        position: '委员',
      },
      {
        organization: '亚太青年发展协会中国大区安徽省区理事会',
        position: '理事',
      },
      {
        organization: '中国中医药研究促进会新药转化与临床评价分会',
        position: '理事',
      },
      {
        organization: '中国医药大学',
        position: '特聘专家',
      },
    ],
    coreAdvantages: [
      '国家级非物质文化遗产御康中医技艺、御康奇针水针疗法、御康疑难杂症特效综合治疗技术三项核心技艺传承人，深耕中医临床、康复调理领域近 10 年，拥有丰富的疑难病症诊疗经验。',
      '持有执业医师、中医康复理疗师、高级正骨整脊师、ACSM-CASM 认证运动生理学家、三级公共营养师、心理咨询师等 12 项专业资质，构建了“中医诊疗+运动康复+营养调理+心理干预”的全维度健康服务能力体系。',
      '担任国智办高端人才研究智库联盟客座教授、香港高等教育科学研究院全球健康学终身教授，累计开展中西医结合医学相关讲座、培训 50 场。',
      '拥有 1 项发明专利、4 项医疗相关软件著作权，担任《现代中医理论与临床实践》副主编，发表的科普论文《西药控制指标，中药调体质》被维普数据库收录，具备较强的医学研究与成果转化能力。',
      '兼任中国中医药研究促进会新药转化与临床评价分会理事，中国医药卫生文化协会委员，亚太青年发展协会安徽省区理事会理事，拥有丰富的行业资源与跨机构协作经验，熟悉中医药行业政策与新药转化、临床评价相关流程。',
    ],
    qualifications: [
      '执业医师',
      '高级中西医结合医学讲师',
      '中医康复理疗师',
      '中医预防保健调理师',
      '中医健康管理师',
      '高级正骨整脊师',
      'ACSM-CASM 认证运动生理学家',
      '国际运动营养学会运动营养专家',
      '中国营养学会三级公共营养师',
      '中国红十字会红十字救护员',
      'AHA 美国心脏协会心脏救护员',
      '心理咨询师',
    ],
  },
];

export interface SearchQuery {
  name: string;
  certificateNo: string;
}

export function searchExperts(query: SearchQuery): ExpertProfile[] {
  const nameTerm = query.name.trim().toLowerCase();
  const certTerm = query.certificateNo.trim().toLowerCase();

  if (!nameTerm && !certTerm) {
    return [];
  }

  return EXPERTS.filter((expert) => {
    const matchesName = nameTerm
      ? expert.name.toLowerCase().includes(nameTerm)
      : true;
    const matchesCert = certTerm
      ? expert.certificateNo.toLowerCase() === certTerm
      : true;
    return matchesName && matchesCert;
  });
}

export function findExpertByCertificateOrId(identifier: string): ExpertProfile | undefined {
  const normalized = identifier.trim().toLowerCase();
  return EXPERTS.find(
    (expert) =>
      expert.id.toLowerCase() === normalized ||
      expert.certificateNo.toLowerCase() === normalized
  );
}
