import { Box, Code2, Monitor, Pencil, Shield } from 'lucide-react';
import React from 'react';

const service = [
  {
    id: 1,
    icon: Code2,
    title: 'Code Mudah di Test',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, dolorum soluta quasi cum id dolores quae sint nesciunt excepturi. Sequi.',
    color: 'text-blue-400',
  },
  {
    id: 2,
    icon: Monitor,
    title: 'Responsive serta UX Terjaga',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, dolorum soluta quasi cum id dolores quae sint nesciunt excepturi. Sequi.',
    color: 'text-green-400',
  },
  {
    id: 3,
    icon: Shield,
    title: 'Aman & Terjaga',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, dolorum soluta quasi cum id dolores quae sint nesciunt excepturi. Sequi.',
    color: 'text-yellow-400',
  },
  {
    id: 4,
    icon: Box,
    title: 'Reusable',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, dolorum soluta quasi cum id dolores quae sint nesciunt excepturi. Sequi.',
    color: 'text-cyan-400',
  },
  {
    id: 5,
    icon: Pencil,
    title: 'Bisa diubah kapanpun',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, dolorum soluta quasi cum id dolores quae sint nesciunt excepturi. Sequi.',
    color: 'text-purple-400',
  },
];

function Service() {
  return (
    <div className=" pt-16">
      <div className="text-center">
        <h2 className="text-3xl font-semibold">Services</h2>
        <span className="block w-20 h-0.5 bg-black my-2 mx-auto"></span>
        <p className="text-sm mx-5">Mencari layanan yang mendukung dengan kebutuhan seharian, dalam membangun bisnis anda</p>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mx-5">
          {service.map((e) => {
            const Icon = e.icon;

            return (
              <div className="bg-blue-50 text-center p-4 rounded-lg">
                <span>
                  <Icon size={35} className={`${e.color} block mx-auto`} />
                </span>
                <h3 className=" font-semibold mt-3">{e.title}</h3>
                <p className="text-sm mt-2">{e.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Service;
