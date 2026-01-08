import React, { useEffect, useRef, useState } from 'react';

const RevealOnScroll = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Toggle visibility based on intersecting state
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.15, // Trigger when 15% of the element is visible
                rootMargin: '0px'
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className={`reveal-section ${isVisible ? 'is-visible' : ''}`}>
            {children}
        </div>
    );
};

export default RevealOnScroll;
