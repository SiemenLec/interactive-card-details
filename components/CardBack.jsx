import React from 'react';

function CardBack(props) {
  return (
    <div className="w-80 h-44 rounded-lg bg-[url('/assets/bg-card-back.png')] bg-cover flex p-6 flex-col">
      <p className="relative text-white  left-56 top-12 tracking-widest w-fit">
        {props.cvc === '' ? '* * *' : props.cvc}
      </p>
    </div>
  );
}

export default CardBack;
