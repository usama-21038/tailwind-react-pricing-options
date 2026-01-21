import React, { useEffect, useState } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = () => {
    const [pricingData, setPricingData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let active = true; // guard against state updates after unmount

        fetch('/pricingData.json')
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to load pricing data');
                }
                return res.json();
            })
            .then((data) => {
                if (active) {
                    setPricingData(data);
                }
            })
            .catch((err) => {
                if (active) {
                    setError(err.message);
                }
            })
            .finally(() => {
                if (active) {
                    setLoading(false);
                }
            });

        return () => {
            active = false;
        };
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center py-10">
                <span className="loading loading-spinner loading-lg" aria-label="Loading pricing options" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-500 py-10">
                Unable to load pricing options: {error}
            </div>
        );
    }

    return (
        <section className="space-y-6 py-10">
            <header className="text-center space-y-2">
                <p className="text-sm font-semibold text-indigo-500">Memberships</p>
                <h2 className="text-4xl font-bold">Choose the plan that fits</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Straightforward pricing with all the essentials to keep you moving.
                </p>
            </header>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {pricingData.map((pricing) => (
                    <PricingCard key={pricing.id} pricing={pricing} />
                ))}
            </div>
        </section>
    );
};

export default PricingOptions;