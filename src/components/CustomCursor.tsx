"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Position of the actual mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth versions for the trailing effect (multiple stages of lag)
  const fastSpring = { damping: 20, stiffness: 250 };
  const midSpring = { damping: 25, stiffness: 150 };
  const slowSpring = { damping: 30, stiffness: 100 };

  const smoothX1 = useSpring(mouseX, fastSpring);
  const smoothY1 = useSpring(mouseY, fastSpring);
  
  const smoothX2 = useSpring(mouseX, midSpring);
  const smoothY2 = useSpring(mouseY, midSpring);

  const smoothX3 = useSpring(mouseX, slowSpring);
  const smoothY3 = useSpring(mouseY, slowSpring);

  const updatePosition = useCallback((e: MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
    setCoords({ x: e.clientX, y: e.clientY });
    
    if (!isVisible) setIsVisible(true);

    const target = e.target as HTMLElement;
    const isInteractive = 
      target.closest("button") || 
      target.closest("a") || 
      window.getComputedStyle(target).cursor === "pointer";
    
    setIsHovering(!!isInteractive);
  }, [mouseX, mouseY, isVisible]);

  useEffect(() => {
    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [updatePosition]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden hidden md:block">
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Trail Layer 3 (Slowest) */}
            <motion.div
              className="fixed top-0 left-0 w-12 h-12 rounded-full border border-primary/5"
              style={{ x: smoothX3, y: smoothY3, translateX: "-50%", translateY: "-50%" }}
              animate={{ scale: isHovering ? 2.5 : 1 }}
            />

            {/* Trail Layer 2 (Medium) */}
            <motion.div
              className="fixed top-0 left-0 w-10 h-10 rounded-full border border-primary/10"
              style={{ x: smoothX2, y: smoothY2, translateX: "-50%", translateY: "-50%" }}
              animate={{ scale: isHovering ? 2.2 : 1 }}
            />

            {/* Main Outer Lens (Fast Spring) */}
            <motion.div
              className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary/30 mix-blend-screen bg-primary/5 backdrop-blur-[2px]"
              style={{
                x: smoothX1,
                y: smoothY1,
                translateX: "-50%",
                translateY: "-50%",
              }}
              animate={{
                scale: isPressed ? 0.7 : isHovering ? 2 : 1,
                borderColor: isHovering ? "rgba(var(--primary), 0.9)" : "rgba(var(--primary), 0.3)",
              }}
              transition={{ type: "spring", damping: 15, stiffness: 200 }}
            >
                {/* HUD Scanning Lines */}
                <AnimatePresence>
                    {isHovering && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            {/* Scanning Vertical Bar */}
                            <motion.div 
                                animate={{ x: ["-100%", "100%", "-100%"] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="w-[1px] h-full bg-primary/40 shadow-[0_0_8px_rgba(var(--primary),0.5)]"
                            />
                            
                            {/* Lens Focus Corners - These now handle the rotation */}
                            <motion.div 
                                className="absolute inset-0"
                                animate={{ rotate: 180 }}
                                transition={{ duration: 0.5, ease: "circOut" }}
                            >
                                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary" />
                                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary" />
                                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary" />
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary" />
                            </motion.div>

                            {/* Active Coordinates Display - Stays upright */}
                            <motion.div 
                                className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap"
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <span className="text-[8px] font-mono text-primary/60 bg-black/40 px-1.5 py-0.5 rounded backdrop-blur-sm border border-primary/20">
                                    X:{coords.x} Y:{coords.y}
                                </span>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Core Interaction Dot (Direct Mouse Position) */}
            <motion.div
              className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_15px_rgba(var(--primary),1)]"
              style={{
                x: mouseX,
                y: mouseY,
                translateX: "-50%",
                translateY: "-50%",
              }}
              animate={{
                scale: isPressed ? 3 : isHovering ? 0.5 : 1,
                opacity: isHovering ? 0.4 : 1,
              }}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
