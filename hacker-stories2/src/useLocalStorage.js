import { useState, useEffect } from "react";

// Custom hook, that encapsulates the useState and useEffect as well as logic
// to store the searchValue in local storage and retrieve it upon returning to the page
function useLocalStorage(key, initialState) {
    const [value, setValue] = useState(localStorage.getItem(key) ?? initialState);

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [value, key]);

    return [value, setValue];
}

export default useLocalStorage;
