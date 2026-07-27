// All portfolio content in one place — edit here to update the site without
// touching component logic or markup.
import profileImg from "../assets/pf-profile.jpg";
import proj1 from "../assets/pf-proj1.jpg";
import proj2 from "../assets/pf-proj2.jpg";
import proj3 from "../assets/pf-proj3.webp";
import eduHanyang from "../assets/edu-hanyang.jpg";
import eduBu from "../assets/edu-bu.jpg";
import eduKait from "../assets/edu-kait.jpg";
import eduSw2 from "../assets/edu-sw2.jpg";
import paperProject from "../assets/paper.png";
import chatJaiProject from "../assets/chatjai.png";
import tutorProject from "../assets/paotutur.png";
import aiArmProject from "../assets/ai arm hand.jpg";
import robonicProject from "../assets/robonic ai.png";
import exchangeKorea from "../assets/exchange korea.jpg";
import cyberCertificate from "../assets/cyber-top-talent-certificate.png";

const skillIcon = (file) => `${import.meta.env.BASE_URL}skill-icons/${file}`;
const contactIcon = (file) => `${import.meta.env.BASE_URL}contact-icons/${file}`;
const paperFile = `${import.meta.env.BASE_URL}papers/conference-paper-final.pdf`;

// ── About ────────────────────────────────────────────────
export const PROFILE = {
  nameTh: "ชยพล",
  nameThRest: "ช่วยบำรุง",
  nameEn: "Chayapol Chuaibamrung — Computer Science",
  intro: "นักศึกษาวิทยาการคอมพิวเตอร์ที่สนใจ Frontend Development และ AI ชอบเปลี่ยนไอเดียให้เป็นผลงานที่ใช้งานได้จริง พร้อมเรียนรู้จากประสบการณ์ใหม่ในสภาพแวดล้อมนานาชาติ",
  photo: profileImg,
};

export const ABOUT_FACTS = [
  { k: "ROLE", v: ["Computer Science Student"] },
  { k: "FOCUS", v: ["Frontend Development", "Artificial Intelligence"] },
  { k: "EXPERIENCE", v: ["KAIT Internship · Japan", "Hanyang ERICA Exchange · South Korea"] },
  { k: "LEADERSHIP", v: ["Computer Science Student President · 2025"] },
];

// ── Education ────────────────────────────────────────────
export const TIMELINE = [
  { year: "HIGH", span: "SCHOOL", tag: "HIGH SCHOOL", title: "โรงเรียนสตรีวิทยา ๒", place: "Bangkok · Thailand", image: eduSw2, imageAlt: "โรงเรียนสตรีวิทยา ๒", link: "https://sw2.ac.th/" },
  { year: "YEAR 1", span: "THAILAND", tag: "YEAR 1", title: "Bangkok University", place: "Pathum Thani · Thailand", image: eduBu, imageAlt: "Bangkok University Campus", link: "https://www.bu.ac.th/" },
  { year: "YEAR 2", span: "SEMESTER 2", tag: "YEAR 2 · SEMESTER 2", title: "Kanagawa Institute of Technology", place: "Atsugi, Kanagawa · Japan", image: eduKait, imageAlt: "Kanagawa Institute of Technology Campus", link: "https://www.kait.jp/" },
  { year: "YEAR 3", span: "SEMESTER 2", tag: "YEAR 3 · SEMESTER 2", title: "Hanyang University ERICA", place: "Ansan, Gyeonggi-do · South Korea", image: eduHanyang, imageAlt: "Hanyang University ERICA Campus", link: "https://www.hanyang.ac.kr/web/www/erica" },
  { year: "YEAR 4", span: "NOW", tag: "YEAR 4 · NOW", title: "Bangkok University", place: "Pathum Thani · Thailand", image: eduBu, imageAlt: "Bangkok University Campus", link: "https://www.bu.ac.th/" },
];

