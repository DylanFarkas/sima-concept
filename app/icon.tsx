import { ImageResponse } from "next/og";
import { simaMarkPath } from "@/components/sima-mark";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
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
        <svg width="22" height="18" viewBox="0 0 216 175">
          <path fill="#ffffff" fillRule="evenodd" d={simaMarkPath} />
        </svg>
      </div>
    ),
    { ...size },
  );
}
