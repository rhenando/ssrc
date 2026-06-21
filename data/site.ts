import type {
  ContactChannel,
  Download,
  EngineeringClient,
  EngineeringProject,
  NavItem,
  Stat,
  TeamMember,
  TextCard
} from "@/lib/types";
import { telHref } from "@/lib/utils";

export const navItems: NavItem[] = [
  { href: "/", labels: { en: "Home", ar: "الرئيسية" } },
  { href: "/about", labels: { en: "About", ar: "عن الشركة" } },
  { href: "/services", labels: { en: "Services", ar: "الخدمات" } },
  { href: "/engineering", labels: { en: "Engineering", ar: "المجالس الهندسية" } },
  { href: "/downloads", labels: { en: "Downloads", ar: "التحميلات" } },
  { href: "/contact", labels: { en: "Contact", ar: "تواصل معنا" } }
];

export const contactChannels: ContactChannel[] = [
  { type: "email", label: "General", value: "general@ssrc.online", href: "mailto:general@ssrc.online" },
  { type: "email", label: "Engineering", value: "engineering@ssrc.online", href: "mailto:engineering@ssrc.online" },
  { type: "phone", label: "US", value: "+1 949 287 3927", href: telHref("+1 949 287 3927") },
  { type: "phone", label: "Syria", value: "+963 968 268 933", href: telHref("+963 968 268 933") },
  { type: "phone", label: "Germany", value: "+49 178 4522794", href: telHref("+49 178 4522794") }
];

export const homeStats: Stat[] = [
  { value: "150", suffix: "+", labels: { en: "Studies", ar: "دراسة" } },
  { value: "25", suffix: "+", labels: { en: "Countries", ar: "دولة" } },
  { value: "10", suffix: "+", labels: { en: "Years", ar: "سنوات" } }
];

export const homePurpose: TextCard[] = [
  {
    key: "mission",
    eyebrow: { en: "Mission", ar: "الرسالة" },
    titles: { en: "Driving Meaningful Change", ar: "تحقيق تغيير حقيقي" },
    bodies: {
      en: "To generate credible, data-driven insights that empower decision-makers, strengthen governance, and foster sustainable development within Syria and the wider region.",
      ar: "توليد رؤى موثوقة وقائمة على البيانات تمكّن صناع القرار وتعزز الحوكمة وتدعم التنمية المستدامة في سوريا والمنطقة الأوسع."
    }
  },
  {
    key: "vision",
    eyebrow: { en: "Vision", ar: "الرؤية" },
    titles: { en: "Leading Regional Research Hub", ar: "مركز رائد للبحوث الإقليمية" },
    bodies: {
      en: "To be Syria's leading center for research excellence, innovation, and strategic consulting, shaping a more informed and resilient future.",
      ar: "أن نكون المركز الرائد في سوريا للتميز البحثي والابتكار والاستشارات الاستراتيجية وصياغة مستقبل أكثر معرفة ومرونة."
    }
  }
];

export const values: TextCard[] = [
  {
    key: "integrity",
    titles: { en: "Integrity", ar: "النزاهة" },
    bodies: { en: "We uphold ethical standards, transparency, impartiality, and trustworthiness.", ar: "نلتزم بأعلى المعايير المهنية والشفافية والموضوعية والموثوقية." }
  },
  {
    key: "excellence",
    titles: { en: "Excellence", ar: "التميّز" },
    bodies: { en: "We deliver high-quality, evidence-based results that meet international standards.", ar: "نقدم نتائج عالية الجودة وقائمة على الأدلة تلبّي المعايير الدولية." }
  },
  {
    key: "innovation",
    titles: { en: "Innovation", ar: "الابتكار" },
    bodies: { en: "We evolve our methodologies with creativity and forward thinking.", ar: "نطور منهجياتنا باستمرار من خلال الإبداع والتفكير المستقبلي." }
  },
  {
    key: "collaboration",
    titles: { en: "Collaboration", ar: "التعاون" },
    bodies: { en: "We work closely with clients and stakeholders to co-create solutions.", ar: "نعمل مع العملاء وأصحاب المصلحة لصناعة حلول مشتركة." }
  },
  {
    key: "accountability",
    titles: { en: "Accountability", ar: "المساءلة" },
    bodies: { en: "We take responsibility for the accuracy, reliability, and impact of our work.", ar: "نتحمل مسؤولية دقة وموثوقية وتأثير عملنا في كل مشروع." }
  },
  {
    key: "empowerment",
    titles: { en: "Empowerment", ar: "التمكين" },
    bodies: { en: "We help teams make better decisions through data and applied insight.", ar: "نساعد الفرق على اتخاذ قرارات أفضل من خلال البيانات والرؤى التطبيقية." }
  }
];

