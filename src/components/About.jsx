import React from 'react'
import '../App.css'
import img from '../assets/images/about.jpg'

const About = () => {
  return (
      <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
          <div className=" w-full lg:w-3/4 space-y-4">
              <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
              <p className=" text-justify lg:text-start">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellendus unde nam accusamus. Voluptatibus voluptas in neque? Aperiam voluptates vero explicabo suscipit? Fugit accusamus dolor velit consectetur corrupti culpa possimus!
              </p>
              <p className=" text-justify lg:text-start">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure quae blanditiis sapiente repudiandae consequatur, at facilis ducimus eius maxime, quaerat, magni ad iste voluptatum iusto similique hic aliquam architecto molestias.
              </p>
              <p className=" text-justify lg:text-start">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. In neque dolorem eos quaerat animi ipsa perspiciatis, eum reiciendis eveniet excepturi eaque quo officiis, labore assumenda. Architecto eligendi accusamus dolorum delectus.
              </p>
          </div>
          <div className=" w-full lg:w-3/4">
              <img className="picture rounded-lg" src={img} alt="About_Img" />
          </div>
    </div>
  )
}

export default About