import { useEffect, useState } from 'react';

function useLocalStorage(key, defaultValue) {
    const [data, setData] = useState(() => {
        const savedData = localStorage.getItem(key);

        if (savedData) {
            return JSON.parse(savedData);
        }

        localStorage.setItem(key, JSON.stringify(defaultValue));

        return defaultValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(data));
    }, [key, data]);

    return [data, setData];
}

export default useLocalStorage;
