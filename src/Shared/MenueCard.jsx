import React from 'react';

const MenueCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex justify-between items-start ">
      <img
        style={{ borderRadius: '0 200px 200px 200px' }}
        className="w-24 h-20"
        src={image}
        alt=""
      />
      <div className="pl-4 pb-4">
        <h3 className="uppercase">
          {name}-----------------------------------------{' '}
        </h3>
        <p className="font-md">{recipe}</p>
      </div>
      <p className="pr-8 text-yellow-600">${price}</p>
    </div>
  );
};

export default MenueCard;
