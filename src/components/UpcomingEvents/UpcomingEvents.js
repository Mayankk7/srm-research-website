import React, { useState } from 'react';
import { data } from './data';
import Event from './Event';

const UpcomingEvents = () => {
  const [event, setEvent] = useState([]);
  const [active, setActive] = useState(0);
  return (
    <>
      <div className="w-screen h-[25vh] text-center bg-[#045968] ">
        <h2 className="text-3xl pt-12 text-white font-bold">
          Upcoming Conferences
        </h2>
        <div className="flex flex-wrap justify-center mt-4 ">
          <a className="text-md text-blue-400 hover:text-white" href="#">
            Home
          </a>
          <p className="text-md text-white"> / Upcoming Conferences</p>
        </div>
      </div>
      <div className="w-screen h-full mt-24 px-2 md:px-[15vw]">
        <div className="mt-5 flex flex-wrap justify-start">
          {data.map((item) => {
            return (
              <button
                key={item.id}
                className={`p-4 px-12 mx-4 min-w-fit mt-4 lg:mt-0 text-white 
                ${active == item.id ? 'bg-[#002162]' : 'bg-[#ff3600]'}
                hover:bg-slate-400`}
                onClick={() => {
                  setActive(item.id);
                  setEvent(item.conferences);
                }}
                value={item.id}
              >
                {item.month}
              </button>
            );
          })}
        </div>
        <div className="mt-5">
          <Event id={event} />
        </div>
      </div>
    </>
  );
};

export default UpcomingEvents;
