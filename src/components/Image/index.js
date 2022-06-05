import classNames from "classnames";
import { forwardRef, useState } from "react";

import images from "~/assets/images";
import styles from "./Image.module.scss";

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallBack] = useState('');
    const handleError = function () {
        setFallBack(customFallback);
    }

    return (
        <img
            className={classNames(styles.wrapper, className)}
            {...props}
            src={fallback || src}
            alt={alt}
            ref={ref}
            onError={handleError}
        />
    );
})

export default Image;