export const services: TextCard[] = [
  {
    key: "market-research",
    titles: { en: "Market Research", ar: "أبحاث السوق" },
    bodies: {
      en: "Deep market insights and comprehensive analysis of evolving dynamics, consumer behaviour, and growth opportunities.",
      ar: "رؤى عميقة وتحليل شامل لفهم ديناميكيات السوق وسلوك المستهلكين وفرص النمو."
    }
  },
  {
    key: "data-analytics",
    titles: { en: "Data Analytics", ar: "تحليل البيانات" },
    bodies: {
      en: "Analytical frameworks and trend identification that extract actionable insight from complex datasets.",
      ar: "أطر تحليلية متقدمة وتحديد الاتجاهات لاستخراج رؤى قابلة للتنفيذ من البيانات المعقدة."
    }
  },
  {
    key: "policy-studies",
    titles: { en: "Policy Studies", ar: "دراسات السياسات" },
    bodies: {
      en: "Policy analysis, regulatory landscape mapping, and research reports for complex policy environments.",
      ar: "تحليل شامل للسياسات ورسم خرائط المشهد التنظيمي وتقارير بحثية للتنقل بثقة في بيئات السياسات."
    }
  }
];

export const teamMembers: TeamMember[] = [
  {
    slug: "durry-atassi",
    name: "Durry Atassi",
    roles: { en: "Senior Consultant", ar: "مستشار أول" },
    image: "/images/durry-new.png.jpg",
    group: "research",
    bios: {
      en: "A career engineer and senior consultant with over 30 years of experience dedicated to high-quality service delivery and professional integrity. Leverages strategic thinking and analytical skills to impact businesses and individuals across the USA and the MENA region.",
      ar: "مهندس ومستشار أول بخبرة تزيد عن 30 عاماً، يستفيد من التفكير الاستراتيجي والمهارات التحليلية لخدمة المؤسسات والأفراد."
    }
  },
  {
    slug: "darine-atassi",
    name: "Darine Atassi",
    roles: { en: "International Development", ar: "التنمية الدولية" },
    image: "/images/darine.png",
    group: "research",
    bios: {
      en: "Extensive expertise in international development, governance, and civil society engagement. Successfully managed complex programs funded by international donors, designing projects that strengthen social cohesion in conflict-affected regions.",
      ar: "خبرة واسعة في التنمية الدولية والحوكمة وإدارة البرامج التي تعزز التماسك الاجتماعي."
    }
  },
  {
    slug: "dima-ali",
    name: "Dima Ali",
    roles: { en: "Project Manager & Researcher", ar: "مديرة مشاريع وباحثة" },
    image: "/images/dima1.png",
    group: "research",
    bios: {
      en: "Over nine years of specialized experience in project management and rigorous research within the Syrian civil society sector. A collaborator with the Carnegie Middle East Center and the Syrian Creative Memory Foundation.",
      ar: "أكثر من تسع سنوات خبرة في إدارة المشاريع والأبحاث ضمن قطاع المجتمع المدني السوري."
    }
  },
  {
    slug: "ramia-abdulsamad",
    name: "Ramia Abdulsamad",
    roles: { en: "Education & Strategy", ar: "التعليم والاستراتيجية" },
    image: "/images/ramia1.png",
    group: "research",
    bios: {
      en: "A strategic leader driving positive transformation and innovation in education and learning. Produces innovative strategies aligned with long-term organizational objectives, making her a valuable contributor to SSRC's mission.",
      ar: "قائدة استراتيجية تقود التحول الإيجابي والابتكار في مجالات التعليم والتعلم."
    }
  },
  {
    slug: "zaine-wolfson",
    name: "Zaine Wolfson",
    roles: { en: "Operations Lead", ar: "مديرة العمليات" },
    image: "/images/zaine.jpg",
    group: "research",
    bios: {
      en: "Deep experience in operational leadership and systems optimization, specializing in the intersection of healthcare delivery and patient advocacy. A proven track record in team building and cross-functional collaboration.",
      ar: "خبرة عميقة في القيادة التشغيلية وتحسين الأنظمة وبناء فرق عمل فعالة."
    }
  },
  {
    slug: "salam-alboukai",
    name: "Salam Alboukai",
    roles: { en: "Field Researcher", ar: "باحث ميداني" },
    image: "/images/salam.jpg",
    group: "research",
    bios: {
      en: "An engineer and field researcher with extensive background in sociological analysis and community development. Led specialized field teams across Homs and Lebanon, currently focusing on strengthening civil society and cultural movement.",
      ar: "مهندس وباحث ميداني بخبرة في التحليل الاجتماعي والتنمية المجتمعية."
    }
  },
  {
    slug: "durry-atassi-engineering",
    name: "Durry Atassi, P.E.",
    roles: { en: "Principal Engineering Manager | BSCE State of California", ar: "مدير هندسي رئيسي | بكالوريوس هندسة مدنية - ولاية كاليفورنيا" },
    image: "/images/durry-new.png.jpg",
    group: "engineering",
    bios: {
      en: "A professional Civil Engineer licensed in California with over 41 years of experience in project management. Durry has worked on many mega projects in the USA (California) and Saudi Arabia with international firms such as Jacobs, Parsons, WSP, SOM, and Egis in Riyadh and Bahrain. As a strategic planning professional in infrastructure development, he has developed and implemented long-term plans for public and private infrastructure projects, aligning them with an organization's vision and goals. This includes analyzing environmental factors, engaging stakeholders, prioritizing initiatives, and creating actionable plans for delivery. He ensures projects meet current and future needs, improve operational resilience, and deliver sustainable outcomes. His diverse background, communication, and leadership skills have given his professional career a new dimension. As a certified co-active coach, he is also championing his passion as a career development expert.",
      ar: "مهندس مدني محترف ومرخص في كاليفورنيا، يتمتع بخبرة تزيد عن 41 عاماً في إدارة المشاريع. عمل دري في العديد من المشاريع العملاقة في الولايات المتحدة الأمريكية (كاليفورنيا) والمملكة العربية السعودية مع شركات عالمية مثل Jacobs وParsons وWSP وSOM وEgis في الرياض والبحرين. وبصفته متخصصاً في التخطيط الاستراتيجي لتطوير البنية التحتية، قام بتطوير وتنفيذ خطط طويلة الأمد لمشاريع البنية التحتية العامة والخاصة، مع مواءمتها مع رؤية المؤسسة وأهدافها. ويشمل ذلك تحليل العوامل البيئية، وإشراك أصحاب المصلحة، وترتيب أولويات المبادرات، ووضع خطط قابلة للتنفيذ للتسليم. يضمن أن تلبي المشاريع الاحتياجات الحالية والمستقبلية، وتحسن المرونة التشغيلية، وتحقق نتائج مستدامة. وقد منحت خلفيته المتنوعة ومهاراته في التواصل والقيادة مسيرته المهنية بعداً جديداً. وبصفته مدرباً معتمداً في منهجية Co-Active، فهو يدعم أيضاً شغفه كخبير في تطوير المسار المهني."
    }
  },
  {
    slug: "azmi-atassi",
    name: "Azmi A. Abousaleh, P.E.",
    roles: { en: "Principal Engineer | M.M.E · Licensed P.E., State of Texas", ar: "مهندس رئيسي | ماجستير هندسة ميكانيكية · مهندس محترف مرخص، ولاية تكساس" },
    image: "/images/azmi.png",
    group: "engineering",
    bios: {
      en: "As a Professional Engineer in the State of Texas, Azmi has 45 years of experience in the oil & gas field. His competencies include management, supervision, mechanical, piping, pipeline, electrical & instrumentation engineering in the oil and gas and petrochemical industries - including plant piping, cross-country pipelines, mechanical and electrical equipment, pumps, valves, pressure vessels, heat exchangers, tanks, instrumentation, leak detection, metering stations, surge relief and drag reducing agent skids. Design and analysis of pipelines (Crude Oil/Gas/NGL), flowlines, trunklines, bulk plants, water/crude/gas wells, chilled water systems, water treatment facilities, irrigation distribution systems, pump stations, tank farm facilities, loading terminals, and other refinery and petrochemical facilities.\n\nExpertise includes project management, project control, cost control, scheduling, reporting, procurement and supervision of various contracts including EPC (Engineering-Procurement-Construction), LSTK (Lump Sum Turnkey), and LSPB (Lump Sum Procure & Build) projects.",
      ar: "بصفته مهندساً محترفاً في ولاية تكساس، يمتلك عزمي خبرة تمتد إلى 45 عاماً في مجال النفط والغاز. تشمل كفاءاته الإدارة والإشراف والهندسة الميكانيكية وهندسة الأنابيب وخطوط الأنابيب والهندسة الكهربائية وهندسة الأجهزة والتحكم في صناعات النفط والغاز والبتروكيماويات، بما في ذلك أنابيب المصانع، وخطوط الأنابيب العابرة للمناطق، والمعدات الميكانيكية والكهربائية، والمضخات، والصمامات، وأوعية الضغط، والمبادلات الحرارية، والخزانات، والأجهزة، وأنظمة كشف التسرب، ومحطات القياس، وأنظمة تخفيف الاندفاع، ووحدات عوامل تقليل الاحتكاك. كما تشمل خبرته تصميم وتحليل خطوط الأنابيب للنفط الخام والغاز وسوائل الغاز الطبيعي، وخطوط الجريان والخطوط الرئيسية، ومحطات التخزين، وآبار المياه والنفط والغاز، وأنظمة المياه المبردة، ومرافق معالجة المياه، وأنظمة توزيع الري، ومحطات الضخ، ومرافق مزارع الخزانات، ومحطات التحميل، وغيرها من مرافق المصافي والبتروكيماويات.\n\nتشمل خبرته إدارة المشاريع، ومراقبة المشاريع، وضبط التكاليف، والجدولة، وإعداد التقارير، والمشتريات، والإشراف على عقود متعددة تشمل EPC وLSTK وLSPB."
    }
  },
  {
    slug: "hussam-kassab",
    name: "Hussam Kassab",
    roles: { en: "Principal Engineer & Manager | BSc. Civil Engineering · PMP® · NFPA-CFPS", ar: "مهندس ومدير رئيسي | بكالوريوس هندسة مدنية · PMP® · NFPA-CFPS" },
    image: "/images/hussam.png",
    group: "engineering",
    bios: {
      en: "Over 35 years of engineering, design, consultancy, engineering support and management experience. Extensive experience in multi-discipline technical environments related to Oil & Gas and Infrastructure - including Petrochemicals, Desalination, Bridges/Causeways, Railways, Terminals, Ports & Berths, and Marine Structures.\n\nProven experience in design concepts development, master planning, detailed engineering, statutory reviews and approvals, and environmental issues. Main systems/equipment sizing and logistics considerations. Preparation of technical studies, engineering design, concepts development, front-end engineering and RFP preparations for PPP transactions as technical advisor and major EPC projects.",
      ar: "يمتلك أكثر من 35 عاماً من الخبرة في الهندسة والتصميم والاستشارات والدعم الهندسي والإدارة. لديه خبرة واسعة في البيئات الفنية متعددة التخصصات المرتبطة بالنفط والغاز والبنية التحتية، بما في ذلك البتروكيماويات، وتحلية المياه، والجسور والجسور البحرية، والسكك الحديدية، والمحطات، والموانئ والأرصفة، والمنشآت البحرية.\n\nلديه خبرة مثبتة في تطوير مفاهيم التصميم، والتخطيط الرئيسي، والهندسة التفصيلية، والمراجعات والاعتمادات النظامية، والقضايا البيئية. كما تشمل خبرته تحديد أحجام الأنظمة والمعدات الرئيسية واعتبارات الخدمات اللوجستية. وتشمل أعماله إعداد الدراسات الفنية، والتصميم الهندسي، وتطوير المفاهيم، والهندسة الأولية، وإعداد طلبات العروض لمعاملات الشراكة بين القطاعين العام والخاص بصفته مستشاراً فنياً، إضافة إلى مشاريع EPC الكبرى."
    }
  },
  {
    slug: "mohamed-alomar",
    name: "Mohamed Alomar",
    roles: { en: "Electrical Engineer & Manager | B.S. Electrical Engineering", ar: "مهندس ومدير كهربائي | بكالوريوس هندسة كهربائية" },
    image: "/images/mohamed.png",
    group: "engineering",
    bios: {
      en: "A highly professional Electrical Engineer and Manager with over 25 years of experience and proven construction management expertise. Mohamed has managed large-scale complex projects from budgeting, scheduling, staffing and quality assurance perspectives.\n\nExpertise covers design of 230kV, 115kV & 69kV switchyard and substations, overhead transmission and 13.8kV distribution lines, electrical power distribution systems, power system protection, technical load evaluation, and equipment sizing. Power System Analysis using ETAP PowerStation Software.",
      ar: "مهندس ومدير كهربائي محترف للغاية بخبرة تزيد عن 25 عاماً وخبرة مثبتة في إدارة الإنشاءات. أدار محمد مشاريع كبيرة ومعقدة من جوانب الميزانيات والجدولة وتوفير الكوادر وضمان الجودة.\n\nتشمل خبرته تصميم ساحات ومحطات التحويل بجهود 230 كيلوفولت و115 كيلوفولت و69 كيلوفولت، وخطوط النقل الهوائية وخطوط التوزيع 13.8 كيلوفولت، وأنظمة توزيع الطاقة الكهربائية، وحماية أنظمة الطاقة، وتقييم الأحمال الفنية، وتحديد أحجام المعدات. كما لديه خبرة في تحليل أنظمة الطاقة باستخدام برنامج ETAP PowerStation."
    }
  },
  {
    slug: "samir-rania",
    name: "Samir Rania",
    roles: { en: "Sr. Architectural Manager | Post Graduate Degree in Architecture, Versailles, France", ar: "مدير معماري أول | درجة دراسات عليا في العمارة، فرساي - فرنسا" },
    image: "/images/samir.png",
    group: "engineering",
    bios: {
      en: "Over 45 years of experience in design and leading/managing multidisciplinary architectural teams across a wide range of master planning and architectural projects. Expertise in enhancing technical aspects for standard and LEED requirements. Planning, programming and design of functional and aesthetic solutions for urban developments and buildings across various occupancies - including Industrial Buildings, Houses, Dwellings, Offices, Hotels, Hospitals, Medium-Rise and High-Rise Buildings.\n\nSamir has been involved in the strategic planning, design and delivery, and stakeholder coordination for many mega projects in Saudi Arabia, Canada, and France. He has worked with international firms including WSP, Khateeb & Alami, and DG Jones.",
      ar: "يمتلك أكثر من 45 عاماً من الخبرة في التصميم وقيادة وإدارة فرق معمارية متعددة التخصصات ضمن نطاق واسع من مشاريع التخطيط الرئيسي والمشاريع المعمارية. تشمل خبرته تعزيز الجوانب الفنية وفق المتطلبات القياسية ومتطلبات LEED، والتخطيط والبرمجة وتصميم حلول وظيفية وجمالية للتطويرات الحضرية والمباني بمختلف الاستخدامات، بما في ذلك المباني الصناعية، والمنازل، والمساكن، والمكاتب، والفنادق، والمستشفيات، والمباني المتوسطة والعالية الارتفاع.\n\nشارك سمير في التخطيط الاستراتيجي والتصميم والتسليم وتنسيق أصحاب المصلحة في العديد من المشاريع العملاقة في المملكة العربية السعودية وكندا وفرنسا. كما عمل مع شركات عالمية تشمل WSP وKhateeb & Alami وDG Jones."
    }
  },
  {
    slug: "ahmad-alkhateeb",
    name: "Ahmad Alkhateeb",
    roles: { en: "BIM Design Manager | BSc. Interior Architecture, Damascus University", ar: "مدير تصميم BIM | بكالوريوس عمارة داخلية، جامعة دمشق" },
    image: "/images/ahmad.png",
    group: "engineering",
    bios: {
      en: "Ahmed is the lead manager of the BIM design team with 16 years of experience managing digital 3D BIM design throughout the full project design cycle. He reinforces BIM standards while leading a technical team of experts, and leverages strong communication skills to optimize collaboration between architects, engineers, contractors, and owner representatives.\n\nAhmed has overseen the production of many successful BIM models delivering high-quality, clash-free results. He is highly versatile in Autodesk Revit and BIM 360, and has conducted training workshops for new users and entry-level BIM modelers.",
      ar: "أحمد هو المدير المسؤول عن فريق تصميم BIM، ويتمتع بخبرة 16 عاماً في إدارة التصميم الرقمي ثلاثي الأبعاد باستخدام BIM طوال دورة تصميم المشروع بالكامل. يعمل على تعزيز معايير BIM أثناء قيادته لفريق فني من الخبراء، ويستفيد من مهارات تواصل قوية لتحسين التعاون بين المعماريين والمهندسين والمقاولين وممثلي المالك.\n\nأشرف أحمد على إنتاج العديد من نماذج BIM الناجحة التي حققت نتائج عالية الجودة وخالية من التعارضات. وهو متمكن بدرجة عالية من Autodesk Revit وBIM 360، كما أجرى ورش تدريبية للمستخدمين الجدد ولمصممي BIM في المستويات المبتدئة."
    }
  },
  {
    slug: "reem-hayder",
    name: "Reem Hayder",
    roles: { en: "Process Engineer | MSc. Chemical Engineering · BSc. Chemical Engineering", ar: "مهندسة عمليات | ماجستير هندسة كيميائية · بكالوريوس هندسة كيميائية" },
    image: "/images/reem.png",
    group: "engineering",
    bios: {
      en: "Experience in preparation of key process deliverables including P&IDs, PFDs and piping main arrangements. Design and engineering of Water Treatment systems, Oil & Gas facilities, and utilities systems. Coordination with Piping/Mechanical, Instrumentation and Electrical design teams.",
      ar: "لديها خبرة في إعداد المخرجات الرئيسية لهندسة العمليات، بما في ذلك مخططات P&ID ومخططات PFD والترتيبات الرئيسية للأنابيب. تشمل خبرتها تصميم وهندسة أنظمة معالجة المياه، ومرافق النفط والغاز، وأنظمة المرافق، إضافة إلى التنسيق مع فرق تصميم الأنابيب والميكانيكا والأجهزة والكهرباء."
    }
  },
  {
    slug: "raghid-abdelsamad",
    name: "Raghid Abdelsamad",
    roles: { en: "Principal Engineer - Structural | BS Civil Engineering", ar: "مهندس إنشائي رئيسي | بكالوريوس هندسة مدنية" },
    image: "/images/raghid.png",
    group: "engineering",
    bios: {
      en: "Raghid brings 17 years of extensive background in structural design, specializing in steel structures. He thrives on complex and challenging design problems - his strong academic foundation and technical depth have made him the go-to engineer for the most demanding structural challenges.\n\nRaghid commands a full suite of structural software including Autodesk Revit, SkyCiv, ETABS/SAP2000, and Ansys for simulation and modeling work.",
      ar: "يمتلك راغد 17 عاماً من الخبرة الواسعة في التصميم الإنشائي، مع تخصص في المنشآت الفولاذية. يبرع في التعامل مع مشكلات التصميم المعقدة والصعبة، وقد جعلته خلفيته الأكاديمية القوية وعمقه الفني المهندس المرجعي لأكثر التحديات الإنشائية تطلباً.\n\nيتقن راغد مجموعة كاملة من برامج التحليل والتصميم الإنشائي، بما في ذلك Autodesk Revit وSkyCiv وETABS/SAP2000 وAnsys لأعمال المحاكاة والنمذجة."
    }
  },
  {
    slug: "jose-togado",
    name: "Jose Togado",
    roles: { en: "Sr. Mechanical Engineer | BSc. Mechanical Engineering - Electronics Major", ar: "مهندس ميكانيكي أول | بكالوريوس هندسة ميكانيكية - تخصص إلكترونيات" },
    image: "/images/jose.png",
    group: "engineering",
    bios: {
      en: "Over 25 years of combined experience in design, engineering and construction - covering management, execution, quality assurance, design familiarization and related engineering standards for major buildings, facilities and plants. Expertise includes Utilities Systems (HVAC, Fire Protection, Water Systems).\n\nExtensive experience in the operation and maintenance of Steam Generators with their auxiliaries and other industrial equipment and machinery for a sugar manufacturing plant, as well as District Cooling Facilities.",
      ar: "يمتلك أكثر من 25 عاماً من الخبرة المشتركة في التصميم والهندسة والإنشاء، وتشمل الإدارة والتنفيذ وضمان الجودة والتعرف على التصاميم والمعايير الهندسية ذات الصلة للمباني والمرافق والمصانع الكبرى. تشمل خبرته أنظمة المرافق مثل HVAC وأنظمة الحماية من الحريق وأنظمة المياه.\n\nكما يمتلك خبرة واسعة في تشغيل وصيانة مولدات البخار وملحقاتها، وغيرها من المعدات والآلات الصناعية في مصنع لإنتاج السكر، إضافة إلى مرافق التبريد المركزي."
    }
  }
];

