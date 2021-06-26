import { useEffect, useRef } from "react";

export const Header = () => {

    useEffect(() => {
        if (localStorage.getItem('countriesAppThemeColor')) {
            const theme = localStorage.getItem('countriesAppThemeColor');
            const $root = document.documentElement;
            $root.className = theme;
        }
    }, []);

    const changeThemeColorRef = useRef();

    const changeThemeColor = () => {
        const $root = document.documentElement;
        $root.classList.toggle('dark-theme');
        $root.classList.toggle('light-theme');
        localStorage.setItem('countriesAppThemeColor', $root.className);
    }

    return (
        <header className="header">
            <div className="header__inner">
                <h1 className="header__title">Where in the world?</h1>
                <div className="header__text" ref={changeThemeColorRef} onClick={changeThemeColor} >
                    Dark Mode
                </div>
            </div>
        </header>
    )
}
