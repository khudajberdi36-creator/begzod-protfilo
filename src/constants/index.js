import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import p_maktabnews from "../assets/projects/10-maktab-yangiliklari.jpg";
import p_dokon from "../assets/projects/dokon-qarz.jpg";
import p_gosht from "../assets/projects/wepa-gosht-savdo.jpg";
import p_maktab from "../assets/projects/10-maktab.jpg";
import p_madaniyat from "../assets/projects/turtkul-madaniyat-uz.jpg";
import p_startaper from "../assets/projects/startaper-site.jpg";
import p_oyin from "../assets/projects/begzod-oyin.jpg";
import p_uyhisobot from "../assets/projects/uyhisobot.jpg";
import p_umidsila from "../assets/projects/umidsila-uz.jpg";

// ====== SHAXSIY MA'LUMOTLAR (shu yerdan o'zgartiring) ======
export const profile = {
  firstName: "Begzod",
  fullName: "Begzod Abdinazarov",
  role: "Veb-dasturchi",
  telegram: "https://t.me/begzad_abdunazarov",
  telegramUser: "@begzad_abdunazarov",
  instagram: "https://instagram.com/toples__uz",
  instagramUser: "@toples__uz",
  github: "https://github.com/khudajberdi36-creator",
};

export const navLinks = [
  { id: "about", title: "Men haqimda" },
  { id: "work", title: "Yo'lim" },
  { id: "projects", title: "Loyihalar" },
  { id: "contact", title: "Aloqa" },
];

const services = [
  { title: "Veb-dasturchi", icon: web },
  { title: "Mobil ilovalar", icon: mobile },
  { title: "Backend", icon: backend },
  { title: "Kontent yaratuvchi", icon: creator },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
];

const experiences = [
  {
    title: "Dasturlashni boshladim",
    company_name: "Mustaqil o'rganish",
    icon: html,
    iconBg: "#383E56",
    date: "Boshlanish",
    points: [
      "HTML, CSS va JavaScript asoslarini o'rgandim.",
      "Birinchi oddiy veb-sahifalarimni yaratdim.",
    ],
  },
  {
    title: "Birinchi loyihalar",
    company_name: "React va zamonaviy vositalar",
    icon: reactjs,
    iconBg: "#E6DEDD",
    date: "Keyingi bosqich",
    points: [
      "React va Tailwind CSS bilan moslashuvchan (responsive) saytlar qurdim.",
      "Git va GitHub orqali loyihalarimni boshqarishni o'rgandim.",
    ],
  },
  {
    title: "3D va interaktiv saytlar",
    company_name: "Three.js",
    icon: threejs,
    iconBg: "#383E56",
    date: "Hozir",
    points: [
      "Three.js yordamida 3D modellar va animatsiyalar bilan ishlayapman.",
      "Yangi buyurtma va hamkorliklarga ochiqman.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "MaktabNews",
    description:
      "10-maktab uchun yangiliklar portali: ruknlar, qidiruv, tungi rejim va yangiliklarni boshqarish uchun admin panel.",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "admin-panel", color: "green-text-gradient" },
      { name: "vercel", color: "pink-text-gradient" },
    ],
    image: p_maktabnews,
    source_code_link: "https://github.com/khudajberdi36-creator/10-maktab-yangiliklari",
    live_link: "https://10-maktab-yangiliklari.vercel.app",
  },
  {
    name: "Do'kon Qarz",
    description:
      "Do'konlar uchun qarzlarni boshqarish tizimi: mijozlar ro'yxati, qarz va to'lovlar hisobi, himoyalangan kirish.",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "crud", color: "green-text-gradient" },
      { name: "auth", color: "pink-text-gradient" },
    ],
    image: p_dokon,
    source_code_link: "https://github.com/khudajberdi36-creator/dokon-qarz",
    live_link: "https://dokon-qarz.vercel.app",
  },
  {
    name: "Halol Go'sht",
    description:
      "Qassob do'koni sayti: kunlik narxlar, go'sht kalkulyatori, ish vaqti va mahsulot mavjudligi holati.",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "kalkulyator", color: "green-text-gradient" },
      { name: "responsive", color: "pink-text-gradient" },
    ],
    image: p_gosht,
    source_code_link: "https://github.com/khudajberdi36-creator/wepa-gosht-savdo",
    live_link: "https://wepa-gosht-savdo.vercel.app",
  },
  {
    name: "10-Maktab Tizimi",
    description:
      "Maktab o'qituvchilari ma'lumotlar bazasi: tizimga kirish, o'qituvchilar ro'yxati va ma'lumotlarni boshqarish.",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "database", color: "green-text-gradient" },
      { name: "auth", color: "pink-text-gradient" },
    ],
    image: p_maktab,
    source_code_link: "https://github.com/khudajberdi36-creator/10-maktab",
    live_link: "https://10-maktab.vercel.app",
  },
  {
    name: "To'rtko'l Madaniyat",
    description:
      "To'rtko'l tumani madaniyat markazlari sayti: yangiliklar, tadbirlar, ijodiy xodimlar va video arxiv.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
    ],
    image: p_madaniyat,
    source_code_link: "https://github.com/khudajberdi36-creator/turtkul-madaniyat.uz",
    live_link: "https://turtkul-madaniyat-uz.vercel.app",
  },
  {
    name: "Startaper",
    description:
      "Shaxsiy brend sayti: dasturlash va kiber xavfsizlik xizmatlari, loyihalar, narxlar. Uch tilda (UZ/RU/EN).",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "3-til", color: "pink-text-gradient" },
    ],
    image: p_startaper,
    source_code_link: "https://github.com/khudajberdi36-creator/startaper-site",
    live_link: "https://startaper-site.vercel.app",
  },
  {
    name: "Drive Mad",
    description:
      "Brauzerda ishlaydigan onlayn mashina o'yini. To'siqlardan o'tib, bosqichlarni yakunlang.",
    tags: [
      { name: "game", color: "blue-text-gradient" },
      { name: "html5", color: "green-text-gradient" },
      { name: "canvas", color: "pink-text-gradient" },
    ],
    image: p_oyin,
    source_code_link: "https://github.com/khudajberdi36-creator/begzod_oyin",
    live_link: "https://begzod-oyin.vercel.app",
  },
  {
    name: "Uy Hisobot",
    description:
      "Oilaviy byudjet va qarzlarni boshqarish tizimi: daromad, xarajat va qarzlar bir joyda.",
    tags: [
      { name: "javascript", color: "blue-text-gradient" },
      { name: "finance", color: "green-text-gradient" },
      { name: "auth", color: "pink-text-gradient" },
    ],
    image: p_uyhisobot,
    source_code_link: "https://github.com/khudajberdi36-creator/uyhisobot",
    live_link: "https://uyhisobot.vercel.app",
  },
  {
    name: "UmidSila",
    description:
      "Kontent yaratuvchi uchun rasmiy kanallar sahifasi: Telegram, Kick va YouTube havolalari.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "link-page", color: "pink-text-gradient" },
    ],
    image: p_umidsila,
    source_code_link: "https://github.com/khudajberdi36-creator/umidsila.uz",
    live_link: "https://umidsila-uz.vercel.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
