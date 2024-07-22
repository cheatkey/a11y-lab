import React, { useState } from "react";

interface ExpandedProps {}

const Expanded = ({}: ExpandedProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpansion = () => setIsExpanded(!isExpanded);

  return (
    <div className="p-10">
      <button aria-expanded={isExpanded} onClick={toggleExpansion}>
        {isExpanded ? "접기" : "펼치기"}
      </button>
      {isExpanded && (
        <div className="mt-4 p-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      )}
    </div>
  );
};

export default Expanded;
