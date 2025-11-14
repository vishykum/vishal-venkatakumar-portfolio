//Function to listen to when a user clicks outside ref element

import { useEffect } from "react";

function useClickOutside(
    ref: React.RefObject<HTMLElement | null>,
    callback: () => void
) {
    useEffect(() => {
        function handleClick(event: MouseEvent | TouchEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        }

        document.addEventListener("mousedown", handleClick);
        document.addEventListener("touchstart", handleClick);
        
        return () => {
            document.removeEventListener("mousedown", handleClick);
            document.removeEventListener("touchstart", handleClick);
        };
    }, [ref, callback]);
}

export default useClickOutside;