// ── Projects ─────────────────────────────────────────────
export const PROJECTS = [
  {
    img: paperProject, focus: "50% 10%", year: "AWARD",
    type: "AWARD", tags: ["PAPER AWARD", "AI DETECTION"],
    title: "Equitable AI Detection",
    desc: "Paper Award — Equitable AI Detection: A Hybrid Framework Integrating Stylometric Personalization and Language Proficiency Analysis",
    link: paperFile,
    secondaryLink: "https://canva.link/h1wrz56xx0v222p",
    duration: "1 semester · South Korea",
    role: "ร่วมพัฒนาแนวคิด ทดลองโมเดล และปรับปรุงกระบวนการตรวจจับข้อความที่สร้างด้วย AI",
    overview: "โครงการวิจัยที่มุ่งสร้างการตรวจจับการใช้ AI ในงานการศึกษาอย่างเป็นธรรมมากขึ้น โดยผสานโมเดลหลายรูปแบบเข้ากับการวิเคราะห์ลักษณะการเขียนเฉพาะบุคคลและระดับความสามารถทางภาษา",
    detailTags: ["AI RESEARCH", "MODEL TRAINING", "STYLOMETRY", "LANGUAGE ANALYSIS"],
    highlights: [
      "ศึกษาและเปรียบเทียบแนวทางตรวจจับข้อความที่สร้างด้วย AI หลายรูปแบบ",
      "นำโมเดลหลายส่วนมาทำงานร่วมกันและฝึกเพิ่มเติมให้เหมาะกับบริบททางการศึกษา",
      "ปรับโมเดลโดยคำนึงถึงรูปแบบการเขียนและระดับภาษาของผู้เรียน เพื่อลดความลำเอียงในการตรวจจับ",
    ],
  },
  {
    type: "EVENT", img: proj3, focus: "50% 20%", year: "2025",
    tags: ["INTERNSHIP", "KAIT · JAPAN"],
    title: "KAIT Technical Internship",
    desc: "คว้าทุน KAIT ระดับนานาชาติ ร่วมสร้างสรรค์นวัตกรรมกับนักวิจัยญี่ปุ่นที่ Kanagawa Institute of Technology",
    link: "https://www.bu.ac.th/th/it-innovation/portfolios/72",
    duration: "2 months · Japan",
    role: "นักศึกษาฝึกงานด้านเทคนิคและผู้พัฒนาโครงการ Natural Environment Observation AI",
    detailTags: ["TECHNICAL INTERN", "AI RESEARCH", "INTERNATIONAL TEAM", "JASSO SCHOLARSHIP"],
    overview: "เข้าร่วม KAIT Technical Internship Program ณ Kanagawa Institute of Technology ประเทศญี่ปุ่น ภายใต้ทุนสนับสนุนจาก JASSO และทำงานวิจัยร่วมกับอาจารย์ที่ปรึกษาและนักศึกษาต่างชาติ",
    highlights: [
      "พัฒนาโครงการวิจัยภายใต้การดูแลของ Prof. Kosuke Takano",
      "ฝึกวางแผนและพัฒนาผลงานตั้งแต่แนวคิดจนเป็นต้นแบบ",
      "แลกเปลี่ยนความรู้และประสบการณ์การทำงานในสภาพแวดล้อมนานาชาติ",
    ],
  },
  {
    type: "PROJECT", img: proj2, focus: "50% 50%", fit: "contain", background: "#fff", year: "2025",
    tags: ["AI", "RESEARCH"],
    title: "Natural Environment Observation AI",
    desc: "งานวิจัยด้าน AI สำหรับสังเกตการณ์สภาพแวดล้อมทางธรรมชาติ ที่ปรึกษาโดย Prof. Kosuke Takano",
    link: "https://www.bu.ac.th/th/featured-stories/2032",
    duration: "2 months · Japan",
    role: "ออกแบบแนวคิดและพัฒนาระบบร่วมกับ Prof. Kosuke Takano",
    overview: "หุ่นยนต์สำหรับช่วยสังเกตและตรวจสอบสภาพแวดล้อมทางธรรมชาติ โดยประยุกต์ AI เพื่อวิเคราะห์ข้อมูลตามโมเดลที่กำหนด เช่น สภาพอากาศหรือพืชพรรณ",
    detailTags: ["AI DEVELOPER", "PYTHON", "OPENCV", "OPENAI", "LLM", "ROBOTICS"],
    highlights: [
      "พัฒนากระบวนการรับและวิเคราะห์ข้อมูลสภาพแวดล้อมด้วย AI",
      "ออกแบบระบบให้สามารถเปลี่ยนวัตถุประสงค์การตรวจสอบได้ตามโมเดลที่นำมาใช้",
      "เชื่อมแนวคิดด้าน Computer Vision และโมเดลภาษาเข้ากับการทำงานของหุ่นยนต์",
    ],
  },
  {
    img: aiArmProject, focus: "50% 15%", year: "PROJECT",
    type: "PROJECT", tags: ["AI", "MACHINE LEARNING", "ROBOTICS"],
    title: "AI Robotic Arm",
    desc: "โปรเจกต์แขนกลที่ประยุกต์ใช้ AI และ Machine Learning",
    link: null,
    duration: "4 months",
    team: "4 members",
    role: "ร่วมรับผิดชอบทุกขั้นตอน ตั้งแต่การวางแนวคิด เตรียมข้อมูล พัฒนา และทดสอบระบบ",
    overview: "โครงการในชั้นเรียนที่พัฒนาแขนกลให้เรียนรู้การหยิบและวางวัตถุจากข้อมูลฝึกสอน โดยได้รับคำแนะนำจากอาจารย์ที่ประเทศเกาหลีใต้",
    detailTags: ["4-PERSON TEAM", "FULL-CYCLE DEVELOPMENT", "PYTHON", "OPENCV", "MACHINE LEARNING", "ROBOTICS"],
    highlights: [
      "เตรียมข้อมูลสำหรับฝึกให้แขนกลเรียนรู้การเคลื่อนไหว",
      "พัฒนาและทดสอบกระบวนการตรวจจับวัตถุ การหยิบ และการวาง",
      "ทำงานร่วมกับทีม 4 คนตลอดวงจรการพัฒนา",
    ],
  },
  {
    type: "PROJECT", img: chatJaiProject, focus: "50% 15%", year: "PROJECT",
    tags: ["AI", "CHATBOT"],
    title: "ChatJai AI Chatbot",
    desc: "โปรเจกต์แชตบอต AI สำหรับสนทนาและปรึกษาปัญหาด้านจิตใจเบื้องต้น",
    link: null,
    duration: "4 months",
    team: "Solo project",
    role: "ออกแบบและพัฒนาทั้งโครงการด้วยตนเอง",
    overview: "แชตบอต AI เพื่อนพูดคุยที่ออกแบบมาเพื่อช่วยลดความรู้สึกเหงาและสนับสนุนสุขภาวะทางใจเบื้องต้นสำหรับผู้ที่มีความเครียดหรือรู้สึกโดดเดี่ยว โดยไม่ใช้แทนคำแนะนำจากผู้เชี่ยวชาญ",
    detailTags: ["SOLO PROJECT", "N8N", "AI CHATBOT", "CONVERSATION DESIGN", "REMINDER SYSTEM", "USER MEMORY"],
    highlights: [
      "สนทนาและชวนผู้ใช้พูดคุยอย่างต่อเนื่องตามบริบท",
      "จดจำข้อมูลจากบทสนทนาเพื่อสร้างประสบการณ์ที่เป็นส่วนตัวมากขึ้น",
      "ตั้งเวลาแจ้งเตือนและเริ่มติดต่อผู้ใช้ตามเวลาที่กำหนด",
    ],
  },
  {
    type: "EVENT", img: proj1, focus: "50% 30%", background: "#fff", year: "2025",
    tags: ["LEADERSHIP", "COMMUNITY"],
    title: "ประธานสาขา Computer Science",
    desc: "เป็นคณะกรรมการของคณะ และประธานสาขาวิชา Computer Science ประจำปี 2025 ดูแลกิจกรรมและเป็นตัวแทนของสาขา",
    link: null,
    duration: "Academic year 2025",
    role: "ประธานสาขาวิชา Computer Science",
    detailTags: ["PRESIDENT", "TEAM LEAD", "EVENT MANAGEMENT", "STAFF COORDINATION"],
    overview: "เป็นตัวแทนนักศึกษาและดูแลการดำเนินกิจกรรมของสาขา ตั้งแต่การวางแผน ประสานงาน ไปจนถึงการควบคุมทีมงานในวันจัดกิจกรรม",
    highlights: [
      "จัดกิจกรรมและดูแลทีมสตาฟให้ทำงานตามแผน",
      "ร่วมดำเนินงาน Open House และกิจกรรมประชาสัมพันธ์สาขา",
      "วางแผนและจัดการโครงการจำหน่ายเสื้อของสาขา",
    ],
  },
  {
    img: exchangeKorea, focus: "50% 25%", year: "EXCHANGE",
    type: "EVENT", tags: ["EXCHANGE", "HANYANG · KOREA"],
    title: "Exchange Program in Korea",
    desc: "ประสบการณ์นักศึกษาแลกเปลี่ยนที่ Hanyang University ERICA ประเทศเกาหลีใต้",
    link: null,
    duration: "Year 3 · Semester 2",
    role: "Exchange student · Hanyang University ERICA",
    detailTags: ["SCHOLARSHIP", "CROSS-CULTURAL COMMUNICATION", "INTERNATIONAL EXPERIENCE"],
    overview: "ได้รับทุนสนับสนุนจากมหาวิทยาลัยเพื่อเข้าร่วมโครงการแลกเปลี่ยนที่ประเทศเกาหลีใต้ และเรียนรู้ทั้งด้านวิชาการ ภาษา การทำงาน และการใช้ชีวิตในสภาพแวดล้อมนานาชาติ",
    highlights: [
      "สร้างเครือข่ายกับเพื่อนและผู้ร่วมงานจากต่างประเทศ",
      "พัฒนาทักษะการสื่อสารภาษาอังกฤษและการปรับตัวข้ามวัฒนธรรม",
      "เรียนรู้กระบวนการทำงานและมุมมองใหม่จากสภาพแวดล้อมนานาชาติ",
    ],
  },
  {
    type: "PROJECT", img: tutorProject, focus: "50% 10%", year: "ONGOING",
    tags: ["WEB", "IN PROGRESS"],
    title: "Tutor Website",
    desc: "เว็บไซต์สำหรับการเรียนและการติว ซึ่งกำลังอยู่ในขั้นตอนการพัฒนา",
    link: null,
    duration: "3 months · Ongoing",
    team: "Solo project",
    role: "ออกแบบและพัฒนาระบบตามความต้องการของลูกค้า",
    overview: "แพลตฟอร์มการเรียนส่วนตัวสำหรับติวเตอร์และผู้เรียน รองรับการอัปโหลดวิดีโอและจัดการเนื้อหาคล้ายระบบห้องเรียนออนไลน์ พร้อมระบบหลังบ้านสำหรับบริหารข้อมูลและการขาย",
    detailTags: ["SOLO DEVELOPER", "CLIENT PROJECT", "WEB DEVELOPMENT", "CRUD", "POS", "VIDEO MANAGEMENT"],
    highlights: [
      "พัฒนาระบบอัปโหลดและจัดการวิดีโอการสอน",
      "สร้างระบบ CRUD สำหรับจัดการข้อมูลหลักของแพลตฟอร์ม",
      "พัฒนาระบบ POS และปรับปรุงฟีเจอร์ตามคำขอของลูกค้าอย่างต่อเนื่อง",
    ],
  },
  {
    img: robonicProject, focus: "50% 10%", year: "ONGOING",
    type: "STARTUP", tags: ["STARTUP", "DESIGN IN PROGRESS"],
    title: "Robonic AI",
    desc: "โปรเจกต์สตาร์ทอัปด้าน AI ซึ่งกำลังอยู่ในขั้นตอนการออกแบบ",
    link: null,
    duration: "In progress",
    role: "Product concept and physical product design",
    overview: "โครงการที่อยู่ระหว่างการออกแบบผลิตภัณฑ์เชิงกายภาพ โดยศึกษาแนวทางการพัฒนารูปแบบสินค้า กระบวนการผลิต และคุณภาพของผลิตภัณฑ์ก่อนเข้าสู่ขั้นตอนสร้างต้นแบบ",
    detailTags: ["PRODUCT DESIGN", "PHYSICAL PROTOTYPING", "AI CONCEPT", "IN PROGRESS"],
    highlights: [
      "วิเคราะห์รูปแบบผลิตภัณฑ์และแนวทางการใช้งาน",
      "ศึกษาองค์ประกอบที่มีผลต่อคุณภาพและความเป็นไปได้ในการพัฒนา",
      "เตรียมแนวคิดสำหรับการสร้างและทดสอบต้นแบบในขั้นต่อไป",
    ],
  },
  {
    type: "EVENT", img: cyberCertificate, focus: "50% 50%", fit: "contain", background: "#fff", year: "2023",
    tags: ["CYBERSECURITY", "CTF"],
    title: "Thailand Cyber Top Talent 2023",
    desc: "เข้าร่วมการแข่งขันด้านความมั่นคงปลอดภัยไซเบอร์ในทีม Monkey Rangsit ตัวแทนจาก Bangkok University",
    link: null,
    duration: "30 September 2023",
    team: "3 members · Monkey Rangsit",
    role: "วิเคราะห์ช่องโหว่ แก้โจทย์ และค้นหา Flag",
    overview: "เข้าร่วมการแข่งขัน Thailand Cyber Top Talent 2023 ในนามทีม Monkey Rangsit จาก Bangkok University โดยทำงานร่วมกับสมาชิกทีมเพื่อวิเคราะห์โจทย์ด้านความมั่นคงปลอดภัยไซเบอร์",
    detailTags: ["TEAM MEMBER", "CYBERSECURITY", "VULNERABILITY ANALYSIS", "CTF"],
    highlights: [
      "รับผิดชอบการวิเคราะห์และค้นหาช่องโหว่จากโจทย์การแข่งขัน",
      "แก้โจทย์สำเร็จ 3 ข้อและค้นหา Flag เพื่อส่งคำตอบ",
      "ทำงานร่วมกับทีม 3 คนภายใต้ข้อจำกัดด้านเวลา",
    ],
  },
];

