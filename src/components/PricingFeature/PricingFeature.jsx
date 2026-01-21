import React from 'react';

const PricingFeature = ({ feature }) => {
    return (
        <li className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500 shrink-0" aria-hidden="true" />
            <span>{feature}</span>
        </li>
    );
};

export default PricingFeature;