import { useEffect, useRef } from "react";

export default function CursorCat() {
  const catRef = useRef(null);

  useEffect(() => {
    let nekoPosX = 32;
    let nekoPosY = 32;
    let mousePosX = 0;
    let mousePosY = 0;
    let frameCount = 0;
    let idleTime = 0;
    let idleAnimation = null;
    let idleAnimationFrame = 0;
    const nekoSpeed = 10;

    const spriteSets = {
      idle: [[-3, -3]],
      alert: [[-7, -3]],
      scratchSelf: [
        [-5, -0],
        [-6, -0],
        [-7, -0],
      ],
      scratchWallN: [
        [0, -0],
        [0, -1],
      ],
      scratchWallS: [
        [-7, -1],
        [-6, -2],
      ],
      scratchWallE: [
        [-2, -2],
        [-2, -3],
      ],
      scratchWallW: [
        [-4, -0],
        [-4, -1],
      ],
      tired: [[-3, -2]],
      sleeping: [
        [-2, -0],
        [-2, -1],
      ],
      N: [
        [-1, -2],
        [-1, -3],
      ],
      NE: [
        [0, -2],
        [0, -3],
      ],
      E: [
        [-3, -0],
        [-3, -1],
      ],
      SE: [
        [-5, -1],
        [-5, -2],
      ],
      S: [
        [-6, -3],
        [-7, -2],
      ],
      SW: [
        [-5, -3],
        [-6, -1],
      ],
      W: [
        [-4, -2],
        [-4, -3],
      ],
      NW: [
        [-1, -0],
        [-1, -1],
      ],
    };

    const handleMouseMove = (event) => {
      mousePosX = event.clientX;
      mousePosY = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    function setSprite(name, frame) {
      const sprite = spriteSets[name][frame % spriteSets[name].length];
      if (catRef.current) {
        catRef.current.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
      }
    }

    function resetIdle() {
      idleAnimation = null;
      idleAnimationFrame = 0;
    }

    function idle() {
      idleTime += 1;

      // Every 10 frames check idle animations
      if (idleTime > 10 && Math.floor(Math.random() * 200) === 0 && idleAnimation === null) {
        let availableIdleAnimations = ["sleeping", "scratchSelf"];
        if (nekoPosX < 32) availableIdleAnimations.push("scratchWallW");
        if (nekoPosY < 32) availableIdleAnimations.push("scratchWallN");
        if (nekoPosX > window.innerWidth - 32) availableIdleAnimations.push("scratchWallE");
        if (nekoPosY > window.innerHeight - 32) availableIdleAnimations.push("scratchWallS");
        idleAnimation = availableIdleAnimations[Math.floor(Math.random() * availableIdleAnimations.length)];
      }

      switch (idleAnimation) {
        case "sleeping":
          if (idleAnimationFrame < 8) {
            setSprite("tired", 0);
          } else {
            setSprite("sleeping", Math.floor(idleAnimationFrame / 4));
          }
          if (idleAnimationFrame > 192) {
            resetIdle();
          }
          break;
        case "scratchWallN":
        case "scratchWallS":
        case "scratchWallE":
        case "scratchWallW":
        case "scratchSelf":
          setSprite(idleAnimation, idleAnimationFrame);
          if (idleAnimationFrame > 9) {
            resetIdle();
          }
          break;
        default:
          setSprite("idle", 0);
          break;
      }
      idleAnimationFrame += 1;
    }

    function frame() {
      frameCount += 1;
      const diffX = nekoPosX - mousePosX;
      const diffY = nekoPosY - mousePosY;
      const distance = Math.hypot(diffX, diffY);

      if (distance < nekoSpeed || distance < 48) {
        idle();
        if (catRef.current) {
          catRef.current.style.left = `${nekoPosX - 16}px`;
          catRef.current.style.top = `${nekoPosY - 16}px`;
        }
        return;
      }

      idleTime = 0;
      resetIdle();

      let direction = "";
      direction += diffY / distance > 0.5 ? "N" : "";
      direction += diffY / distance < -0.5 ? "S" : "";
      direction += diffX / distance > 0.5 ? "W" : "";
      direction += diffX / distance < -0.5 ? "E" : "";

      setSprite(direction, frameCount);

      nekoPosX -= (diffX / distance) * nekoSpeed;
      nekoPosY -= (diffY / distance) * nekoSpeed;

      nekoPosX = Math.min(Math.max(16, nekoPosX), window.innerWidth - 16);
      nekoPosY = Math.min(Math.max(16, nekoPosY), window.innerHeight - 16);

      if (catRef.current) {
        catRef.current.style.left = `${nekoPosX - 16}px`;
        catRef.current.style.top = `${nekoPosY - 16}px`;
      }
    }

    const intervalId = setInterval(frame, 100);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      ref={catRef}
      className="pointer-events-none fixed z-50 h-8 w-8"
      style={{
        backgroundImage: "url('https://raw.githubusercontent.com/adryd325/oneko.js/main/oneko.gif')",
        imageRendering: "pixelated",
        backgroundPosition: "-96px -96px",
      }}
    />
  );
}
