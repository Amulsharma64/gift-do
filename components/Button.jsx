"use client"

const Button = ({name, handleButton}) => {
  return (
    <button 
    className="bg-transparent hover:bg-gray-800 text-white-700 font-semibold
     hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
     onClick={handleButton}
     >
            {name}
    </button>
  )
}

export default Button