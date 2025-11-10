export default function ExperienceCard({ role, company, duration, points }) {
  return (
    <div className="experience-card p-6 rounded-xl bg-surface border border-primary-dark shadow-glow">
      <h3 className="text-primary font-anime text-xl">{role}</h3>
      <p className="text-primary-light mb-2">{company}</p>
      <p className="text-text-gray text-sm mb-4">{duration}</p>

      <ul className="list-disc ml-5 text-text-gray text-sm space-y-1">
        {points.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
