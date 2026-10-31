import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function LineIcon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function IconQuality(props: IconProps) {
  return (
    <LineIcon {...props}>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M5.6 15.4 9 10.6l2.3 3.1 2.2-3.4 4.9 5.1" />
      <path d="M9 10.6 9.9 12" />
    </LineIcon>
  );
}

export function IconPurpose(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M12 3.2 18.7 5.6v5.1c0 4.2-2.8 7.9-6.7 8.9-3.9-1-6.7-4.7-6.7-8.9V5.6L12 3.2Z" />
      <path d="m9.1 11.8 2.1 2.1 3.9-4.2" />
    </LineIcon>
  );
}

export function IconCommunity(props: IconProps) {
  return (
    <LineIcon {...props}>
      <circle cx="9.6" cy="9.1" r="2.6" />
      <path d="M4.6 18.4c0-2.7 2.2-4.5 5-4.5s5 1.8 5 4.5" />
      <circle cx="16.8" cy="10.2" r="1.9" />
      <path d="M15.4 14.2c2.5-.3 4.6 1.2 4.6 3.6" />
    </LineIcon>
  );
}

export function IconAwareness(props: IconProps) {
  return (
    <LineIcon {...props}>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M12 17.6v-6.4" />
      <path d="M12 12.4c-2.5 0-3.9-1.5-3.9-4.1 2.5 0 3.9 1.5 3.9 4.1Z" />
      <path d="M12 13.6c2.5 0 3.9-1.5 3.9-4.1-2.5 0-3.9 1.5-3.9 4.1Z" />
    </LineIcon>
  );
}

export function IconInspiration(props: IconProps) {
  return (
    <LineIcon {...props}>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M12 16.6s-3.9-2.4-3.9-5c0-1.3 1-2.4 2.4-2.4.8 0 1.3.4 1.5.9.2-.5.7-.9 1.5-.9 1.4 0 2.4 1.1 2.4 2.4 0 2.6-3.9 5-3.9 5Z" />
    </LineIcon>
  );
}

export function IconFaith(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M12 3.4v17.2" />
      <path d="M6.9 8.6h10.2" />
    </LineIcon>
  );
}

export function IconShirt(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M8.6 3.9 4.8 6.1l1.6 3.4 1.9-.9v11.5h7.4V8.6l1.9.9 1.6-3.4-3.8-2.2c-.6 1.3-1.9 2.1-3.4 2.1s-2.8-.8-3.4-2.1Z" />
    </LineIcon>
  );
}

export function IconDress(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M9.2 3.9 5.6 6.1l1.5 3.3 1.7-.8v3.1c0 .6-.1 1.1-.3 1.6l-1.4 4c-.3.9.3 1.8 1.3 1.8h7.2c1 0 1.6-.9 1.3-1.8l-1.4-4c-.2-.5-.3-1-.3-1.6V8.6l1.7.8L18.4 6l-3.6-2.1c-.5 1.2-1.6 1.9-2.8 1.9s-2.3-.7-2.8-1.9Z" />
    </LineIcon>
  );
}

export function IconShoe(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M3.2 16.6h11.3c1.4 0 2.5-.4 3.6-1.2l2.2-1.4c.6-.4.6-1.2 0-1.6l-4.6-2.7-1.6 1-3-2-1.8 2H4.7c-.8 0-1.5.7-1.5 1.5v4.4Z" />
      <path d="M3.2 18.4h17.6" />
    </LineIcon>
  );
}

export function IconHeadphones(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M3 14v-3a9 9 0 0 1 18 0v3" />
      <path d="M5 14h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a3 3 0 0 1-3-3v-2a2 2 0 0 1 2-2Z" />
      <path d="M19 14h-2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1a3 3 0 0 0 3-3v-2a2 2 0 0 0-2-2Z" />
    </svg>
  );
}

export function IconBottle(props: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M19 6h10v5l3 3v25a3 3 0 0 1-3 3H19a3 3 0 0 1-3-3V14l3-3V6Z" />
      <path d="M19 11h10M16 19h16M21 6V4h6v2M21 25h10M21 31h10" />
    </svg>
  );
}

export function IconBag(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M5.4 9.4h13.2c.8 0 1.4.7 1.3 1.5l-1 8.2c-.1.7-.7 1.2-1.4 1.2H6.5c-.7 0-1.3-.5-1.4-1.2l-1-8.2c-.1-.8.5-1.5 1.3-1.5Z" />
      <path d="M8.6 9.4V7.2a3.4 3.4 0 0 1 6.8 0v2.2" />
      <path d="M9.6 13.2h4.8" />
    </LineIcon>
  );
}

