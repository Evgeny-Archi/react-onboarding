import { useEffect, useRef } from 'react';

const usePrevious = <T>(value: T): T => {
    const prevImgId = useRef<T>();

    useEffect(() => {
        prevImgId.current = value;
    }, [value]);

    return prevImgId.current as T;
};

export default usePrevious;