// ── Skills ───────────────────────────────────────────────
export const SKILL_GROUPS = [
  {
    key: "TECH STACK",
    th: "สิ่งที่เคยใช้",
    items: [
      { name: "HTML", icon: skillIcon("html.svg") },
      { name: "CSS", icon: skillIcon("css.svg") },
      { name: "JavaScript", icon: skillIcon("javascript.svg") },
      { name: "React", icon: skillIcon("react.svg") },
      { name: "Next.js", icon: skillIcon("nextjs.svg") },
      { name: "Vite", icon: skillIcon("vite.svg") },
      { name: "Python", icon: skillIcon("python.svg") },
      { name: "OpenCV", icon: skillIcon("opencv.svg") },
      { name: "PyTorch", icon: skillIcon("pytorch.svg") },
      { name: "Java", icon: skillIcon("java.svg") },
      { name: "Go", icon: skillIcon("go.svg") },
      { name: "SQL", icon: skillIcon("sql.svg") },
    ],
  },
  {
    key: "TOOLS",
    th: "เครื่องมือที่ใช้",
    items: [
      { name: "Photoshop", icon: skillIcon("photoshop.svg") },
      { name: "Premiere Pro", icon: skillIcon("premiere-pro.svg") },
      { name: "VS Code", icon: skillIcon("vscode.svg") },
      { name: "JetBrains", icon: skillIcon("jetbrains.svg") },
      { name: "Obsidian", icon: skillIcon("obsidian.svg"), color: "#7c3aed", mono: true },
      { name: "n8n", icon: skillIcon("n8n.svg"), color: "#ea4b71", mono: true },
      { name: "Claude", icon: skillIcon("claude.svg"), color: "#d97757", mono: true },
      { name: "ChatGPT", icon: skillIcon("chatgpt.svg"), color: "#10a37f", mono: true },
      { name: "Gemini", icon: skillIcon("gemini.svg"), color: "#7158e2", mono: true },
      { name: "CapCut", icon: skillIcon("capcut.svg") },
      { name: "Discord", icon: skillIcon("discord.svg"), color: "#5865f2", mono: true },
      { name: "Word", icon: skillIcon("word.png") },
      { name: "Excel", icon: skillIcon("excel.png") },
    ],
  },
];

// ── Contact ──────────────────────────────────────────────
export const CONTACTS = [
  { key: "INSTAGRAM", handle: "@chuaibmr", href: "https://www.instagram.com/chuaibmr/", color: "#e1306c", preview: contactIcon("instagram.svg") },
  { key: "TIKTOK", handle: "@Padthaix", href: "https://www.tiktok.com/@padthaix", color: "#ff3b6b", preview: contactIcon("tiktok.svg") },
  { key: "GITHUB", handle: "github.com/Padthaix", href: "https://github.com/Padthaix", color: "#181717", preview: contactIcon("github.svg") },
  { key: "LINKEDIN", handle: "in/chayapol-chuybamrung", href: "https://www.linkedin.com/in/chayapol-chuybamrung-1ba748356/", color: "#4a8fff", preview: contactIcon("linkedin.svg") },
  { key: "EMAIL", handle: "Padthaix@gmail.com", href: "mailto:Padthaix@gmail.com", color: "#5ceaff", preview: contactIcon("gmail.svg") },
];

// Background music (played via YouTube IFrame API in BgMusic)
export const MUSIC = {
  videoId: "j9Sn1nFGQQ8",
  title: "Color Your Night · Lotus Juice",
};
