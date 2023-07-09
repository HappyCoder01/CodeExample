import React, {useState, useEffect, useRef} from 'react';

function useStateWithCallback(state, fn) {
    const fnRef = useRef(null);
    if (fn) {
        fnRef.current = fn;
    }

    const [data, setData] = useState(state);
    useEffect(() => {
        if (typeof fnRef.current === 'function') {
            fnRef.current(data)
        }
    }, [data]);

    return [data, function (value, callback) {
        if (callback) {
            fnRef.current = callback;
        }
        setData(value);
    }]
}