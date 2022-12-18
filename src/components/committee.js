/* eslint-disable prettier/prettier */
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import cdata from './cdata';
import './committee.css';
// import imgg from '../images/default.jpg';

const committee = () => {
  return (
    <>
      <div>
        <Header></Header>
      </div>

      <div className="mb-24">
        <div className="mx-auto w-[80vw] md:w-[60vw] mt-16">
          <h1
            style={{ fontSize: '40px' }}
            className="text-[#0284c7] text-center font-bold"
          >
            Committees
          </h1>
        </div>
        {cdata.map((item) => {
          const num = [4, 5];
          return (
            !num.includes(item.id) && (
              <div key={item.id}>
                <h1
                  style={{ fontSize: '35px', height: '40px' }}
                  className="mt-5 text-center font-semibold text-2xl"
                >
                  {item.title}
                </h1>
                <div className="containerCard">
                  {
                    // item &&
                    // item.members &&
                    item.members.map((mem) => {
                      console.log(mem.image);
                      return (
                        <div key={mem.id} className="card">
                          <img src={mem.image} alt="Avatar" className="image" />
                          <div className="container">
                            <h4>
                              <b>{mem.name}</b>
                            </h4>
                            <p>{mem.desig}</p>
                          </div>
                        </div>
                      );
                    })
                  }
                </div>
              </div>
            )
          );
        })}

        <div className=" mb-24 mx-auto w-[80vw] md:w-[60vw] text-2x1 mt-12 md:text-lg bg-[#0284c7] text-white text-center font-bold ">
          {/* <h1 className="w-[80vw] md:w-[60vw] p-4">Committee Members</h1> */}
          {cdata.map((item) => {
            const num = [4, 5];
            return (
              num.includes(item.id) && (
                <div className="bg-white text-black" key={item.id}>
                  <div className="w-[80vw] bg-[#0284c7] md:w-[60vw] text-left text-semibold p-2 border-2">
                    <h1 className="m-0 text-white text-2xl">{item.title}</h1>
                  </div>
                  {item &&
                    item.members &&
                    item.members.map((member) => {
                      return (
                        <div
                          className="flex p-2 font-normal text-left border-2"
                          key={member.name}
                        >
                          <p className="w-[40vw] md:w-[60vw]">{member.name}</p>
                        </div>
                      );
                    })}
                </div>
              )
            );
          })}
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default committee;
