import { useState } from "react";

export function Enquiry() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    meetingDate: "",
    purpose: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Enquiry submitted!");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md w-full space-y-4 bg-slate-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-center text-cyan-400">Enquiry Form</h2>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full p-2 rounded bg-slate-700 text-white"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full p-2 rounded bg-slate-700 text-white"
      />

      <input
        type="date"
        name="meetingDate"
        value={form.meetingDate}
        onChange={handleChange}
        required
        className="w-full p-2 rounded bg-slate-700 text-white"
      />

      <select
        name="purpose"
        value={form.purpose}
        onChange={handleChange}
        required
        className="w-full p-2 rounded bg-slate-700 text-white"
      >
        <option value="">Select Purpose</option>
        <option value="project">Project Discussion</option>
        <option value="guidance">Career Guidance</option>
        <option value="collab">Collaboration</option>
        <option value="other">Other</option>
      </select>

      <textarea
        name="message"
        placeholder="Message (Optional)"
        value={form.message}
        onChange={handleChange}
        rows={4}
        className="w-full p-2 rounded bg-slate-700 text-white"
      />

      <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 p-2 rounded font-semibold">
        Submit Enquiry
      </button>
    </form>
  );
}
