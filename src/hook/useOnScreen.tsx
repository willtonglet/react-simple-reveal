/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

export default function useOnScreen(
  ref: any,
  rootMargin = "0px",
  once?: boolean
) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (once) {
          if (entries[0].isIntersecting) {
            setIntersecting(true);
            observer.unobserve(ref.current);
          }
        } else {
          entries.forEach((entry) => setIntersecting(entry.isIntersecting));
        }
      },
      {
        rootMargin,
      }
    );
    if (ref.current) observer.observe(ref.current);

    return () => observer.unobserve(ref.current);
  }, []);

  return isIntersecting;
}
