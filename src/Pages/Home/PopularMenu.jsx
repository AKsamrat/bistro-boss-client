import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Component/SectionTitle';
import Category from './Category';
import MenueCard from '../../Shared/MenueCard.jsx';
import useMenu from '../../Hooks/UseMenu.jsx';

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItems = menu.filter(item => item.category === 'popular');
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch('menu.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       const popularItems = data.filter(item => item.category === 'popular');
  //       setMenu(popularItems);
  //     });
  // }, []);
  return (
    <div className="max-w-7xl mx-auto mt-16 px-4">
      <SectionTitle
        subHeading={'Check it out'}
        heading={'FROM OUR MENU'}
      ></SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
        {popularItems.map(item => (
          <MenueCard key={item._id} item={item}></MenueCard>
        ))}
      </div>
      <div className="flex justify-center items-center capitalize">
        <button className="px-6 py-4 rounded-xl hover:text-white hover:bg-[#151515] border-b-2 border-[#1F2937] capitalize font-bold">
          VIEW FULL MENU
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
