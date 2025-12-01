import React, { useId } from 'react'

function UseInput({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    selectedCurrency = 'usd',
    currencyOptions = [],
    amountDisable = false,

}) {

    return (
        <div className='d-flex justify-content-between align-item-center bg-white rounded-3 p-4 w-75 w-sm-100 mx-auto'>
            <div className='d-flex flex-column text-left w-50'>
                <label htmlFor="" className='fs-4 text-start fw-bold inline-block mb-2 owncss'> {label} </label>
                <input
                    id=""
                    className='form-control fs-4 w-75'
                    type="number"
                    placeholder='Amount'
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}

                />
            </div>

            <div className='w-50 d-flex flex-wrap justify-content-end text-end'>
                <label htmlFor="" className='fs-4 fw-bold inline-block mb-2 owncss'>Currency Input</label>
                <select name="" id=""
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    value={selectedCurrency}
                    className='form-select fs-4 w-50'
                >
                    {currencyOptions.map((currency) =>
                        <option
                            key={currency}
                            value={currency}>
                            {currency}
                        </option>)}
                </select>
            </div>


        </div>
    )
}

export default UseInput
