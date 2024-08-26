import React from 'react';
import MenueCard from '../../Shared/MenueCard';
import { Link } from 'react-router-dom';

const ManuCategory = ({ items, title }) => {
  return (
    <div className="max-w-7xl mx-auto my-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
        {items?.map(item => (
          <MenueCard key={item._id} item={item}></MenueCard>
        ))}
      </div>
      <div className="flex justify-center items-center uppercase pb-10">
        <Link to={`/order/${title}`}>
          <button
            className="px-6 py-4 rounded-xl hover:text-white hover:bg-[#151515] border-b-2 
        border-[#1F2937] uppercase font-bold"
          >
            order your favourite food
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ManuCategory;
