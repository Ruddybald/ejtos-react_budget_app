
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

import '../currency-select.css';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    
    const handleCurrencyChange = (e) => {

        var newCurrency2=e.target.value;
        console.log("newCurrency2" + newCurrency2);

        setNewCurrency(newCurrency2);

        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency2
        });
    }
    return (
<div>
Currency3
 ({newCurrency}) : 
<select name="currencies" class="currency-select" id="currency-select" value={newCurrency} onchange={handleCurrencyChange}>
  <option value='$'>$ Dollar</option>
  <option value='£'>£ Pound</option>
  <option value='€'>€ Euro</option>
  <option value='₹'>₹ Ruppee</option>
</select>

</div>
    );
};
export default Currency;