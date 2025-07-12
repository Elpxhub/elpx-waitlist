// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function FloatingLogo() {
  const [animationKey, setAnimationKey] = useState(0);
  const [start, setStart] = useState({ top: "0%", left: "0%" });
  const [end, setEnd] = useState({ top: "0%", left: "0%" });

  const generatePosition = () => `${Math.floor(Math.random() * 80) + 10}%`;

  useEffect(() => {
    const loop = () => {
      setStart({ top: generatePosition(), left: generatePosition() });
      setEnd({ top: generatePosition(), left: generatePosition() });
      setAnimationKey((prev) => prev + 1);
    };

    const interval = setInterval(loop, 12000);
    loop();
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.img
      key={animationKey}
      src={logo}
      alt="Floating Logo"
      initial={{
        top: start.top,
        left: start.left,
        opacity: 0,
        scale: 0.7,
        position: "fixed",
        zIndex: 0,
      }}
      animate={{
        top: end.top,
        left: end.left,
        opacity: [0, 0.06, 0],
        scale: 1,
      }}
      transition={{
        duration: 12,
        ease: "easeInOut",
      }}
      className="w-32 sm:hidden pointer-events-none select-none"
    />
  );
}
