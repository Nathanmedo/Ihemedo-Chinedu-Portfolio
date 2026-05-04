

import { useState, useEffect } from "react";

export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    if (window == undefined) return;

    const visibleSections = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries);

        // Process entries that are ENTERING first
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id);
          }
        });

        // Then process entries that are LEAVING
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            visibleSections.delete(entry.target.id);
          }
        });

        console.log("Visible sections:", Array.from(visibleSections));

        if (visibleSections.size > 0) {
          setActive(Array.from(visibleSections)[0]);
        } else {
          setActive(null);
        }
      },
      {
        threshold: 0,
        rootMargin: "-20% 0px 0px 0px",
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      console.log(el);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}
