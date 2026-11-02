import { useEffect, useRef } from "react";

const CustomCursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);

    useEffect(() => {
        const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
        if (!finePointer) return undefined;

        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return undefined;

        const onPointerMove = (event) => {
            const position = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
            dot.style.transform = position;
            ring.style.transform = position;
            document.documentElement.classList.add("has-custom-cursor");
        };

        const onPointerOver = (event) => {
            const target = event.target;
            ring.classList.toggle(
                "is-hovering",
                target instanceof Element && Boolean(target.closest("a, button, [role='button']"))
            );
        };

        const onPointerLeave = () => document.documentElement.classList.remove("has-custom-cursor");

        window.addEventListener("pointermove", onPointerMove);
        window.addEventListener("pointerover", onPointerOver);
        window.addEventListener("pointerleave", onPointerLeave);

        return () => {
            document.documentElement.classList.remove("has-custom-cursor");
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("pointerover", onPointerOver);
            window.removeEventListener("pointerleave", onPointerLeave);
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
            <div ref={ringRef} className="custom-cursor-ring" aria-hidden="true" />
        </>
    );
};

export default CustomCursor;