export function IconGrid(props: IconProps) {
  return (
    <LineIcon {...props}>
      <rect x="3.6" y="3.6" width="7" height="7" rx="1" />
      <rect x="13.4" y="3.6" width="7" height="7" rx="1" />
      <rect x="3.6" y="13.4" width="7" height="7" rx="1" />
      <rect x="13.4" y="13.4" width="7" height="7" rx="1" />
    </LineIcon>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <LineIcon {...props}>
      <circle cx="12" cy="12" r="9.2" />
      <path d="m8 12.1 2.7 2.7L16 9.4" />
    </LineIcon>
  );
}

export function IconTarget(props: IconProps) {
  return (
    <LineIcon {...props}>
      <circle cx="12" cy="12" r="9.2" />
      <circle cx="12" cy="12" r="5.1" />
      <circle cx="12" cy="12" r="1.2" />
    </LineIcon>
  );
}

export function IconTrend(props: IconProps) {
  return (
    <LineIcon {...props}>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M6.5 15.4 10 9.6l2.4 3.9 1.5-2.2 3.6 4.1Z" />
    </LineIcon>
  );
}

export function IconHeart(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M12 19.6s-7.4-4.5-7.4-9.4c0-2.4 1.9-4.4 4.4-4.4 1.5 0 2.6.7 3 1.8.4-1.1 1.5-1.8 3-1.8 2.5 0 4.4 2 4.4 4.4 0 4.9-7.4 9.4-7.4 9.4Z" />
    </LineIcon>
  );
}

export function IconHeartCheck(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M12 19.4s-7.2-4.4-7.2-9.2c0-2.3 1.9-4.3 4.3-4.3 1.5 0 2.5.7 2.9 1.7.4-1 1.4-1.7 2.9-1.7 2.4 0 4.3 2 4.3 4.3 0 4.8-7.2 9.2-7.2 9.2Z" />
      <path d="m9 11.6 2.2 2.2 3.8-4.1" />
    </LineIcon>
  );
}

export function IconTruck(props: IconProps) {
  return (
    <LineIcon {...props}>
      <rect x="3.6" y="5.8" width="10.6" height="9.4" rx="0.8" />
      <path d="M14.2 9.2h3.5l2.7 2.8v3.2h-6.2z" />
      <circle cx="8.2" cy="16.9" r="1.8" />
      <circle cx="17.4" cy="16.9" r="1.8" />
    </LineIcon>
  );
}

export function IconLock(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M12 3.2 18.7 5.6v5.1c0 4.2-2.8 7.9-6.7 8.9-3.9-1-6.7-4.7-6.7-8.9V5.6L12 3.2Z" />
      <rect x="9.3" y="10.6" width="5.4" height="4.4" rx="0.9" />
      <path d="M10.4 10.6V9a1.6 1.6 0 0 1 3.2 0v1.6" />
    </LineIcon>
  );
}

export function IconRefresh(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M4.4 12.4A7.7 7.7 0 0 1 12.1 4.3c2.8 0 5.3 1.5 6.7 3.8" />
      <path d="m15.2 7.6 3.6.5.6-3.6" />
      <path d="M19.6 11.6a7.7 7.7 0 0 1-7.7 8.1c-2.8 0-5.3-1.5-6.7-3.8" />
      <path d="m8.8 16.4-3.6-.5-.6 3.6" />
    </LineIcon>
  );
}

export function IconHeadset(props: IconProps) {
  return (
    <LineIcon {...props}>
      <path d="M4.8 13.4v-2.2a7.2 7.2 0 0 1 14.4 0v2.2" />
      <rect x="3.1" y="12.4" width="3.5" height="5.6" rx="1.75" />
      <rect x="17.4" y="12.4" width="3.5" height="5.6" rx="1.75" />
      <path d="M19.15 18v1.7a1.9 1.9 0 0 1-1.9 1.9h-2.6" />
    </LineIcon>
  );
}

export function IconSearch(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <circle cx="9" cy="9" r="4.75" stroke="currentColor" strokeWidth="1.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m12.5 12.5 3.25 3.25"
      />
    </svg>
  );
}

export function IconAccount(props: IconProps) {
  return (
    <svg viewBox="0 0 15 17" fill="none" aria-hidden="true" {...props}>
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10.375 3.813a3.063 3.063 0 1 1-6.125 0 3.063 3.063 0 0 1 6.125 0ZM7.313 9.5c-3.667 0-6.24 2.691-6.563 6.125h13.125C13.552 12.191 10.979 9.5 7.312 9.5Z"
      />
    </svg>
  );
}

export function IconCart(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M3.392 6.875h13.216v8.016c0 .567-.224 1.112-.624 1.513-.4.402-.941.627-1.506.627H5.522a2.13 2.13 0 0 1-1.506-.627 2.15 2.15 0 0 1-.624-1.513zM8.818 2.969h2.333c.618 0 1.211.247 1.649.686a2.35 2.35 0 0 1 .683 1.658v1.562H6.486V5.313c0-.622.246-1.218.683-1.658a2.33 2.33 0 0 1 1.65-.686"
      />
    </svg>
  );
}

