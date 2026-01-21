import React from 'react';
import PricingFeature from '../PricingFeature/PricingFeature';

const PricingCard = ({ pricing }) => {
    const { name, price, description, features = [] } = pricing;

    return (
        <article className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col gap-4">
            <div className="space-y-1">
                <p className="text-sm uppercase tracking-wide text-indigo-500 font-semibold">{name}</p>
                <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">${price}</span>
                    <span className="text-sm text-gray-500">/month</span>
                </div>
                <p className="text-gray-600">{description}</p>
            </div>

            <ul className="space-y-2 text-sm text-gray-700">
                {features.map((feature, idx) => (
                    <PricingFeature key={`${name}-feature-${idx}`} feature={feature} />
                ))}
            </ul>

            <button className="mt-auto inline-flex items-center justify-center rounded-full bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Start plan
            </button>
        </article>
    );
};

export default PricingCard;