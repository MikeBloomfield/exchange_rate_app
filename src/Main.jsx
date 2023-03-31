import React, { useState } from 'react';
import { FaEquals } from 'react-icons/fa';
import CurrencyItem from './CurrencyItem';
import { toFixed } from './utils/toFixed';

const Main = ({ currency }) => {
  const rates = currency.reduce((obj, item) => {
    obj[item.cc] = item.rate;
    return obj;
  }, {});

  const [first, setFirst] = useState('USD');
  const [second, setSecond] = useState('UAH');
  const [amountOne, setAmountOne] = useState(1);
  const [amountTwo, setAmountTwo] = useState(toFixed(rates.USD, 2));

  const onChangeCurrencyOne = (event) => {
    setFirst(event);
    setAmountTwo(toFixed((amountOne * rates[event]) / rates[second], 2));
  };
  const onChangeCurrencyTwo = (event) => {
    setSecond(event);
    setAmountOne(toFixed((amountTwo * rates[event]) / rates[first], 2));
  };
  const onChangeAmountOne = (event) => {
    setAmountOne(event);
    setAmountTwo(toFixed((event * rates[first]) / rates[second], 2));
  };
  const onChangeAmountTwo = (event) => {
    setAmountTwo(event);
    setAmountOne(toFixed((event * rates[second]) / rates[first], 2));
  };

  return (
    <main>
      <div className="max-w-[1440px] px-10">
        <div className="flex tablet:flex-col tablet:items-center gap-10 mx-auto justify-center items-center">
          <CurrencyItem
            active={first}
            amount={amountOne}
            list={currency}
            onChangeCurrency={onChangeCurrencyOne}
            onChangeAmount={onChangeAmountOne}
          />
          <FaEquals />
          <CurrencyItem
            active={second}
            amount={amountTwo}
            list={currency}
            onChangeCurrency={onChangeCurrencyTwo}
            onChangeAmount={onChangeAmountTwo}
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
