import React from 'react';

const SubCover = ({ title, details, img }) => {
  return (
    <div className="">
      <div
        style={{
          backgroundImage: `url('${img}')`,
          // opacity: 10,
        }}
        className="  mx-auto mt-5  py-28 px-[300px]"
      >
        <div className="bg-[#15151573] p-20  *:text-white">
          <h1 className="text-4xl text-center pb-5 uppercase">{title}</h1>
          <p className="text-md text-center">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default SubCover;
