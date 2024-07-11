import Image from 'next/image';
import React from 'react';

const Home = () => {
  return (
    <div className='flex justify-center items-center '>
      <h4 className='text-4xl'>This is first website with nextjs</h4>
      <Image src="https://i.ibb.co/NxSL177/my-img05-2.jpg" height={400} width={400} />


    </div>
  );
};

export default Home;