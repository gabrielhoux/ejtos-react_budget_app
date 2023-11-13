import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;
        // Dispatch a CHG_CURRENCY action to update the currency in the context
        dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
    }

    return (
        <div className='alert alert-success'>
            <select className="custom-select" onChange={handleCurrencyChange} value={currency}>
                <option value="" disabled>Currency ({currency})</option> {/* Placeholder */}
                <option value="$">Dollar ($)</option>
                <option value="£">Pound (£)</option>
                <option value="€">Euro (€)</option>
                <option value="₹">Rupee (₹)</option>
            </select>
        </div>
    );
};

export default Currency;
