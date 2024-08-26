import React from 'react';
// import img from '../../assets/home/bistro.jpg';

const BistroBoss = () => {
  return (
    <div className="max-w-7xl mx-auto my-14">
      <div
        style={{
          backgroundImage: `url('bistro.jpg')`,
          // opacity: 10,
        }}
        className=" max-w-7xl mx-auto mt-5  p-28"
      >
        <div className="bg-white p-20">
          <h1 className="text-4xl text-center pb-5 uppercase">Bistro Boss</h1>
          <p className="text-md text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BistroBoss;