export const downloads: Download[] = [
  {
    slug: "syrian-young-adults-labor-market-en",
    filenames: { en: "Syrian Young Adults in the Labor Market.pdf", ar: "Syrian Young Adults in the Labor Market.pdf" },
    descriptions: { en: "SSRC project document.", ar: "ملف مشروع SSRC." },
    filePath: "/docs/Syrian Young Adults in the Labor Market.pdf"
  },
  {
    slug: "syrian-young-adults-labor-market-ar",
    filenames: { en: "الشباب في سوق العمل السوري.pdf", ar: "الشباب في سوق العمل السوري.pdf" },
    descriptions: { en: "SSRC project document.", ar: "ملف مشروع SSRC." },
    filePath: "/docs/الشباب في سوق العمل السوري.pdf"
  }
];

const engineeringImageBase = "/images/2026/04";

export const engineeringProjects: EngineeringProject[] = [
  {
    slug: "tharwat-town",
    categories: { en: "Urban Development", ar: "التطوير العمراني" },
    titles: { en: "Tharwat Town Marine Works", ar: "أعمال البحر - طرواط تاون" },
    locations: { en: "Saudi Arabia", ar: "المملكة العربية السعودية" },
    descriptions: {
      en: "Marine reclamation works and shore protection design package for 4,400,000 m2 land development (Tharwa Town). Preparation of bid package, contract documents, administration of tender stage and technical support during execution of reclamation works (2016 - 2018).",
      ar: "أعمال الاستصلاح البحري وحزمة تصميم حماية الشواطئ لتطوير أرض بمساحة 4,400,000 م2 في مشروع ثروة تاون. شمل العمل إعداد حزمة العطاء ووثائق العقد وإدارة مرحلة المناقصة وتقديم الدعم الفني أثناء تنفيذ أعمال الاستصلاح البحري (2016 - 2018)."
    },
    color: "#6dc14a",
    images: [`${engineeringImageBase}/tharwat2.png`, `${engineeringImageBase}/tharwat1.png`, `${engineeringImageBase}/tharwat3-main.png`]
  },
  {
    slug: "new-island-kfca",
    categories: { en: "Urban Development", ar: "التطوير العمراني" },
    titles: { en: "Concept Master Plan - New Island KFCA", ar: "المخطط الرئيسي المفاهيمي - الجزيرة الجديدة KFCA" },
    locations: { en: "King Fahd Causeway Authority, KSA", ar: "هيئة جسر الملك فهد، المملكة العربية السعودية" },
    descriptions: {
      en: "Preparation and design of Concept Master Plan for development of the Saudi Side new Island as a commercial and entertainment hub. Client is King Fahd Causeway Authority.",
      ar: "إعداد وتصميم المخطط الرئيسي المفاهيمي لتطوير الجزيرة الجديدة في الجانب السعودي كمركز تجاري وترفيهي. العميل هو هيئة جسر الملك فهد."
    },
    color: "#6dc14a",
    images: [`${engineeringImageBase}/concept1.png`, `${engineeringImageBase}/concept2.png`]
  },
  {
    slug: "al-uqair-area-development",
    categories: { en: "Architectural & Building", ar: "المعماري والبناء" },
    titles: { en: "Al-Uqair Area Development Company", ar: "شركة تطوير منطقة العقير" },
    locations: { en: "Al-Uqair, KSA", ar: "العقير، المملكة العربية السعودية" },
    descriptions: {
      en: "Design and preparation of tender package for marine work including topography and geological marine structures. Hydrology study logistic requirements and project master schedule.",
      ar: "تصميم وإعداد حزمة المناقصة للأعمال البحرية، بما في ذلك الطبوغرافيا والمنشآت البحرية الجيولوجية. كما شمل العمل دراسة الهيدرولوجيا ومتطلبات الخدمات اللوجستية والجدول الرئيسي للمشروع."
    },
    color: "#a78bfa",
    images: [`${engineeringImageBase}/al-uqair1.png`, `${engineeringImageBase}/al-uqair2.png`]
  },
  {
    slug: "cornish-al-khobar",
    categories: { en: "Urban Development", ar: "التطوير العمراني" },
    titles: { en: "Cornish Al-Khobar Development Marine Works", ar: "أعمال كورنيش الخبر البحرية" },
    locations: { en: "KSA", ar: "المملكة العربية السعودية" },
    descriptions: {
      en: "Design and reclamation, shore protection and ground improvement for 3,000,000 Sq M of new development for Infrastructure work.",
      ar: "تصميم وتنفيذ أعمال الاستصلاح والحماية الساحلية وتحسين التربة لتطوير جديد بمساحة 3,000,000 متر مربع لأعمال البنية التحتية."
    },
    color: "#6dc14a",
    images: [`${engineeringImageBase}/cornish1.png`, `${engineeringImageBase}/cornish2.png`]
  },
  {
    slug: "king-salman-reservation-tubaiq",
    categories: { en: "Architectural & Building", ar: "المعماري والبناء" },
    titles: { en: "Architectural Concept for King Salman Reservation", ar: "التصميم المعماري المفاهيمي لمحمية الملك سلمان" },
    locations: { en: "Tubaiq, Saudi Arabia", ar: "طويق، المملكة العربية السعودية" },
    descriptions: {
      en: "Preparation of Master Plan and Architectural design concept and theme park for a prestigious project including HQ building and facilities required for King Salman reservation in Tubaiq.",
      ar: "إعداد المخطط الرئيسي والتصميم المعماري المفاهيمي ومتنزه الألعاب لمشروع مرموق يشمل مبنى المقر والمرافق المطلوبة لمحمية الملك سلمان في طويق."
    },
    color: "#a78bfa",
    images: [`${engineeringImageBase}/architectural1.png`, `${engineeringImageBase}/architectural2.png`]
  },
  {
    slug: "oxagon-terminal",
    categories: { en: "Structural & Building", ar: "الإنشاءات والبناء" },
    titles: { en: "Oxagon Terminal Main Warehouse Structural Modeling", ar: "النمذجة الإنشائية للمستودع الرئيسي في أوكساجون" },
    locations: { en: "Neom, KSA", ar: "نيوم، المملكة العربية السعودية" },
    descriptions: {
      en: "The preparation of the structure modeling for the highly technical design of this warehouse (500m by 450m by 85 m).",
      ar: "إعداد النمذجة الإنشائية للتصميم الفني عالي التعقيد لهذا المستودع بأبعاد 500م × 450م × 85م."
    },
    color: "#f9a825",
    images: [`${engineeringImageBase}/oxagon1.png`, `${engineeringImageBase}/oxagon2.png`]
  },
  {
    slug: "riyadh-convention-center",
    categories: { en: "Structural & Building", ar: "الإنشاءات والبناء" },
    titles: { en: "Riyadh International Convention & Exhibition Center", ar: "مركز الرياض الدولي للمؤتمرات والمعارض" },
    locations: { en: "Riyadh, KSA", ar: "الرياض، المملكة العربية السعودية" },
    descriptions: {
      en: "The structural design and connection design, shop drawing & 3D Tekla model for the premium hospitality building.",
      ar: "التصميم الإنشائي وتصميم الوصلات وإعداد رسومات الورشة ونموذج Tekla ثلاثي الأبعاد لمبنى الضيافة المتميز."
    },
    color: "#f9a825",
    images: [`${engineeringImageBase}/riyadh1.png`, `${engineeringImageBase}/riyadh2.png`]
  },
  {
    slug: "stc-structural-assessment",
    categories: { en: "Structural & Assessment", ar: "الإنشاءات والتقييم" },
    titles: { en: "Structural Assessment STC Sites", ar: "التقييم الإنشائي لمواقع STC" },
    locations: { en: "KSA", ar: "المملكة العربية السعودية" },
    descriptions: {
      en: "We have carried out structural assessment for many (up to 40) exchange buildings for STC including concrete repairs and structural strengthening and design supervision.",
      ar: "قمنا بتنفيذ تقييم إنشائي لعدد كبير يصل إلى 40 مبنى مقسمات تابع لشركة STC، بما في ذلك إصلاحات الخرسانة والتقوية الإنشائية والإشراف على التصميم."
    },
    color: "#f9a825",
    images: [`${engineeringImageBase}/structural1.png`, `${engineeringImageBase}/structural2.png`]
  },
  {
    slug: "building-cost-engineering",
    categories: { en: "Architectural & Building", ar: "المعماري والبناء" },
    titles: { en: "Building Project Cost Engineering", ar: "هندسة تكلفة مشاريع البناء" },
    locations: { en: "Mekkah, KSA", ar: "مكة المكرمة، المملكة العربية السعودية" },
    descriptions: {
      en: "Preparation of BOQs material specifications, tender design support for major building complex in Mekkah with extensive MEP systems. Project included review and development of Architectural finishing drawings, Fire and Life safety plans.",
      ar: "إعداد جداول الكميات ومواصفات المواد ودعم تصميم المناقصة لمجمع مبان رئيسي في مكة المكرمة يضم أنظمة MEP واسعة. شمل المشروع مراجعة وتطوير رسومات التشطيبات المعمارية وخطط الحريق وسلامة الأرواح."
    },
    color: "#a78bfa",
    images: [`${engineeringImageBase}/building1.png`]
  },
  {
    slug: "pipe-stress-analysis",
    categories: { en: "MEP / Infrastructure", ar: "المرافق والبنية التحتية" },
    titles: { en: "Pipe Stress Analysis / Dynamic and Vibration Model Analysis", ar: "تحليل إجهاد الأنابيب والتحليل الديناميكي ونموذج الاهتزاز" },
    locations: { en: "Jubail, KSA", ar: "الجبيل، المملكة العربية السعودية" },
    descriptions: {
      en: "Performed pipe stress analysis by (CAESAR-II) for several pipelines and process equipment installations for various Plants and pipelines projects. 3D Modeling of piping and equipment arrangements.",
      ar: "تنفيذ تحليل إجهاد الأنابيب باستخدام CAESAR-II لعدة خطوط أنابيب وتركيبات معدات عمليات لمشاريع مصانع وخطوط أنابيب متعددة. كما شمل العمل النمذجة ثلاثية الأبعاد لترتيبات الأنابيب والمعدات."
    },
    color: "#4fc3f7",
    images: [`${engineeringImageBase}/pipe1.png`]
  },
  {
    slug: "qgwp-piping-design",
    categories: { en: "MEP / Infrastructure", ar: "المرافق والبنية التحتية" },
    titles: { en: "QGWP - Detailed Design of Piping", ar: "QGWP - التصميم التفصيلي للأنابيب" },
    locations: { en: "Qatar", ar: "قطر" },
    descriptions: {
      en: "We have assisted Violia ME for the detailed design of piping system, stress analysis, structural modeling and calculations as well as preparation of fabrication drawings including isometrics, equipment skids details, pipe supports, foundations and platforms design.",
      ar: "ساعدنا Violia ME في التصميم التفصيلي لنظام الأنابيب، وتحليل الإجهاد، والنمذجة والحسابات الإنشائية، إضافة إلى إعداد رسومات التصنيع بما في ذلك الرسومات الإيزومترية وتفاصيل وحدات المعدات ودعامات الأنابيب وتصميم الأساسات والمنصات."
    },
    color: "#4fc3f7",
    images: [`${engineeringImageBase}/qgwp1.png`]
  },
  {
    slug: "shop-fabrication-drawings",
    categories: { en: "Design & Documentation", ar: "التصميم والتوثيق" },
    titles: { en: "Shop / Fabrication DWGs 3D and BIM", ar: "رسومات الورشة والتصنيع ثلاثية الأبعاد وBIM" },
    locations: { en: "Various Locations", ar: "مواقع متعددة" },
    descriptions: {
      en: "Plenty of Sample Drawings of All Kinds of Shop and Fabrication Drawings are shown hereon.",
      ar: "تظهر هنا نماذج عديدة من مختلف أنواع رسومات الورشة ورسومات التصنيع."
    },
    color: "#f48fb1",
    images: [
      `${engineeringImageBase}/shop1.png`,
      `${engineeringImageBase}/shop2.png`,
      `${engineeringImageBase}/shop3.png`,
      `${engineeringImageBase}/shop4.png`,
      `${engineeringImageBase}/shop5.png`,
      `${engineeringImageBase}/shop6.png`,
      `${engineeringImageBase}/shop7.png`,
      `${engineeringImageBase}/shop8.png`,
      `${engineeringImageBase}/shop9.png`
    ]
  }
];

export const engineeringClients: EngineeringClient[] = [
  "svs.png",
  "alomaier trading and contracting co..png",
  "basaier charity.png",
  "azaz.png",
  "bci.png",
  "arm associates.png",
  "ayamama.png",
  "tanshia.png",
  "khonaini international company.png",
  "intecsa inarsa.png",
  "powerchina singhydro.png",
  "arabtec.png",
  "saudi technical limited.jpg",
  "gulf consoudated contractors co.png",
  "king fahd causeway authority.png",
  "veolia.png",
  "nesma and partners.png",
  "stc.png",
  "saudi tharwa.png",
  "saudi aramco.png",
  "public investment fund.jpg",
  "north hills.png",
  "pahal.png"
].map((logo) => ({
  slug: logo.toLowerCase().replace(/\.[^.]+$/, "").replace(/[^a-z0-9]+/g, "-"),
  name: logo.replace(/\.[^.]+$/, "").replace(/-/g, " "),
  logoUrl: `${engineeringImageBase}/${logo}`
}));
