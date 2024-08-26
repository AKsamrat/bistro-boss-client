import React from 'react';
import SectionTitle from '../../Component/SectionTitle';
import img from '../../assets/home/slide1.jpg';

const ChefRecomded = () => {
  return (
    <div className="max-w-7xl mx-auto mt-5 px-4 py-16">
      <SectionTitle
        subHeading={'Should Try'}
        heading={'CHEF RECOMMENDS'}
      ></SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-7">
        <div className="bg-[#F3F3F3]">
          <img className="w-full h-[400px]" src={img} alt="" />
          <div className="p-6">
            <h1 className="text-2xl font-semibold py-3 text-center">
              Caeser Salad
            </h1>
            <p className="text-center">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <div className=" uppercase mt-5 flex justify-center">
              <button className="px-6 py-3 rounded-xl text-[#BB8506] border-b-2 border-[#BB8506] capitalize font-bold hover:bg-[#151515]">
                add to card
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#F3F3F3]">
          <img className="w-full h-[400px]" src={img} alt="" />
          <div className="p-6">
            <h1 className="text-2xl font-semibold py-3 text-center">
              Caeser Salad
            </h1>
            <p className="text-center">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <div className=" uppercase mt-5 flex justify-center">
              <button className="px-6 py-3 rounded-xl text-[#BB8506] border-b-2 border-[#BB8506] capitalize font-bold hover:bg-[#151515]">
                add to card
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#F3F3F3]">
          <img className="w-full h-[400px]" src={img} alt="" />
          <div className="p-6">
            <h1 className="text-2xl font-semibold py-3 text-center">
              Caeser Salad
            </h1>
            <p className="text-center">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <div className=" uppercase mt-5 flex justify-center">
              <button className="px-6 py-3 rounded-xl text-[#BB8506] border-b-2 border-[#BB8506] capitalize font-bold hover:bg-[#151515]">
                add to card
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecomded;
