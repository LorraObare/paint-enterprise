// components/Counter.jsx
import { useEffect, useRef, useState } from "react";

function Counter({ target, label, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const observer = useRef();

  useEffect(() => {
    const animate = () => {
      let start = 0;
      const increment = target / (duration / 16); // ~60fps
      const update = () => {
        start += increment;
        if (start < target) {
          setCount(Math.ceil(start));
          requestAnimationFrame(update);
        } else {
          setCount(target);
        }
      };
      update();
    };

    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
        } else {
          setCount(0); // reset on scroll away
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.current.observe(ref.current);

    return () => {
      if (ref.current) observer.current.unobserve(ref.current);
    };
  }, [target, duration]);

  return (
    <div ref={ref}>
      <h4>{count}+</h4>
      <p>{label}</p>
    </div>
  );
}

export default Counter;
