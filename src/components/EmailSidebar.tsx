import React from "react";
import { motion } from "framer-motion";

const EmailSidebar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-0 right-6 xl:right-12 z-50 hidden lg:flex flex-col items-center gap-6">
      <div className="[writing-mode:vertical-rl] mb-6">
        <a
          href="mailto:su1tangithub@gmail.com"
          className="text-slate-500 font-mono text-sm tracking-widest hover:text-indigo-400 hover:-translate-y-1 transition-all duration-300">
          su1tangithub@gmail.com
        </a>
      </div>
      <div className="w-[1px] h-24 bg-slate-800" />
    </motion.div>
  );
};

export default EmailSidebar;
