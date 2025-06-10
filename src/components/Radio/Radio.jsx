import React, { useEffect, useRef, useState } from "react";
import RadioPng from "../../img/rad.png"; // Імпортуємо зображення платівки
import "./radio.css"; // Імпортуємо CSS файл для стилізації

const Radio = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const iframeRef = useRef(null);
    const widgetRef = useRef(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://w.soundcloud.com/player/api.js";
        script.onload = () => {
            // @ts-ignore
            const SC = window.SC; // або (window as any).SC якщо TS
            widgetRef.current = SC.Widget(iframeRef.current);
            // @ts-ignore
            widgetRef.current.bind(SC.Widget.Events.PLAY, () => {
                setIsPlaying(true);
            });
            // @ts-ignore
            widgetRef.current.bind(SC.Widget.Events.PAUSE, () => {
                setIsPlaying(false);
            });
        };
        document.body.appendChild(script);
    }, []);

    const togglePlay = () => {
        if (widgetRef.current) {
            widgetRef.current.toggle();
        }
    };

    return (
        <div className={`vinyl-widget ${isPlaying ? "active" : ""}`}>
            <img
                src={RadioPng}
                alt="Bedoin Vinyl"
                className={`vinyl ${isPlaying ? "spinning" : ""}`}
                onClick={togglePlay}
            />

            <div className={`vinyl-btns ${isPlaying ? "show" : ""}`}>
                <div>
                    <button onClick={() => widgetRef.current?.next()}>⏭</button>
                </div>
                <div>
                    <button onClick={() => widgetRef.current?.prev()}>⏮</button>
                </div>
            </div>

            <iframe
                ref={iframeRef}
                title="Bedoin Radio"
                width="0"
                style={{ display: "none" }}
                height="0"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/2019591975&auto_play=false&show_teaser=false"
            ></iframe>
        </div>
    );
};

export default Radio;
