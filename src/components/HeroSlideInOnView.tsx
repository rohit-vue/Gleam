"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type HTMLAttributes,
} from "react";

type HeroSlideInOnViewProps = {
  as?: ElementType;
  children: React.ReactNode;
  wrapperClassName?: string;
  className?: string;
  innerProps?: HTMLAttributes<HTMLElement>;
};

export function HeroSlideInOnView({
  as: Tag = "div",
  children,
  wrapperClassName = "",
  className = "",
  innerProps,
}: HeroSlideInOnViewProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisible(true);
      return;
    }

    const el = rootRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setVisible(true);
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const motionStyle = visible
    ? { transform: "translateX(0)", opacity: 1 }
    : { transform: "translateX(calc(-100vw - 2rem))", opacity: 0 };

  return (
    <div
      ref={rootRef}
      className={`${wrapperClassName}`.trim()}
    >
      <Tag
        {...innerProps}
        style={motionStyle}
        className={`inline-block w-full will-change-transform motion-reduce:translate-x-0 motion-reduce:opacity-100 motion-reduce:transition-none transition-[transform,opacity] duration-[2200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${className}`.trim()}
      >
        {children}
      </Tag>
    </div>
  );
}
