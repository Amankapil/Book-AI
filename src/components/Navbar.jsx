// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import "./style.css";
export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, [darkMode]);

  const ToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  let [width, setWidth] = useState(window.innerWidth);
  let [active, setactive] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });

  const hamburger = () => {
    setactive(!active);
    // document.body.style.overflow = "hidden";
  };
  const ToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {width <= 900 ? (
        <nav>
          <div class=" mobile navbar flex items-center justify-between mx-12 -full relative min-[1700px]:mx-20 pt-2">
            <div className="text-xl font-bold text-gray-900 dark:text-white">
              <div class="logo">
                <div class="logo-icon"></div>
                <img
                  src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/logo.png"
                  width="50px"
                  alt="BookAI Logo"
                />
                BookAI
              </div>
            </div>
            <>
              <div
                class={`lists flex items-center justify-between flex-col z-[9999999999999999999] ${
                  active ? "active " : ""
                }`}
              >
                <div class="ul mr16  z-[9999999999999999999]">
                  <ul className="navbar-nav me-auhref flex gap-5 flex-col text-gray-900 dark:text-white font-semibold font-">
                    <li className="nav-item dropdown">
                      <a className="nav-a text- hover:text-[#4672b1]" href="/">
                        Features
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-a hover:text-[#4672b1] t" href="/">
                        How It Works
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-a hover:text-[#4672b1]" href="/">
                        Roadmap
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-a hover:text-[#4672b1]" href="/">
                        API
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-a hover:text-[#4672b1]" href="/">
                        Price
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-a hover:text-[#4672b1]" href="/">
                        Models
                      </a>
                    </li>
                  </ul>
                </div>
                <buthrefn
                  onClick={ToggleDarkMode}
                  className="font-bold bg-gradient-to-r from-[#726bff] to-[#57b6fe] p-2 rounded  text-white cursor-pointer"
                >
                  Toggle {darkMode ? "Dark" : "Light"} Mode
                </buthrefn>
              </div>
            </>
            {/* ) : ( */}
            <button className="btn-ham" onClick={hamburger}>
              {active ? "X" : "||"}
              ||
            </button>
            {/* )} */}
          </div>
        </nav>
      ) : (
        <nav className=" p-4 max-w-6xl mx-auto -md">
          <div className="container mx-auhref flex justify-between items-center">
            <div className="text-xl font-bold text-gray-900 dark:text-white">
              <div class="logo flex items-center gap-2">
                <div class="logo-icon"></div>
                <img
                  src="https://raw.githubusercontent.com/adarshagupta/trybookai/main/logo.png"
                  width="50px"
                  alt="BookAI Logo"
                />
                BookAI
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="" id="navbarNav">
                <ul className="navbar-nav me-auhref flex gap-5 text-gray-900 dark:text-white font-semibold font-">
                  <li className="nav-item dropdown">
                    <a className="nav-a text- hover:text-[#4672b1]" href="/">
                      Features
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-a hover:text-[#4672b1] t" href="/">
                      How It Works
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-a hover:text-[#4672b1]" href="/">
                      Roadmap
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-a hover:text-[#4672b1]" href="/">
                      API
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-a hover:text-[#4672b1]" href="/">
                      Price
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-a hover:text-[#4672b1]" href="/">
                      Models
                    </a>
                  </li>
                </ul>
              </div>

              <buthrefn
                onClick={ToggleDarkMode}
                className="font-bold bg-gradient-to-r from-[#726bff] to-[#57b6fe] p-2 rounded-full  text-white cursor-pointer"
              >
                Toggle {darkMode ? "Dark" : "Light"} Mode
              </buthrefn>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
