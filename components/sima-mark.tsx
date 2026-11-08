import type { SVGProps } from "react";

export const simaMarkPath =
  "M86 2L214 3L180 39L92 39L78 54L80 57L132 72L162 83L176 106L177 123L176 128L147 160L135 172L131 173L2 172L37 134L123 134L139 115L136 112L124 108L57 88L41 64L41 46L80 6L85 3Z M89 14L53 52L52 59L58 64L60 71L65 78L144 102L152 117L152 120L142 133L122 153L121 157L125 161L129 160L157 131L165 121L165 118L153 93L150 90L73 68L73 61L76 57L73 54L66 53L63 50L63 46L93 21L94 17L90 14Z";

export function SimaMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 216 175" fill="none" aria-hidden="true" focusable="false" {...props}>
      <path fill="currentColor" fillRule="evenodd" d={simaMarkPath} />
    </svg>
  );
}
