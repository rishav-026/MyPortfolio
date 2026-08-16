import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden sm:block"
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(16, 185, 129, 0.05), transparent 80%)`,
      }}
    />
  );
}
