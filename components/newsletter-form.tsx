"use client";

import { FormEvent } from "react";

export function NewsletterForm() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmit} className="mt-4 max-w-85">
      <div className="flex h-14 items-stretch border border-[#4a4a4a]">
        <label htmlFor="email" className="sr-only">
          Correo electrónico
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Dirección de correo electrónico"
          className="min-w-0 flex-1 bg-transparent px-5 text-sm text-white outline-none placeholder:text-white/45"
        />
        <button
          type="submit"
          className="shrink-0 px-5 font-display text-xs font-bold uppercase tracking-[0.03em] text-white"
        >
          SUSCRIBIRME
        </button>
      </div>
    </form>
  );
}
