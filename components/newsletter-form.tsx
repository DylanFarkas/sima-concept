"use client";

import { FormEvent } from "react";

const tones = {
  outline: {
    form: "mt-4 max-w-85",
    field: "h-14 border border-[#4a4a4a]",
    input: "px-5 text-sm text-white placeholder:text-white/45",
    button: "px-5 text-xs text-white",
  },
  solid: {
    form: "mt-6 w-full",
    field: "h-14 bg-white",
    input: "px-5 text-sm text-ink placeholder:text-ink/45",
    button: "px-6 text-xs text-ink transition-colors hover:bg-cream",
  },
  line: {
    form: "mt-4 w-full max-w-md",
    field: "h-12 border-b border-white/40 transition-colors focus-within:border-white",
    input: "text-sm text-white placeholder:text-white/45",
    button: "pl-5 text-xs text-white",
  },
  ink: {
    form: "mt-5 w-full max-w-md",
    field: "h-14 bg-ink p-1.5",
    input: "px-4 text-[15px] text-cream placeholder:text-cream/50",
    button: "bg-cream px-5 text-sm text-ink transition-colors hover:bg-white",
    placeholder: "Tu correo",
  },
} as const;

export function NewsletterForm({
  tone = "outline",
  id = "email",
}: {
  tone?: keyof typeof tones;
  id?: string;
}) {
  const style = tones[tone];

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmit} className={style.form}>
      <div className={`flex items-stretch ${style.field}`}>
        <label htmlFor={id} className="sr-only">
          Correo electrónico
        </label>
        <input
          id={id}
          name="email"
          type="email"
          required
          placeholder={"placeholder" in style ? style.placeholder : "Dirección de correo electrónico"}
          className={`min-w-0 flex-1 bg-transparent outline-none ${style.input}`}
        />
        <button
          type="submit"
          className={`shrink-0 font-display font-bold uppercase tracking-[0.03em] ${style.button}`}
        >
          SUSCRIBIRME
        </button>
      </div>
    </form>
  );
}
