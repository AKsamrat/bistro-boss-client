import React from 'react';
import SectionTitle from '../../Component/SectionTitle';
import featured from '../../assets/home/featured.jpg';
import './Featureds.css';
// import Featured from './Featured';

const Featured = () => {
  return (
    <div className="featured-item text-slate-100   my-20 bg-fixed">
      <div className="bg-[#15151587]">
        <div className="pt-10">
          <SectionTitle
            subHeading={'Check it out'}
            heading={'FROM OUR MENU'}
          ></SectionTitle>
        </div>
        <div className="flex justify-center items-center gap-10 pb-20 pt-12  text-slate-100 max-w-7xl mx-auto mt-5 px-4">
          <div>
            <img src={featured} alt="" />
          </div>
          <div>
            <p>March 20, 2023</p>
            <h1>WHERE CAN I GET SOME?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <div className=" capitalize mt-16">
              <button className="px-6 py-3 rounded-xl border-b-2 border-[#1F2937] hover:bg-[#151515] capitalize font-bold">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
