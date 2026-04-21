"use client";

export function ScrollTopButton() {
  return (
    <button
      type="button"
      className="scroll-top-button"
      aria-label="Scroll back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ↑
    </button>
  );
}
