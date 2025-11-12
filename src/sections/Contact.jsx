import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSend = (e) => {
    e.preventDefault();

    const name = e.target.from_name.value;
    const email = e.target.user_email.value;
    const message = e.target.message.value;

    const subject = encodeURIComponent(`Message from Portfolio — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=rtkrajs551@gmail.com&su=${subject}&body=${body}`;

    setStatus("Redirecting to Gmail...");
    window.open(gmailUrl, "_blank");

    setTimeout(() => {
      setStatus("");
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-32 px-6 w-full">
      {/* background wind aura */}
      <div className="experience-bg"></div>

      <div className="max-w-lg xl:max-w-3xl mx-auto relative z-10">
        <h2 className="text-center text-primary font-anime text-4xl mb-10 reveal">
          Contact Me
        </h2>

        <p className="text-center text-primary-light font-body mb-14 reveal">
          Let's connect — I usually reply within a few hours.
        </p>

        <form
          onSubmit={handleSend}
          className="reveal max-w-xl mx-auto p-10 rounded-2xl bg-surface/60 backdrop-blur-xl border wind-border shadow-glow flex flex-col gap-6"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="contact-input"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="contact-input"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="contact-input h-32 resize-none"
          ></textarea>

          <button type="submit" className="contact-btn font-anime shadow-glow">
            Send Message
          </button>

          {status && (
            <p className="text-center text-primary-light text-sm">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
