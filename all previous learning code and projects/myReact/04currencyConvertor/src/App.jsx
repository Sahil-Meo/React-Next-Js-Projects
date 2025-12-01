import { useEffect, useState } from 'react';
import Input from './Components/Input';
import './index.css';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amountFrom, setAmountFrom] = useState(0); // State for 'From' input
  const [amountTo, setAmountTo] = useState(0);    // State for 'To' input
  const [from, setFrom] = useState('usd');        // Selected 'From' currency
  const [to, setTo] = useState('pkr'); 
  const [options, setOptions] = useState([])         // Selected 'To' currency

  const currencyInfo = useCurrencyInfo(from);

  useEffect(() => {
    if (currencyInfo && currencyInfo[from]) {
      // Dynamically set the currency options based on the selected 'from' currency
      setOptions(Object.keys(currencyInfo[from]));
    } else {
      setOptions([]); // Fallback in case no data is found for selected currency
    }
  }, [currencyInfo, from]);

  // const options = currencyInfo.[]? Object.keys(currencyInfo.usd) : [];

  const convert = () => {
    // Convert the 'From' amount to the 'To' amount using the exchange rate
    const rate = currencyInfo[from][to] || 1; // Default rate to 1 if not available
    setAmountTo(amountFrom * rate);
  };

  const swap = () => {
    // setFrom((prevFrom) => {
    //   setTo(prevFrom); // Swap the 'From' and 'To' currencies
    //   return to;
    // });
    setFrom(to)
    setTo(from)
    setAmountFrom(amountTo); // Update the 'From' amount with the 'To' amount
    setAmountTo(amountFrom); // Update the 'To' amount with the 'From' amount
  };

  return (
    <>
      <h1 className="text-center text-primary fw-bold mt-5 mb-3">Currency Converter!</h1>
      <div className="container w-50 position-relative rounded-2 p-4 main-box">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert(); // Perform conversion on form submit
          }}
        >
          {/* From Input */}
          <Input
            lable="From"
            amount={amountFrom}
            currencyOption={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
            onAmountChange={(amount) => setAmountFrom(amount)}
          />

          {/* Swap Button */}
          <div>
            <button
              type="button"
              onClick={swap}
              className="btn btn-primary center-btn position-absolute swap"
            >
              Swap
            </button>
          </div>

          {/* To Input */}
          <Input
            lable="To"
            amount={amountTo}
            currencyOption={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisable
          />

          {/* Convert Button */}
          <div className="w-75 mx-auto my-3">
            <button className="btn btn-primary w-100 fs-3">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
