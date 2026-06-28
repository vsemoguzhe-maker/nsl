import { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export function CustomCursor() {
  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });
  const ringX = useSpring(0, { stiffness: 200, damping: 20 });
  const ringY = useSpring(0, { stiffness: 200, damping: 20 });
  
  // Use MotionValue instead of React state to avoid re-renders!
  const isHovering = useMotionValue(0);

  useEffect(() => {
    // Check if device supports hover
    if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
       return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName?.toLowerCase() === 'a' ||
        target.tagName?.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList?.contains('hover-trigger')
      ) {
        isHovering.set(1);
      } else {
        isHovering.set(0);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, ringX, ringY, isHovering]);

  if (typeof window !== 'undefined' && window.innerWidth < 900) {
    return null;
  }

  // Transform hover value to scale and opacity
  const cursorScale = useSpring(1, { stiffness: 300, damping: 20 });
  const ringScale = useSpring(1, { stiffness: 300, damping: 20 });
  const ringOpacity = useSpring(0.5, { stiffness: 300, damping: 20 });

  useEffect(() => {
    return isHovering.on("change", (latest) => {
      if (latest === 1) {
        cursorScale.set(2);
        ringScale.set(1.5);
        ringOpacity.set(0.1);
      } else {
        cursorScale.set(1);
        ringScale.set(1);
        ringOpacity.set(0.4);
      }
    });
  }, [isHovering, cursorScale, ringScale, ringOpacity]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-terracotta rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          scale: cursorScale,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-terracotta rounded-full pointer-events-none z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          scale: ringScale,
          opacity: ringOpacity,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
}
