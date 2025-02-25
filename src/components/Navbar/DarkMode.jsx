import React, { useEffect, useState } from "react";
import light from "../../assets/website/light-mode-button.png";
import dark from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const element = document.documentElement;

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.remove("light");
    } else {
      element.classList.add("light");
      element.classList.remove("dark");
    }
  }, [theme]);

  const themeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div className="flex items-center justify-center">
        {theme === "light" ? (
          <img
            src={light}
            alt="light"
            className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
            onClick={themeToggle}
          />
        ) : (
          <img
            src={dark}
            alt="dark"
            className="w-12 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
            onClick={themeToggle}
          />
        )}
      </div>
    </>
  );
};

export default DarkMode;
