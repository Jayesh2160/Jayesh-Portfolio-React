import profileImg from "../assets/profile.jpg"; // Make sure to add an image in assets folder

export function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
      <h1 className="text-4xl font-bold text-[#72f9cb] mb-4">About Me</h1>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={profileImg}
          alt="Jayesh Vedu Khairnar"
          className="w-40 h-40 rounded-full border-4 border-[#72f9cb] shadow-lg"
        />
        <div className="text-left space-y-2">
          <p className="text-lg text-[#e6f0f1]">
            Hi! I'm <span className="font-semibold">Jayesh Vedu Khairnar</span>,
            a second-year Computer Engineering student passionate about coding and creating digital experiences.
          </p>
          <p className="text-md text-[#94b5b7]">
            I love working with modern web technologies like React, TypeScript, and Tailwind CSS. I also enjoy solving problems using Java and C++.
          </p>
          <p className="text-md text-[#94b5b7]">
            Currently exploring backend development and DevOps and always eager to learn and build something new!
          </p>
        </div>
      </div>
    </div>
  );
}
