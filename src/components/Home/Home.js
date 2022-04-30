import React from 'react';

const Home = () => {
    return (
      <div
        style={{ backgroundColor: "#100827", minHeight: '90vh' }}
        className="text-white"
      >
        <div className="md:flex justify-between items-center container mx-auto px-4">
          <div className="">
            <img
              className="md:mt-10 pt-5"
              src="https://i.ibb.co/chPyQpW/Logistics-amico-1-1.png"
              alt=""
            />
          </div>
          <div className="order-last md:order-first mt-20 md:mt-0 pb-14 md:pb-0 text-center md:text-left">
            <h3 className="text-4xl md:text-5xl font-bold font-mono">
              WELCOME TO
            </h3>
            <h3 className="text-4xl md:text-5xl font-bold font-mono">
              DIGITAL
            </h3>
            <h3 className="text-4xl md:text-5xl font-bold font-mono">
              ELECTRONICS
            </h3>
          </div>
        </div>
      </div>
    );
};

export default Home;