import React from 'react'

export default function Wheater() {
    React.useEffect(() => {
        const head = document.querySelector("head");
        const script = document.createElement("script");

        script.setAttribute("src", './script.js');
        head.appendChild(script);

        return () => {
            head.removeChild(script);
        };
    }, []);
    return (
        <>
            <a className="weatherwidget-io" href="https://forecast7.com/ru/37d8267d60/kumkurgon/" data-label_1="КУМКУРГАН" data-label_2="Погода" data-icons="Climacons Animated" data-theme="original" data-basecolor="#144272" >КУМКУРГАН Погода</a>
        </>
    )
}
