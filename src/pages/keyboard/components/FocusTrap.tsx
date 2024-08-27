import React, { useEffect, useRef } from "react";

interface FocusTrapProps {
  children: React.ReactNode;
}

const FocusTrap = ({ children }: FocusTrapProps) => {
  const trapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleFocusTrap = (e: KeyboardEvent) => {
      if (e.key === "Tab" && trapRef.current) {
        const focusableElements = trapRef.current.querySelectorAll<HTMLElement>(
          "a[href], button, textarea, input, select, [tabindex]:not([tabindex='-1'])"
        );

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener("keydown", handleFocusTrap);

    return () => {
      document.removeEventListener("keydown", handleFocusTrap);
    };
  }, []);

  return <div ref={trapRef}>{children}</div>;
};

export default FocusTrap;
