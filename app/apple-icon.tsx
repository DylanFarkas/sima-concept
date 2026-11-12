import { ImageResponse } from "next/og";
import { simaMarkPath, simaMarkViewBox } from "@/components/sima-mark";

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
        <svg width="148" height="60" viewBox={simaMarkViewBox}>
          <path fill="#ffffff" d={simaMarkPath} />
        </svg>
      </div>
    ),
    { ...size },
  );
}
