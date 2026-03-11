import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  category: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  tags,
  link = "#",
  category,
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={onMouseMove}
      className="group relative block bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-10 overflow-hidden h-full flex flex-col transition-colors hover:border-indigo-500/50">
      {/* Свечение теперь фиолетовое */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(99, 102, 241, 0.15), transparent 40%)`,
        }}
      />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-[10px] font-bold uppercase tracking-widest border border-indigo-500/20">
            {category}
          </span>
          <div className="text-slate-500 group-hover:text-white group-hover:rotate-45 transition-all duration-300">
            <ArrowUpRight size={20} />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-slate-400 mb-8 leading-relaxed flex-grow">
          {description}
        </p>

        <div className="mt-auto">
          <ul className="flex flex-wrap gap-2">
            {tags.map((tech) => (
              <li
                key={tech}
                className="text-[10px] font-mono border border-white/10 bg-white/5 px-2 py-1 rounded text-slate-500 group-hover:text-indigo-300 group-hover:border-indigo-500/30 transition-colors">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
