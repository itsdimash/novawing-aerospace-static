export type Lang = "en" | "zh";
export const LANGS: Lang[] = ["en", "zh"];
export const HTML_LANG: Record<Lang, string> = { en: "en", zh: "zh-CN" };
export const OG_LOCALE: Record<Lang, string> = { en: "en_US", zh: "zh_CN" };

/** English stays at the site root; Chinese lives under /zh. */
export const homePath = (lang: Lang): string => (lang === "zh" ? "/zh" : "/");
export const anchor = (lang: Lang, id: string): string => `${homePath(lang)}#${id}`;
export const productHref = (slug: string, lang: Lang): string =>
  lang === "zh" ? `/zh/products/${slug}` : `/products/${slug}`;
/** Same page in the target language (used by the language switch). */
export const switchPath = (pathname: string, target: Lang): string =>
  target === "en" ? pathname.replace(/^\/zh(?=\/|$)/, "") || "/" : `/zh${pathname === "/" ? "" : pathname}`;

const en = {
  switchLabel: "中文",
  switchTitle: "切换到中文",
  nav: { catalog: "Catalog", about: "About", contact: "Contact", openMenu: "Open menu", closeMenu: "Close menu" },
  hero: {
    headline: "Everything behind the build.",
    subhead:
      "Aviorafly stocks model kits, airframes, FPV drone parts, and workshop tools for builders who read spec sheets for fun — from SKYFORGE prefab kits to the tools that finish them.",
    cta: "View the full catalog",
    touch: "Get in touch",
    tag1: "Curated catalog",
    tag2: "Specs verified",
  },
  catalog: {
    eyebrow: "Full catalog",
    title: "The full catalog.",
    description:
      "Model kits, airframes, FPV drone parts, and the tools and materials that go into building and finishing every one of them.",
  },
  about: {
    heading: "How the catalog gets built.",
    sub: "Nothing goes on the shelf without a reason. Here is what we look for before a kit, part, or tool gets a listing.",
    items: [
      { title: "Curated, not everything", body: "Every kit, part, and tool in the catalog is chosen for builders who actually fly what they build, not padded out with filler SKUs." },
      { title: "Checked before it ships", body: "Specs on the sheet are pulled and verified against the manufacturer, from wingspan to flight time, so what you order matches what you get." },
      { title: "Built for the whole build", body: "Airframes and kits sit next to the batteries, motors, and finishing tools that go with them, so a build doesn't stall on a missing part." },
      { title: "Stocked for builders", body: "Restocks and new listings are driven by what customers are actually asking for, not just what's easy to source." },
    ],
  },
  contact: {
    headline: "Talk to the team.",
    description:
      "Questions about a build, stock levels, or a bulk order for a launch day or classroom — reach out and someone will get back to you directly.",
    emailLabel: "Email",
    addressLabel: "Address",
    address: "RM 2902, 29/F, HO KING COMMERCIAL CENTRE, 2-16 FA YUEN STREET, MONGKOK, KOWLOON HK",
  },
  footer: {
    blurb:
      "Model kits, RC airframes, FPV drone parts, and the workshop tools and materials that go into finishing every build.",
    shop: "Catalog",
    company: "Company",
    catalog: "Full catalog",
    process: "About",
    contact: "Contact",
  },
  card: {
    category: "workshop equipment",
    article: "Article",
    details: "Product details",
    forName: (name: string) => ` for ${name}`,
    see: "View spec sheet",
    hide: "Hide spec sheet",
    soon: "soon",
    alt: (name: string) => `${name} — workshop equipment`,
  },
  product: {
    home: "Aviorafly",
    catalog: "Catalog",
    brand: "Brand",
    article: "Article",
    priceIncludesVat: "incl. VAT",
    ask: "Ask about this product",
    askNote: "Contact our team to confirm availability and delivery options.",
    orEmail: "Or email us at",
    specs: "Product specifications",
    back: "Browse the full catalog",
    mailSubject: (name: string) => `Enquiry: ${name}`,
    mailBody: (name: string, url: string) =>
      `Hello Aviorafly,\n\nI would like to ask about ${name}.\n${url}\n\nPlease confirm availability, currency, and delivery options.\n`,
  },
  seo: {
    title: "SKYFORGE RC Aircraft Kits, FPV Drones & Parts | Aviorafly",
    description:
      "Explore SKYFORGE RC aircraft kits, model airplanes, FPV drones, brushless motors, and aeromodelling materials at Aviorafly, plus batteries and workshop tools. Find products by name, brand, or article number (SKF-…) and contact our team.",
    keywords: ["SKYFORGE", "SKYFORGE RC aircraft kit", "SKYFORGE FPV drone", "RC airplane kits", "FPV drone parts", "aeromodelling materials", "Aviorafly"],
  },
};

