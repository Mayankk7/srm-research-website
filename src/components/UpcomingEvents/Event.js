import React from 'react';

const Event = ({ id }) => {
  return (
    <div className="flex flex-wrap justify-start mt-12 mb-10">
      {id.map((item) => {
        return (
          <div
            className={`flex py-4 border-2 br-none text-center onhover:bg-[#4e5066]  ${
              item.index % 2 === 0 ? 'bg-white' : 'bg-gray-200'
            }`}
            key={item.index}
          >
            <p className="w-[20vw] md:w-[15vw] text-xs lg:text-lg px-2 br-2">
              {item.date}
            </p>
            <a
              href={item.url}
              className="w-[60vw] md:w-[50vw] text-xs lg:text-lg px-2 text-blue-500"
            >
              {item.title}
            </a>
            <p className="w-[20vw] md:w-[10vw] text-xs lg:text-lg px-2">
              {item.location}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Event;
