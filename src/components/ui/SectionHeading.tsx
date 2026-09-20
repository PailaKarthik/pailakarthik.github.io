import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  eyebrow,
  title,
  lede,
}: {
  index: string;
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <Reveal>
      <div className="max-w-2xl">
        <p className="eyebrow">
          <span className="text-white">{index}</span>
          <span aria-hidden="true"> / </span> {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h2>
        {lede ? <p className="mt-3 text-base leading-relaxed text-[#8a8a8a]">{lede}</p> : null}
      </div>
    </Reveal>
  );
}
