import React from 'react';

function CardFront(props) {
  const { cardholderName, cardNumber, expMonth, expYear } = props;
  return (
    <div className=" w-80 h-44 rounded-lg bg-[url('/assets/bg-card-front.png')] bg-cover flex p-6 flex-col mr-0">
      <div className="flex items-center mr-0">
        <span className="w-8 h-8 bg-white rounded-full"></span>
        <span className="w-4 h-4 ml-2 bg-transparent border-white border-2 rounded-full"></span>
      </div>
      <div className="justify-end items-center flex flex-col h-full text-white">
        <p className="text-xl m-0 mb-3 tracking-widest flex justify-center w-full">
          <span>{cardNumber === '' ? '0000 0000 0000 0000' : cardNumber}</span>
        </p>
        <div className="flex justify-between w-full text-xs">
          <p>
            {cardholderName === ''
              ? 'JANE APPLESEED'
              : cardholderName.toUpperCase()}
          </p>
          <p>
            {expMonth === '' ? '00' : expMonth}/
            {expYear === '' ? '00' : expYear}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardFront;
