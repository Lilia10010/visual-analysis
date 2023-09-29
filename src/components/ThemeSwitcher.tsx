import { BsMoonStars, BsSun } from "react-icons/bs";
import { useEffect, useState } from "react";
export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="theme-switch-wrapper">
      <label title="Mudar tema" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            className="sr-only"
            checked={theme === "dark"}
            onChange={() => {
              theme === "dark" ? setTheme("light") : setTheme("dark");
            }}
          />
          <div
            className={` ${
              theme === "dark" ? "bg-[#1e6586]" : "bg-[#FAE9B1]"
            }  block w-10 h-6 rounded-full `}
          ></div>
          <div
            className={`${
              theme === "dark" ? "translate-x-4 bg-[#25AFEE]" : "bg-[#F2C138]"
            } w-6 h-6 rounded-full transition-transform flex items-center justify-center absolute top-0 left-0 transform`}
          >
            {theme === "dark" ? (
              <BsMoonStars className="w-4 h-4 text-white" />
            ) : (
              <BsSun className="w-4 h-4 text-white" />
            )}
          </div>
        </div>
      </label>
    </div>
  );
};
