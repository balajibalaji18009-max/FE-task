export default function SectionHeading({ title, text }) {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
      {text && <p className="mt-2 text-muted">{text}</p>}
    </div>
  );
}
