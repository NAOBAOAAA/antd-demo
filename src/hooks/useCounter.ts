import {useState} from "react";


export default function useCounter(initialValue: number) {
    const [value, setValue] = useState(initialValue);

    function plusCount() {
        setValue(value + 1);
    }
    function minusCount() {
        setValue(value - 1);
    }
    function resetCount() {
        setValue(initialValue);
    }
    return {value, plusCount, minusCount, resetCount};
}