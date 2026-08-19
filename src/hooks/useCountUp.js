import { useEffect, useRef, useState } from "react";

export default function useCountUp(target, isActive, duration = 1800) {
  const [value, setValue] = useState(0);
  const frame = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (!isActive || started.current) return;
    started.current = true;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
    return () => frame.current && cancelAnimationFrame(frame.current);
  }, [isActive, target, duration]);

  return value;
}
