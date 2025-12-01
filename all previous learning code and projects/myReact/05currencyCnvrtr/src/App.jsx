import { useEffect, useState } from 'react'
import UseInput from './Components/useInput'
import usefetchedCurrencyInfo from './hooks/usefetchedCurrencyInfo'
function App() {

  const [amountFrom, setAmountFrom] = useState(0);
  const [amountTo, setAmountTo] = useState(0);
  const [currencyFrom, setCurrencyFrom] = useState('pkr');
  const [currencyTo, setCurrencyTo] = useState('inr');
  const [options, setOptions] = useState([]);

  const usefetchInfo = usefetchedCurrencyInfo(currencyFrom);

  let arr = usefetchInfo[currencyFrom]
  console.log(arr)

  useEffect(() => {
    if (usefetchInfo && usefetchInfo[currencyFrom]) {
      setOptions(Object.keys(usefetchInfo[currencyFrom]))
    }
  }, [currencyFrom, usefetchInfo])

  const convert = () => {
    let rate = usefetchInfo[currencyFrom][currencyTo] || 1;
    setAmountTo((amountFrom * rate).toFixed(2))
  }

  const Swap = () => {
    setAmountFrom(amountTo)
    setAmountTo(amountFrom)
    setCurrencyFrom(currencyTo)
    setCurrencyTo(currencyFrom)
  }

  return (
    <>
      <h1 className='fs-1 fw-bold text-primary text-center mt-5 '>Currency Convertor!</h1>
      <div className='position-relative p-4 w-50 rounded-3 mx-auto mt-4 main-box'>
        <form onSubmit={(e) => {
          e.preventDefault();
          convert()
        }}
        >

          <div className='mb-3'>
            <UseInput
              label='From'
              amount={amountFrom}
              selectedCurrency={currencyFrom}
              currencyOptions={options}
              onAmountChange={(amount) => setAmountFrom(amount)}
              onCurrencyChange={(currency) => setCurrencyFrom(currency)}
            />
          </div>

          <div>
            <button
              type='button'
              onClick={Swap}
              className='btn btn-primary position-absolute swap-btn fs-5'>Swap</button>
          </div>

          <div>
            <UseInput
              label='To'
              amount={amountTo}
              selectedCurrency={currencyTo}
              currencyOptions={options}
              onCurrencyChange={(currency) => setCurrencyTo(currency)}
              amountDisable

            />
          </div>

          <div className='w-75 mx-auto'>
            <button className='btn btn-primary w-100 fs-3 my-3 '>Convert USD to PKR</button>
          </div>

        </form>
      </div>
    </>
  )
}

export default App
