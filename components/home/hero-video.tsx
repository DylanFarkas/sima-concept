export function HeroVideo({ className }: { className?: string }) {
  return (
    <video
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      src="/sima/sima-home-hero-video.mp4"
    />
  );
}
