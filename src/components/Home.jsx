import React from 'react'
import Button from '../layouts/Button'


const Home = () => {
  return (
      <div className=" min-h-screen flex flex-col justify-center lg:px-24 px-10 text-white bg-[url('assets/images/home.png')] bg-no-repeat bg-cover opacity-100">
          <div className=" w-full lg:w-4/5 space-y-8 mt-24">
              <h1 className="text-5xl font-bold leading-tight">Empowering Health Choices for a Vibrant Life, You Trusted..</h1>
              <p className='text-headingColor text-2xl font-bold'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate laborum ut nobis tenetur cum culpa in. Veritatis soluta fugiat molestiae porro. Cupiditate nostrum provident aut consectetur eos? Neque, minima aliquid.
              </p>
              <Button title='See Services' />
          </div>
    </div>
  )
}

export default Home