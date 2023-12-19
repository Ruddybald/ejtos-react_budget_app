
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, remaining, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    
    const handleBudgetChange = (event) => {

        var newBudget1=event.target.value;
        if(newBudget1 > 20000) {
            alert("The budget cannot exceed 20000");
            return;
        } 

        if(newBudget1 < (newBudget-remaining)) {
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }

        setNewBudget(newBudget1);

        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget1
        });
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;