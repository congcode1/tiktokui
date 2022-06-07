import { useEffect, useState } from "react";

function useDebound(value, delay) {
    const [_value, setValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setValue(value), delay);

        return () => clearTimeout(handler)
    }, [value])

    return _value;
}

export default useDebound;