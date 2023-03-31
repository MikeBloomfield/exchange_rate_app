import React from 'react';

const CurrencyItem = ({ active, onChangeCurrency, list, amount, onChangeAmount }) => {
  return (
    <div className="flex gap-2">
      <input
        type="number"
        value={amount}
        onChange={(event) => onChangeAmount(event.target.value)}
        className="px-5 border-slate-400 text-[30px] tablet:text-[16px] rounded-md border-[1px]"
      />
      <select
        name=""
        id=""
        value={active}
        onChange={(event) => onChangeCurrency(event.target.value)}>
        {list.map((item) => (
          <option value={item.cc} key={item.cc}>
            {item.cc}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyItem;
