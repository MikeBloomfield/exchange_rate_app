import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import axios from 'axios';
import gif from './loader.gif';

const App = () => {
  const [currencyList, setCurrencyList] = useState([]);

  const CURRENCY_URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(CURRENCY_URL);
      const filterData = data.filter((item) => item.cc === 'USD' || item.cc === 'EUR');
      const result = filterData.map(({ r030, txt, exchangedate, ...result }) => result);
      setCurrencyList([...result, { rate: 1, cc: 'UAH' }]);
    };
    getData();
  }, []);
  return (
    <>
      <Header currency={currencyList} />
      {currencyList.length ? (
        <Main currency={currencyList} />
      ) : (
        <img src={gif} className="w-[64px] h-[64px] mx-auto" alt="loader" />
      )}
      <Footer />
    </>
  );
};

export default App;
