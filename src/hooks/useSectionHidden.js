import { useEffect, useState } from "react";

function useSectionHidden(ref = [], options, classList = []) {
  const [isVisible, setIsVisible] = useState(false);
  function revealSection(entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.remove(classList[0]);
    setIsVisible(entry.isIntersecting);
  }
  useEffect(() => {
    const observer = new IntersectionObserver(revealSection, options);
    let isNotNull = ref[0].current !== null;
    if (!isNotNull) {
      isNotNull = true;
      return;
    }
    ref.forEach((current) => {
      current.current.classList.add(classList[0]);
      observer.observe(current.current);
    });
    return () => {
      if (isNotNull) {
        ref.forEach((current) => {
          if (current.current !== null) {
            observer.unobserve(current.current);
          }
        });
      }
    };
  }, [ref, options, classList]);
  return { isVisible };
}

export default useSectionHidden;
