import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "../../hooks/use-dimension";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import "./Navigation.css";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
    // height: 0
  },
};

export const NavigationBar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  console.log(height);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      style={{ height: isOpen ? null : '100px' }}
    >
      <motion.div className="background" variants={sidebar} />
      <MenuToggle toggle={() => toggleOpen()} />
      <Navigation toggle={() => toggleOpen()} isOpen={isOpen} />
    </motion.nav>
  );
};