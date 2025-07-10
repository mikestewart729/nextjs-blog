'use client';

import { useTheme } from "next-themes";
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThemeSwitcher = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;
    return (
        <div>
            <button
                onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
                type="button"
                className="flex p-2 items-center justify-center"
            >
                <FontAwesomeIcon icon={faMoon} className="dark:hidden" />
                <FontAwesomeIcon icon={faSun} className="hidden dark:block"/>
            </button>
        </div>
    );
};

export default ThemeSwitcher;