import { ImageResponse } from "next/og";
import { simaMarkPath } from "@/components/sima-mark";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#121212",
        }}
      >
        <svg width="124" height="100" viewBox="0 0 216 175">
          <path fill="#ffffff" fillRule="evenodd" d={simaMarkPath} />
        </svg>
      </div>
    ),
    { ...size },
  );
}
