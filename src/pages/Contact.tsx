import { Mail, Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <div className="text-center space-y-4">
      <p className="flex items-center justify-center gap-2">
        <Mail className="w-5 h-5 text-cyan-400" />
        <a href="mailto:jayukhairnar20@gmail.com" className="text-cyan-400">jayukhairnar20@gmail.com</a>
      </p>
      <p className="flex items-center justify-center gap-2">
        <Github className="w-5 h-5 text-cyan-400" />
        <a href="https://github.com/jayesh2160" className="text-cyan-400">github.com/jayesh2160</a>
      </p>
      <p className="flex items-center justify-center gap-2">
        <Linkedin className="w-5 h-5 text-cyan-400" />
        <a href="https://linkedin.com/in/jayesh-khairnar-325933293/" className="text-cyan-400">linkedin.com/in/jayesh-khairnar-325933293/</a>
      </p>
    </div>
  );
}
