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

const skillIcon = (file) => `${import.meta.env.BASE_URL}skill-icons/${file}`;
const contactIcon = (file) => `${import.meta.env.BASE_URL}contact-icons/${file}`;

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
    type: "EVENT", img: proj1, focus: "50% 30%", background: "#fff", year: "2025",
    tags: ["LEADERSHIP", "COMMUNITY"],
    title: "ประธานสาขา Computer Science",
    desc: "เป็นคณะกรรมการของคณะ และประธานสาขาวิชา Computer Science ประจำปี 2025 ดูแลกิจกรรมและเป็นตัวแทนของสาขา",
    link: null,
  },
  {
    type: "PROJECT", img: proj2, focus: "50% 50%", fit: "contain", background: "#fff", year: "2025",
    tags: ["AI", "RESEARCH"],
    title: "Natural Environment Observation AI",
    desc: "งานวิจัยด้าน AI สำหรับสังเกตการณ์สภาพแวดล้อมทางธรรมชาติ ที่ปรึกษาโดย Prof. Kosuke Takano",
    link: null,
  },
  {
    type: "EVENT", img: proj3, focus: "50% 20%", year: "2025",
    tags: ["INTERNSHIP", "KAIT · JAPAN"],
    title: "KAIT Technical Internship",
    desc: "คว้าทุน KAIT ระดับนานาชาติ ร่วมสร้างสรรค์นวัตกรรมกับนักวิจัยญี่ปุ่นที่ Kanagawa Institute of Technology",
    link: "https://www.bu.ac.th/th/it-innovation/portfolios/72",
  },
  {
    type: "PROJECT", img: chatJaiProject, focus: "50% 15%", year: "PROJECT",
    tags: ["AI", "CHATBOT"],
    title: "ChatJai AI Chatbot",
    desc: "โปรเจกต์แชตบอต AI สำหรับสนทนาและปรึกษาปัญหาด้านจิตใจเบื้องต้น",
    link: null,
  },
  {
    type: "PROJECT", img: tutorProject, focus: "50% 10%", year: "ONGOING",
    tags: ["WEB", "IN PROGRESS"],
    title: "Tutor Website",
    desc: "เว็บไซต์สำหรับการเรียนและการติว ซึ่งกำลังอยู่ในขั้นตอนการพัฒนา",
    link: null,
  },
  {
    img: robonicProject, focus: "50% 10%", year: "ONGOING",
    type: "STARTUP", tags: ["STARTUP", "DESIGN IN PROGRESS"],
    title: "Robonic AI",
    desc: "โปรเจกต์สตาร์ทอัปด้าน AI ซึ่งกำลังอยู่ในขั้นตอนการออกแบบ",
    link: null,
  },
  {
    img: exchangeKorea, focus: "50% 25%", year: "EXCHANGE",
    type: "EVENT", tags: ["EXCHANGE", "HANYANG · KOREA"],
    title: "Exchange Program in Korea",
    desc: "ประสบการณ์นักศึกษาแลกเปลี่ยนที่ Hanyang University ERICA ประเทศเกาหลีใต้",
    link: null,
  },
  {
    img: aiArmProject, focus: "50% 15%", year: "PROJECT",
    type: "PROJECT", tags: ["AI", "MACHINE LEARNING", "ROBOTICS"],
    title: "AI Robotic Arm",
    desc: "โปรเจกต์แขนกลที่ประยุกต์ใช้ AI และ Machine Learning",
    link: null,
  },
  {
    img: paperProject, focus: "50% 10%", year: "AWARD",
    type: "AWARD", tags: ["PAPER AWARD", "AI DETECTION"],
    title: "Equitable AI Detection",
    desc: "Paper Award — Equitable AI Detection: A Hybrid Framework Integrating Stylometric Personalization and Language Proficiency Analysis",
    link: null,
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
