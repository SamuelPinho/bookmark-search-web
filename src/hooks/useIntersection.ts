import { RefObject, useEffect, useState } from "react";

export const useIntersection = (
  element: RefObject<HTMLElement>,
  rootMargin = "0px"
) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin }
    );

    let currentElement = element.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [element, rootMargin]);

  return isVisible;
};
