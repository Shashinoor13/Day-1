import React from 'react'
import Image from './Image';
import Info from './Info';
//TODO:Create a seperate .js file for each fish and import them inside the body.


const Body = () => {
  return (
    <div className='background h-screen'>
    <div className='flex justify-center'>
        <div >
        </div>
        <div className='flex items-center'>
          <Image/>
        </div>
        <div className='bg-green-100'>
       
        </div>
    </div>
    <Info/>
    </div>
  )
}

export default Body