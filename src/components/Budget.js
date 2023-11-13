import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        const updatedBudget = event.target.value;

        // Alert if budget is set lower than current spending
        if (parseInt(updatedBudget) < totalExpenses) {
            alert("You cannot reduce the budget lower than the spending");
            return;
        }

        setNewBudget(updatedBudget);
        // Update budget in the context using the dispatch function
        dispatch({ type: 'SET_BUDGET', payload: updatedBudget });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span> {/* Display the currency symbol */}
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} />
        </div>
    );
};

export default Budget;
