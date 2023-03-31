import React from 'react';
import gif from './loader.gif';
import { toFixed } from './utils/toFixed';

const Header = ({ currency }) => {
  return (
    <header className="py-10 bg-slate-200 ">
      <div className="wrapper max-w-[1440px] px-10">
        <div className="flex justify-between tablet:flex-col tablet:items-center tablet:gap-2">
          <div className="font-bold text-xl">Currency Calc App</div>
          <div className="flex gap-10">
            <span className="text-green-600 font-bold text-xl flex items-center  min-w-[160px]">
              USD:{' '}
              {currency.length ? (
                <span>{toFixed(currency[0].rate, 2)} UAH</span>
              ) : (
                <img src={gif} className="w-[16px] h-[16px] ml-5" alt="" />
              )}
            </span>
            <span className="text-blue-600 font-bold text-xl flex items-center  min-w-[160px]">
              EUR:{' '}
              {currency.length ? (
                <span>{toFixed(currency[1].rate, 2)} UAH</span>
              ) : (
                <img src={gif} className="w-[16px] h-[16px] ml-5" alt="" />
              )}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