export function IconFacebook(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M18 10.049C18 5.603 14.419 2 10 2c-4.419 0-8 3.603-8 8.049C2 14.067 4.925 17.396 8.75 18v-5.624H6.719v-2.328h2.03V8.275c0-2.017 1.195-3.132 3.023-3.132.874 0 1.79.158 1.79.158v1.98h-1.009c-.994 0-1.303.621-1.303 1.258v1.51h2.219l-.355 2.326H11.25V18c3.825-.604 6.75-3.933 6.75-7.951Z"
      />
    </svg>
  );
}

export function IconInstagram(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.23 3.492c-.84-.037-1.096-.046-3.23-.046-2.144 0-2.39.01-3.238.055-.776.027-1.195.164-1.487.273a2.43 2.43 0 0 0-.912.593 2.486 2.486 0 0 0-.602.922c-.11.282-.238.702-.274 1.486-.046.84-.046 1.095-.046 3.23 0 2.134.01 2.39.046 3.229.004.51.097 1.016.274 1.495.145.365.319.639.602.913.282.282.538.456.92.602.474.176.974.268 1.479.273.848.046 1.103.046 3.238.046 2.134 0 2.39-.01 3.23-.046.784-.036 1.203-.164 1.486-.273.374-.146.648-.329.921-.602.283-.283.447-.548.602-.922.177-.476.27-.979.274-1.486.037-.84.046-1.095.046-3.23 0-2.134-.01-2.39-.055-3.229-.027-.784-.164-1.204-.274-1.495a2.43 2.43 0 0 0-.593-.913 2.604 2.604 0 0 0-.92-.602c-.284-.11-.703-.237-1.488-.273ZM6.697 2.05c.857-.036 1.131-.045 3.302-.045 1.1-.014 2.202.001 3.302.045.664.014 1.321.14 1.943.374a3.968 3.968 0 0 1 1.414.922c.41.397.728.88.93 1.414.23.622.354 1.279.365 1.942C18 7.56 18 7.824 18 10.005c0 2.17-.01 2.444-.046 3.292-.036.858-.173 1.442-.374 1.943-.2.53-.474.976-.92 1.423a3.896 3.896 0 0 1-1.415.922c-.51.191-1.095.337-1.943.374-.857.036-1.122.045-3.302.045-2.171 0-2.445-.009-3.302-.055-.849-.027-1.432-.164-1.943-.364a4.152 4.152 0 0 1-1.414-.922 4.128 4.128 0 0 1-.93-1.423c-.183-.51-.329-1.085-.365-1.943C2.009 12.45 2 12.167 2 10.004c0-2.161 0-2.435.055-3.302.027-.848.164-1.432.365-1.942a4.44 4.44 0 0 1 .92-1.414 4.18 4.18 0 0 1 1.415-.93c.51-.183 1.094-.33 1.943-.366Zm.427 4.806a4.105 4.105 0 1 1 5.805 5.805 4.105 4.105 0 0 1-5.805-5.805Zm1.882 5.371a2.668 2.668 0 1 0 2.042-4.93 2.668 2.668 0 0 0-2.042 4.93Zm5.922-5.942a.958.958 0 1 1-1.355-1.355.958.958 0 0 1 1.355 1.355Z"
      />
    </svg>
  );
}

export function IconTiktok(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M10.511 1.705h2.74s-.157 3.51 3.795 3.768v2.711s-2.114.129-3.796-1.158l.028 5.606A5.073 5.073 0 1 1 8.213 7.56h.708v2.785a2.298 2.298 0 1 0 1.618 2.205L10.51 1.705Z"
      />
    </svg>
  );
}

const lineIcons = {
  quality: IconQuality,
  purpose: IconPurpose,
  community: IconCommunity,
  awareness: IconAwareness,
  inspiration: IconInspiration,
  faith: IconFaith,
  shirt: IconShirt,
  dress: IconDress,
  shoe: IconShoe,
  headphones: IconHeadphones,
  bottle: IconBottle,
  bag: IconBag,
  grid: IconGrid,
  check: IconCheck,
  target: IconTarget,
  trend: IconTrend,
  heart: IconHeart,
  heartCheck: IconHeartCheck,
  truck: IconTruck,
  lock: IconLock,
  refresh: IconRefresh,
  headset: IconHeadset,
} as const;

export type LineIconName = keyof typeof lineIcons;

export function SimaIcon({
  name,
  className,
}: {
  name: LineIconName;
  className?: string;
}) {
  const Icon = lineIcons[name];
  return <Icon className={className} />;
}
