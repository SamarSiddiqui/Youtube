import React from 'react';

const Button = ({ title }) => {
  return (
    <button className="bg-gray-300/70 flex-shrink-0 px-4 mx-2 rounded-lg w-auto hover:bg-gray-400/50 ">
      {title}
    </button>
  );
};

export default Button;
