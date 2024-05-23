import React, { useId } from 'react'
import PropTypes from 'prop-types'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    selectCurrency="usd",
    currencyOptions=[],
    amountDisabled= false,
    className="",
}) {

   const inputAmountId = useId()
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={inputAmountId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={inputAmountId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                    
                >
                   { currencyOptions.map((currency)=>(
                    <option key={currency}
                    value={currency}
                    >
                    {currency}
                </option>
                   ))}
                
                </select>
            </div>
        </div>
    );
        
    
}

InputBox.propTypes = {

}

export default InputBox