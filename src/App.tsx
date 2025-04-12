import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Skills } from "./pages/Skills";
import { Contact } from "./pages/Contact";
import { Enquiry } from "./pages/Enquiry";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";


export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#0e1b1f] text-[#e6f0f1] font-sans">
        <header className="p-4 shadow-md bg-[#1a2e35]">
          <div className="container mx-auto flex justify-end">
            <nav className="flex gap-6">
              <Link to="/" className="hover:text-[#72f9cb] transition-colors">Home</Link>
              <Link to="/about" className="hover:text-[#72f9cb] transition-colors">About</Link>
              <Link to="/skills" className="hover:text-[#72f9cb] transition-colors">Skills</Link>
              <Link to="/projects" className="hover:text-[#72f9cb] transition-colors">Projects</Link>
              <Link to="/enquiry" className="hover:text-[#72f9cb] transition-colors">Enquiry</Link>
              <Link to="/contact" className="hover:text-[#72f9cb] transition-colors">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="p-6 flex-grow flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="text-center p-4 text-sm text-[#94b5b7]">
          © {new Date().getFullYear()} Jayesh Vedu Khairnar. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}
