import React, { useEffect, useState } from "react";
import "./Header.css"

import { GithubLogo, LinkedinLogo, Sun, Moon } from "phosphor-react";

export function Header() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function changeTheme() {
    theme == "dark" ? setTheme("light") : setTheme("dark");
  }

  return (
    <header className="w-full bg-zinc-200 dark:bg-zinc-800 p-8">
      <div className="max-w-[1500px] w-[90%] mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">
            Tier<span className="font-bold tracking-widest">List</span>✨
          </h1>
        </div>

        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-5">
          <button
            onClick={changeTheme}
            className="relative p-1 h-6 w-12 bg-slate-300 dark:bg-zinc-600 rounded-full"
          >
            {theme === 'dark'? 
            <Sun
              size={23}
              weight="bold"
              className="iconTheme"
            />
          : <Moon
          size={23}
          weight="bold"
          className="iconTheme animate"
          style={{right: `50%`}}
        />}

          </button>

          <ul className="flex items-center gap-2">
            <li>
              <a href="https://github.com/thiagooRocha" target="_blank">
                <GithubLogo
                  size={30}
                  weight="bold"
                  className="text-zinc-400 rounded-lg hover:text-zinc-700 dark:hover:text-zinc-100"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/thiagoo-rocha/"
                target="_blank"
              >
                <LinkedinLogo
                  size={30}
                  weight="bold"
                  className="text-zinc-400 rounded-lg hover:text-zinc-700 dark:hover:text-zinc-100"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
