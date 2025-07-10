import {
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  Code,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-secondary/20 to-background relative">
      <div className="container mx-auto max-w-3xl text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Let’s <span className="text-primary"> Connect </span>
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          Whether it's about a project, an opportunity, or just a friendly hello — I'm just one message away.
        </p>

        {/* Email */}
        <div className="inline-flex items-center gap-4 bg-card p-4 px-6 rounded-full shadow-md border border-border mb-12 hover:shadow-lg transition-all">
          <Mail className="h-6 w-6 text-primary" />
          <a
            href="mailto:riyam1680@gmail.com"
            className="font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            riyam1680@gmail.com
          </a>
        </div>

        {/* Social Links */}
        <h4 className="text-lg font-semibold mb-4">Find me online</h4>
        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/riya-maurya-44b219302/"
            target="_blank"
            aria-label="LinkedIn"
            className="group hover:scale-110 transition duration-200"
          >
            <Linkedin className="text-muted-foreground group-hover:text-primary transition-colors" size={28} />
          </a>
          <a
            href="#"
            target="_blank"
            aria-label="Twitter"
            className="group hover:scale-110 transition duration-200"
          >
            <Twitter className="text-muted-foreground group-hover:text-primary transition-colors" size={28} />
          </a>
          <a
            href="#"
            target="_blank"
            aria-label="Instagram"
            className="group hover:scale-110 transition duration-200"
          >
            <Instagram className="text-muted-foreground group-hover:text-primary transition-colors" size={28} />
          </a>
          <a
            href="https://leetcode.com/u/Neemriya/"
            target="_blank"
            aria-label="LeetCode"
            className="group hover:scale-110 transition duration-200"
          >
            <Code className="text-muted-foreground group-hover:text-primary transition-colors" size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};
