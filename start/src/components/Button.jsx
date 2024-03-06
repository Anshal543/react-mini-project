
const Button = ({color,children,onClick}) => {



  return (
    <>
    <button onClick={onClick} className={`ml-4 bg-${color}-500 text-white px-2 py-1 rounded-md hover:bg-${color}-400`}>{children} </button>
    </>
  )
}

export default Button