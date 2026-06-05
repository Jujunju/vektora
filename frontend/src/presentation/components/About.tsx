import React from 'react'
// import {} from 'lucide-react'
import about from '../../assets/about.png'

function About() {
  return (
    <div className=" mt-36">
      <div className="py-5 text-center">
        <h2 className="text-3xl font-semibold">About Us</h2>
        <span className="block w-20 h-0.5 bg-black my-2 mx-auto"></span>
        <p className="text-sm mx-5">Mencari layanan yang mendukung dengan kebutuhan seharian, dalam membangun bisnis anda</p>
      </div>
      <div className="mt-5 xl:mt-20 w-full sm:ps-5">
        <div className="flex sm:justify-evenly flex-col sm:flex-row">
          <div className="mb-5 ">
            <img src={about} alt="" className="rounded-full mx-auto bg-blue-200 block" />
          </div>
          <div className="px-5 flex gap-5 max-w-[80ch] sm:max-w-[60ch] xl:max-w-[70ch]">
            <div className="p-2 rounded-lg">
              <h2 className="text-xl sm:text-2xl font-semibold text-blue-700">What is Vectora?</h2>
              <p className="text-sm mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum porro itaque, qui in repellat est quis dolores nam. Recusandae dolor iure placeat reiciendis iste aspernatur soluta, aliquam veritatis cumque est vel! Iste,
                cupiditate esse. Voluptas sunt, facere amet quos accusantium debitis alias laudantium cumque at quibusdam similique``
              </p>
              <button className="mt-5  bg-blue-500 py-2 px-5 text-white rounded-lg">Lihat selengkapnya</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About