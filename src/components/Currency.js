import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

import '../currency-select.css';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    //const [newCurrency, setNewCurrency] = useState('$');
    
    const handleCurrencyChange = (e) => {

        var newCurrency2=e.target.value;
       // console.log("newCurrency2" + newCurrency2);

        //setNewCurrency(newCurrency2);

        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency2
        });
    }
    return (
<div>

<label>
Currency ({currency}) : 
        <select
            name="currencies" 
            class="currency-select" 
            id="currency-select"
            defaultValue={currency}
            //value={newCurrency}
            onChange={handleCurrencyChange}
        >
            <option value='$'>$ Dollar</option>
            <option value='£'>£ Pound</option>
            <option value='€'>€ Euro</option>
            <option value='₹'>₹ Ruppee</option>
        </select>
</label>
</div>
    );
};
export default Currency;