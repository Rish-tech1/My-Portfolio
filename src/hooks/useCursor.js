import { useEffect, useState } from "react";

export function useCursor() {
    const [hasCursor, setHasCursor] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(hover: hover) and (pointer: fine)");

        const checkCursor = (e) => {
            setHasCursor(e.matches);
        };

        setHasCursor(mq.matches);

        mq.addEventListener("change", checkCursor);
        return () => mq.removeEventListener("change", checkCursor);
    }, []);

    return { hasCursor };
}