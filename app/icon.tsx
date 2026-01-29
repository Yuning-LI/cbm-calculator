import { ImageResponse } from "next/og";

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
          width: "32px",
          height: "32px",
          backgroundColor: "#0f172a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z"
            stroke="#ffffff"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M12 3V21" stroke="#ffffff" strokeWidth="1.2" />
          <path d="M4 7.5L12 12L20 7.5" stroke="#ffffff" strokeWidth="1.2" />
        </svg>
      </div>
    ),
    {
      width: 32,
      height: 32,
    }
  );
}
