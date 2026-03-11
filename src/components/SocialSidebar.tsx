import React from "react";
import { Github, Linkedin, Instagram, Send } from "lucide-react";
import { motion } from "framer-motion";

const SocialSidebar = () => {
  const socials = [
    { Icon: Github, href: "https://github.com/your-username" },
    { Icon: Linkedin, href: "https://linkedin.com/in/your-username" },
    { Icon: Instagram, href: "https://instagram.com/your-username" },
    { Icon: Send, href: "https://t.me/your_telegram_username" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      // Скрыто на мобилках (hidden), появляется на больших экранах (lg:flex)
      className="fixed bottom-0 left-6 xl:left-12 z-50 hidden lg:flex flex-col items-center gap-6">
      <div className="flex flex-col gap-6">
        {socials.map(({ Icon, href }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-slate-500 hover:text-indigo-400 hover:-translate-y-1 transition-all duration-300 ${Icon === Send ? "rotate-[-20deg] hover:rotate-0" : ""}`}>
            <Icon size={20} />
          </a>
        ))}
      </div>
      {/* Вертикальная линия как у Бриттани */}
      <div className="w-[1px] h-24 bg-slate-800" />
    </motion.div>
  );
};

export default SocialSidebar;
