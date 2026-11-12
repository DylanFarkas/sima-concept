import { aboutValues } from "@/lib/home-content";

const strokes = {
  dark: "[-webkit-text-stroke:1.5px_var(--ink)]",
  light: "[-webkit-text-stroke:1.5px_white]",
};

export function ValuesTicker({
  tone = "dark",
  className = "",
}: {
  tone?: keyof typeof strokes;
  className?: string;
}) {
  const words = aboutValues.map((value) => value.title);

  return (
    <div className={`py-6 lg:py-8 ${className}`} aria-hidden>
      <div className="home-ticker flex w-max">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {words.map((word, index) => (
              <span
                key={word}
                className={`px-6 font-display text-[clamp(3.5rem,9vw,8.5rem)] font-bold uppercase leading-none tracking-[-0.01em] lg:px-10 ${
                  index % 2 === 1 ? `text-transparent ${strokes[tone]}` : ""
                }`}
              >
                {word}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
