import React from 'react';
import ContentLoader from "react-content-loader";

const PizzaBlockSkeleton: React.FC = () => {
    return (
        <ContentLoader
            speed={1.3}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ffdf8c"
        >
            <circle cx="136" cy="119" r="112" />
            <rect x="7" y="295" rx="6" ry="6" width="257" height="64" />
            <rect x="137" y="372" rx="20" ry="20" width="131" height="49" />
            <rect x="5" y="251" rx="6" ry="6" width="262" height="31" />
            <rect x="10" y="372" rx="6" ry="6" width="74" height="49" />
        </ContentLoader>
    );
};

export default PizzaBlockSkeleton;
