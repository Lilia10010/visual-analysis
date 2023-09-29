import { AiOutlineDashboard } from "react-icons/ai";
import { BsDiagram2 } from "react-icons/bs";
import { GiGhost } from "react-icons/gi";
import { RiGhostSmileLine } from "react-icons/ri";
import { TbHomeStats } from "react-icons/tb";
import { useState } from "react";
export const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="w-20 h-full">
      <div
        className="w-20 h-full bg-tertiary dark:bg-secondary-dark"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-col justify-between h-full items-center w-full">
          <div className="flex flex-col gap-4 items-center text-white text-2xl w-full px-2 mt-14">
            <div>
              <TbHomeStats />
            </div>
            <div className="border-t border w-full"></div>

            <div>
              <AiOutlineDashboard />
            </div>
            <div>
              <BsDiagram2 />
            </div>
          </div>
          <div className="flex items-end justify-center w-full h-24 pb-4 hover:animate-bounce">
            {isHovered ? (
              <GiGhost className="text-white text-2xl" />
            ) : (
              <RiGhostSmileLine className="text-white text-2xl" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
