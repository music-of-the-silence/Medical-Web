import React from 'react'
import '../App.css'

const Button = ({title}) => {
  return (
      <div>
          <button className=' btn bg-buttonColor text-black px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out'>
              {title}
          </button>
    </div>
  )
}

export default Button