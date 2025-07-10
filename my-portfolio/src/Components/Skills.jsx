import {
  FileCode,
  Braces,
  Atom,
  Wind,
  Server,
  Plug,
  Database,
  GitBranch,
  Code,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "HTML / CSS", category: "frontend", icon: FileCode },
  { name: "JavaScript", category: "frontend", icon: Braces },
  { name: "React", category: "frontend", icon: Atom },
  { name: "Tailwind CSS", category: "frontend", icon: Wind },
  { name: "Node.js", category: "backend", icon: Server },
  { name: "Express", category: "backend", icon: Plug },
  { name: "MongoDB", category: "backend", icon: Database },
  { name: "Git / GitHub", category: "tools", icon: GitBranch },
  { name: "VS Code", category: "tools", icon: Code },
];

const categories = ["all", "frontend", "backend", "tools"];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = skills.filter(
    (s) => activeCategory === "all" || s.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium capitalize transition-colors",
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill cards with animated glow */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filtered.map(({ name, category, icon: Icon }) => (
            <div
              key={name}
              className={cn(
                "flex flex-col items-center gap-2 p-6 rounded-xl text-center transition duration-300 border bg-card",
                "hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:animation-glow"
              )}
            >
              <Icon className="h-8 w-8 text-primary" />
              <span className="font-semibold">{name}</span>
              <span className="text-xs text-muted-foreground capitalize">
                {category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};