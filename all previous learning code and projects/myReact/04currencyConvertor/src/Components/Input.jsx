import React, { useId } from 'react'
function Input({
    lable,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,

}) {

    const amountInput = useId()

    return (
        <div className="d-flex jsutify-content-between w-75 mx-auto mb-2 border  bg-white rounded-3 shadow p-4">

            <div className='d-flex flex-column w-50 '>
                <label htmlFor={amountInput} className='text-black fs-4 fw-bold inline-block mb-2 ownCss'>
                    {lable}
                </label>
                <input type="Number"
                    className='form-control outline-none bg-transparent py-2 px-3 '
                    placeholder='Amount'
                    disabled={amountDisable}
                    value={amount}
                    id={amountInput}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} />
            </div>

            <div className='w-50 d-flex flex-wrap justify-content-end text-end'>
                <p className='text-black fs-4 disable fw-bold mb-2 w-100 ownCss'>Currency Type</p>
                <select className='form-select w-50'
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}>
                    {currencyOption.map((currency) =>
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    )}
                </select>
            </div>

        </div>
    )
}

export default Input
