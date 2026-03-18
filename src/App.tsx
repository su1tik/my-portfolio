import {
  Bot,
  Zap,
  Globe,
  Github,
  Linkedin,
  Instagram,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";
import ProjectCard from "./components/ProjectCard";
import SocialSidebar from "./components/SocialSidebar";
import EmailSidebar from "./components/EmailSidebar";

const EXPERIENCE = [
  {
    company: "AI Startup / Freelance",
    role: "Middle Frontend Developer",
    period: "2023 — Наст. время",
    tasks: [
      "Разработка интерфейсов для управления LLM-агентами на React и TypeScript.",
      "Оптимизация производительности приложений в Linux-среде (Arch Linux).",
      "Интеграция API нейросетей (OpenAI, DeepL) для автоматизации бизнес-логики.",
    ],
  },
  {
    company: "Tech Development KZ",
    role: "Frontend Developer",
    period: "2021 — 2023",
    tasks: [
      "Создание масштабируемых UI-компонентов для ERP-систем.",
      "Настройка CI/CD процессов и автоматизация сборки фронтенда.",
      "Рефакторинг кода и переход на современный стек (Vite + Tailwind).",
    ],
  },
];

const PROJECTS = [
  {
    title:
      "KAMI AI: Интеллектуальная система локализации для кафе и ресторанов",
    category: "AI / Business Integration",
    description:
      "Высокопроизводительный сервис на базе AI для мгновенного перевода ресторанных меню на 15+ языков. Система учитывает профессиональный кулинарный контекст и использует кастомные глоссарии для обеспечения 100% точности терминологии.",
    tags: [
      "React",
      "Vite",
      "CSS3",
      "LocalStorage API",
      "Node.js",
      "Google Gemini API",
      "XLSX",
      "Mammoth.js",
    ],
    link: "https://ai-menu-translator.vercel.app/",
  },
  {
    title: "WEB-terminal-linux: Интерактивная консольная среда разработчика",
    category: "Creative portfolio / Interactive UI",
    description:
      "Интерактивное веб-приложение в стиле терминала Arch Linux, предназначенное для навигации по портфолио через командную строку. Проект включает в себя полноценную виртуальную файловую систему с возможностью создания и удаления файлов, поддержку кастомных команд (neofetch, pacman, sudo) и систему автодополнения (Tab completion). Состояние системы и история команд синхронизируются через LocalStorage для сохранения сессии пользователя.",
    tags: [
      "React 19",
      "TypeScript",
      "Zustand",
      "Vite",
      "SCSS",
      "LocalStorage API",
    ],
    link: "https://web-terminal-linux.vercel.app/",
  },
  {
    title:
      "Lumina Finance: Интеллектуальная экосистема управления личным капиталом",
    category: "FINTECH ORCHESTRATOR / PREMIUM UI",
    description:
      "Премиальный финансовый оркестратор, ориентированный на глубокую аналитику и визуализацию бюджета в реальном времени. Приложение построено на базе Bento-grid архитектуры с использованием Linear-style дизайна. Lumina Finance автоматически рассчитывает свободный денежный поток (FCF), определяет безопасный дневной лимит трат и строит интеллектуальные прогнозы для достижения финансовых целей. Особое внимание уделено микро-взаимодействиям: интерактивному свечению (Glow effect), анимированным счетчикам и плавным переходам слоев (Layout animations).",
    tags: [
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Framer Motion",
      "Lucide React",
      "LocalStorage API",
    ],
    link: "https://lumina-finance-sula.vercel.app/",
  },
];

const App = () => {
  const techStack = [
    "React",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "OpenAI API",
    "PostgreSQL",
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 selection:bg-indigo-500/30 font-sans antialiased">
      <SocialSidebar />
      <EmailSidebar />

      {/* Фоновая сетка */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Навигация: Теперь фиолетовая */}
      <nav className="relative z-10 flex justify-between items-center max-w-6xl mx-auto px-6 py-8">
        <div className="text-white font-bold tracking-tighter text-lg border-2 border-indigo-500 px-2 py-1">
          S.
        </div>
        <div className="flex items-center gap-6 md:gap-10 text-xs font-mono tracking-widest uppercase text-slate-500">
          <a
            href="#about"
            className="hover:text-indigo-400 transition-colors hidden sm:block">
            <span className="text-indigo-500">01.</span> About
          </a>
          <a
            href="#work"
            className="hover:text-indigo-400 transition-colors hidden sm:block">
            <span className="text-indigo-500">02.</span> Work
          </a>
          <a
            href="#experience"
            className="hover:text-indigo-400 transition-colors hidden sm:block">
            <span className="text-indigo-500">03.</span> Experience
          </a>
          <a
            href="https://drive.google.com/file/d/1WAZdd5zLGU7PHSDSctcEB740DwuCrAuo/view?usp=sharing"
            target="_blank"
            className="border border-indigo-500 px-4 py-2 text-indigo-400 hover:bg-indigo-500/10 transition-all rounded leading-none flex items-center h-full">
            Resume
          </a>
        </div>
      </nav>

      <main className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 pt-10 md:pt-20">
        {/* HERO SECTION */}
        <section className="min-h-[80vh] flex flex-col justify-center mb-20">
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="font-mono text-indigo-500 mb-5 text-sm uppercase tracking-[0.3em]">
            Привет, меня зовут
          </motion.p>
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4">
            Sultan.
          </motion.h1>
          <motion.h2
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-slate-600 leading-tight mb-8">
            Я создаю интеллект для веба.
          </motion.h2>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-xl text-lg leading-relaxed mb-12">
            Frontend-разработчик из Казахстана. Специализируюсь на автоматизации
            и интеграции AI. Превращаю сложные бизнес-проблемы в элегантные
            технические решения.
          </motion.p>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}>
            <a
              href="#work"
              className="border-2 border-indigo-500 text-indigo-400 px-8 py-4 rounded font-mono hover:bg-indigo-500/10 transition-all inline-block">
              Посмотреть проекты
            </a>
          </motion.div>
        </section>

        {/* 01. ABOUT ME (С цветной аватаркой) */}
        <section id="about" className="mb-48 scroll-mt-24">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap">
              <span className="text-indigo-500 font-mono text-xl mr-2">
                01.
              </span>{" "}
              About Me
            </h2>
            <div className="h-[1px] w-full bg-slate-800" />
          </div>
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2 space-y-4 text-slate-400">
              <p>
                Я разработчик, который верит в мощь{" "}
                <span className="text-indigo-400">автоматизации</span>. Мой опыт
                работы на{" "}
                <span className="text-white italic font-medium">
                  Arch Linux
                </span>{" "}
                сформировал инженерный подход: я люблю знать, как всё работает
                под капотом.
              </p>
              <p>
                Сегодня я помогаю компаниям внедрять нейросети, чтобы сделать
                продукты умнее и быстрее.
              </p>
              <ul className="grid grid-cols-2 gap-2 font-mono text-xs">
                {techStack.map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="text-indigo-500">▹</span> {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* ЦВЕТНАЯ АВАТАРКА БЕЗ GRAYSCALE */}
            <div className="flex justify-center">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative group">
                {/* Фиолетовое свечение */}
                <div className="absolute -inset-1 bg-indigo-500/30 rounded-full blur-xl opacity-70 group-hover:bg-indigo-500/50 transition-all duration-700" />

                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border border-indigo-500/30 p-2 bg-black/40 backdrop-blur-sm shadow-2xl overflow-hidden">
                  {/* Удалены grayscale и hover-фильтры */}
                  <img
                    src="/img/photo_5298814124059988874_x.jpg"
                    alt="Me"
                    className="w-full h-full rounded-full object-cover shadow-inner transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 02. WORK */}
        <section id="work" className="mb-48 scroll-mt-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap">
              <span className="text-indigo-500 font-mono text-xl mr-2">
                02.
              </span>{" "}
              Selected Work
            </h2>
            <div className="h-[1px] w-full bg-slate-800" />
          </div>

          {/* Контейнер для списка проектов */}
          <div className="flex flex-col gap-16 md:gap-24">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* 03. EXPERIENCE */}
        <section id="experience" className="mb-48 scroll-mt-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap">
              <span className="text-indigo-500 font-mono text-xl mr-2">
                03.
              </span>{" "}
              Experience
            </h2>
            <div className="h-[1px] w-full bg-slate-800" />
          </div>

          <div className="space-y-12">
            {EXPERIENCE.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group">
                <h3 className="text-xl font-bold text-white mb-1">
                  {job.role}{" "}
                  <span className="text-indigo-400 font-medium">
                    @ {job.company}
                  </span>
                </h3>
                <p className="font-mono text-xs text-slate-600 mb-4 uppercase tracking-[0.2em]">
                  {job.period}
                </p>
                <ul className="space-y-2">
                  {job.tasks.map((task, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                      <span className="text-indigo-500 mt-1">▹</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* 6. Footer */}
      <footer className="py-10 text-center font-mono text-slate-500">
        {/* Ряд иконок для мобильных (виден только на экранах меньше lg) */}
        <div className="flex lg:hidden justify-center gap-8 mb-8">
          <a
            href="https://github.com/su1tik"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition-colors">
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/sultan-auken-034316342/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition-colors">
            <Linkedin size={22} />
          </a>
          <a
            href="http://t.me/suullaaaa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition-colors">
            <Send size={22} />
          </a>
          <a
            href="https://www.instagram.com/sula.profile/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-500 transition-colors">
            <Instagram size={22} />
          </a>
          <a
            href="mailto:su1tangithub@gmail.com"
            className="hover:text-indigo-500 transition-colors">
            <Globe size={22} />
          </a>
        </div>

        <p className="text-[10px] uppercase tracking-[0.3em] px-6 leading-loose">
          Разработано и построено <span className="text-white">Sultan</span>{" "}
          <span className="mx-2 text-indigo-500">|</span> 2026
        </p>
      </footer>
    </div>
  );
};

export default App;
