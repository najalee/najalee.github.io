import { useState, useEffect } from "react";


const useTypingAnimation = (title, initialDelay = 500, typingDelay = 200) => {
    const [typedTitle, setTypedTitle] = useState("".padEnd(1, ">"));
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        const typingDelay = 100;
        const initialDelay = 300;
        let currentIndex = 0;
        let timeoutId;

        const typeNextCharacter = () => {
            setTypedTitle((prevTitle) => {
            const nextChar = title[currentIndex];
            currentIndex++;
            return prevTitle + nextChar;
        });

        if (currentIndex < title.length - 1) {
            timeoutId = setTimeout(typeNextCharacter, typingDelay);
        } else {
            setShowCursor((prevShowCursor) => !prevShowCursor);
        }
    };

    timeoutId = setTimeout(typeNextCharacter, initialDelay);

    return () => {
        clearTimeout(timeoutId);
    };
    }, []);

    useEffect(() => {
    const cursorBlinkInterval = setInterval(() => {
        setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 300);

    return () => {
        clearInterval(cursorBlinkInterval);
    };
    }, [])

    return { typedTitle, showCursor };
};

export default useTypingAnimation;
