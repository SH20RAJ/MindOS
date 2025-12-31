'use client';

import * as React from 'react';
import { motion, useSpring, useTransform, type SpringOptions } from 'motion/react';
import { useIsInView } from '@/hooks/use-is-in-view';

type CountingNumberProps = {
    number: number;
    duration?: number;
    delay?: number;
    suffix?: string;
    prefix?: string;
    decimals?: number;
    animateOnView?: boolean;
    animateOnViewOnce?: boolean;
    animateOnViewMargin?: string;
    className?: string;
    springOptions?: SpringOptions;
};

export function CountingNumber({
    number,
    duration = 2000,
    delay = 0,
    suffix = '',
    prefix = '',
    decimals = 0,
    animateOnView = false,
    animateOnViewOnce = true,
    animateOnViewMargin = '0px',
    className,
    springOptions,
}: CountingNumberProps) {
    const ref = React.useRef<HTMLSpanElement>(null);
    const { isInView } = useIsInView(ref, {
        inView: animateOnView,
        inViewOnce: animateOnViewOnce,
        inViewMargin: animateOnViewMargin as any, // Temporary fix for type mismatch
    });

    const [hasAnimated, setHasAnimated] = React.useState(false);
    const shouldAnimate = animateOnView ? isInView : true;

    const spring = useSpring(0, {
        stiffness: 100,
        damping: 30,
        ...springOptions,
    });

    const display = useTransform(spring, (latest) => {
        return prefix + latest.toFixed(decimals) + suffix;
    });

    React.useEffect(() => {
        if (shouldAnimate && !hasAnimated) {
            const timeout = setTimeout(() => {
                spring.set(number);
                if (animateOnViewOnce) {
                    setHasAnimated(true);
                }
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [shouldAnimate, hasAnimated, number, delay, spring, animateOnViewOnce]);

    return (
        <span ref={ref} className={className}>
            <motion.span>{display}</motion.span>
        </span>
    );
}
