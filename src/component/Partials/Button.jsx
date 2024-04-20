

const Button = ({value}) => {
  return (
     <>
      <div className="w-[20%] shadow-lg  text-center text-[#414141] cursor-pointer rounded-xl m-5 text-sm bg-zinc-100 py-4  font-semibold">
         <h2>{value.text}</h2>
      </div>
     </>
  )
}

export default Button