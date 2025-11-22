"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    const links = document.querySelectorAll("a[href^='#']");

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();

        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      });
    });
  }, []);

  return null;
}
