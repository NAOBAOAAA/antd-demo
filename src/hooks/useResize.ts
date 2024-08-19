import {useCallback, useEffect, useState} from "react";
interface SizeObj {
    width: number,
    height: number
}

export default function useResize(callback: Function) {
    const [size, setSize] = useState<SizeObj>({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    });

    useEffect(() => {
        window.addEventListener('resize', sizeChanged);
        return () => {
            window.removeEventListener('resize', sizeChanged);
        }
    }, [])

    const sizeChanged = function sizeChanged() {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
        callback();
    }

    return size;

}