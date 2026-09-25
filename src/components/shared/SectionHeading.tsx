type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "center" | "start";
  as?: "h1" | "h2";
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  as = "h2",
}: SectionHeadingProps) {
  const Title = as;
  const centered = align === "center";

  return (
    <header className={centered ? "mb-12 text-center" : "mb-10 text-left"}>
      <p className="mb-3 text-sm uppercase tracking-[0.16em] text-faint">{eyebrow}</p>
      <Title className="text-3xl font-bold md:text-4xl">{title}</Title>
      {intro ? (
        <p className={`mt-4 max-w-3xl text-muted ${centered ? "mx-auto" : ""}`}>{intro}</p>
      ) : null}
    </header>
  );
}
