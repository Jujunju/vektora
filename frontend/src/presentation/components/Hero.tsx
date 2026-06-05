import React from 'react';
import banner from '../../assets/banner.png';

function Hero() {
  return (
    <div className=" bg-blue-50 pb-10">
      <div className="flex flex-col-reverse justify-center  items-center sm:flex-row-reverse sm:justify-between sm:gap-5 xl:justify-evenly mx-auto pt-20 px-5">
        <div>
          <div>
            <img src={banner} alt="" className="block mx-auto rounded-xl" />
          </div>
          {/* <div className="absolute top-[620px] flex justify-evenly items-center bg-blue-800 p-4 rounded-lg left-0 right-0 text-white mx-5">
            <div>
              <h3 className="text-sm ">City Street</h3>
              <p className="text-xs">Jln Rawabango</p>
            </div>
            <div>
              <h3 className="text-sm">City Street</h3>
              <p className="text-xs">Jln Rawabango</p>
            </div>
            <div>
              <h3 className="text-sm">City Street</h3>
              <p className="text-xs">Jln Rawabango</p>
            </div>
          </div> */}
        </div>
        <div>
          <div className="text-center mb-5 sm:text-left max-w-[70ch]">
            <h2 className="text-5xl mb-5 font-bold">Vektora Solusi Digital</h2>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ea sequi sunt saepe vero cum libero quae reprehenderit dolores voluptatibus corporis, dolorem, earum laborum exercitationem. Placeat accusantium velit tempora explicabo.</p>
            <div className="mt-5">
              <button className="me-2 bg-blue-500 py-2 px-5 text-white rounded-lg">Jelajahi Vectora</button>
              <button className="border-blue-500 border py-2 px-5 rounded-lg">Contact Us!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