const zhUi: typeof en = {
  switchLabel: "English",
  switchTitle: "Switch to English",
  nav: { catalog: "目录", about: "关于", contact: "联系我们", openMenu: "打开菜单", closeMenu: "关闭菜单" },
  hero: {
    headline: "搭建背后的一切。",
    subhead:
      "Aviorafly 提供模型套件、机体、FPV 无人机配件和工作室工具，为把规格表当消遣来读的爱好者服务——从 SKYFORGE 预制套件到完成它们所需的工具。",
    cta: "查看完整目录",
    touch: "联系我们",
    tag1: "精选目录",
    tag2: "规格核实",
  },
  catalog: {
    eyebrow: "完整目录",
    title: "完整产品目录。",
    description: "模型套件、机体、FPV 无人机配件，以及制作和完善每一架模型所需的工具与材料。",
  },
  about: {
    heading: "目录是如何建立的。",
    sub: "没有理由，不会上架。以下是一套套件、配件或工具获得上架资格之前，我们看重的几点。",
    items: [
      { title: "精挑细选，而非大而全", body: "目录中的每一套套件、配件和工具，都是为真正会驾驶自己所造飞机的爱好者挑选的，没有为凑数而堆砌的无用货号。" },
      { title: "发货前核对", body: "规格表上的数据（从翼展到飞行时间）均对照厂商资料核实，确保您收到的与所订购的一致。" },
      { title: "为完整制作而备", body: "机体和套件旁边就备有配套的电池、电机和收尾工具，制作不会因缺一个零件而停工。" },
      { title: "为爱好者备货", body: "补货和新品上架取决于客户的实际需求，而不只是看哪些容易采购。" },
    ],
  },
  contact: {
    headline: "联系我们的团队。",
    description: "对制作、库存，或为发射日、课堂批量订购有疑问？欢迎联系我们，会有专人直接回复您。",
    emailLabel: "邮箱",
    addressLabel: "地址",
    address: "香港九龙旺角花园街2-16号好望角大厦29楼2902室",
  },
  footer: {
    blurb: "模型套件、遥控机体、FPV 无人机配件，以及完成每一次制作所需的工作室工具和材料。",
    shop: "目录",
    company: "公司",
    catalog: "完整目录",
    process: "关于",
    contact: "联系我们",
  },
  card: {
    category: "工作室设备",
    article: "货号",
    details: "产品详情",
    forName: (name: string) => `：${name}`,
    see: "查看规格表",
    hide: "收起规格表",
    soon: "即将上线",
    alt: (name: string) => `${name} — 工作室设备`,
  },
  product: {
    home: "Aviorafly",
    catalog: "目录",
    brand: "品牌",
    article: "货号",
    priceIncludesVat: "含增值税",
    ask: "咨询此产品",
    askNote: "请联系我们确认库存和配送方式。",
    orEmail: "或发送邮件至",
    specs: "产品规格",
    back: "浏览完整目录",
    mailSubject: (name: string) => `咨询：${name}`,
    mailBody: (name: string, url: string) =>
      `您好 Aviorafly，\n\n我想咨询 ${name}。\n${url}\n\n请告知报价、库存及配送方式。\n`,
  },
  seo: {
    title: "SKYFORGE 遥控飞机套件、FPV 穿越机与配件 | Aviorafly",
    description:
      "Aviorafly 提供 SKYFORGE 遥控飞机套件、模型飞机、FPV 无人机、无刷电机和航模材料，另有电池和工作室工具。可按产品名称、品牌或货号（SKF-…）查找，欢迎联系我们。",
    keywords: ["SKYFORGE", "SKYFORGE 遥控飞机套件", "SKYFORGE FPV 穿越机", "遥控飞机套件", "FPV 无人机配件", "航模材料", "Aviorafly"],
  },
};

export const ui: Record<Lang, typeof en> = { en, zh: zhUi };
export type Ui = typeof en;
