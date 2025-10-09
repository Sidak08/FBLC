"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

interface StatsProps {
  heading?: string;
  description?: string;
  link?: {
    text: string;
    url: string;
  };
  stats?: Array<{
    id: string;
    value: string;
    label: string;
  }>;
}

function AnimatedCounter({ value, duration = 2000 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);

  // Extract number from value string
  const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
  const prefix = value.match(/^[^0-9]*/)?.[0] || '';
  const suffix = value.match(/[^0-9]*$/)?.[0] || '';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * numericValue));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isVisible, numericValue, duration]);

  // Handle non-numeric values like "National"
  if (numericValue === 0) {
    return (
      <div ref={countRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-fblc-sky-blue">
        {isVisible ? value : ""}
      </div>
    );
  }

  return (
    <div ref={countRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-fblc-sky-blue">
      {prefix}{count}{suffix}
    </div>
  );
}

export function Stats({
  heading = "Our Journey Continues",
  description = "From a small chapter registration to becoming the only FBL Canada chapter with two subsidiaries, Brampton FBLC continues to set new standards in business education and student leadership development across Canada.",
  link = {
    text: "Join Our Community",
    url: "/join-us",
  },
  stats = [
    {
      id: "stat-1",
      value: "3",
      label: "Organizations United",
    },
    {
      id: "stat-2",
      value: "120+",
      label: "Students Reached",
    },
    {
      id: "stat-3",
      value: "National",
      label: "Impact",
    },
  ],
}: StatsProps) {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">{heading}</h2>
          <p className="text-white/80 max-w-4xl mx-auto text-base sm:text-lg px-4">{description}</p>
          <a
            href={link.url}
            className="flex items-center justify-center gap-1 font-bold hover:underline text-fblc-sky-blue mt-2 sm:mt-4 text-sm sm:text-base"
          >
            {link.text}
            <ArrowRight className="h-auto w-3 sm:w-4" />
          </a>
        </div>
        <div className="mt-8 sm:mt-12 lg:mt-14 grid gap-x-4 sm:gap-x-8 gap-y-8 sm:gap-y-12 grid-cols-1 sm:grid-cols-3 justify-items-center">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col gap-3 sm:gap-4 text-center w-full max-w-xs">
              <AnimatedCounter value={stat.value} />
              <div className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}