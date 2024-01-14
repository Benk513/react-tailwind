 
const Button = ({label,iconURL ,backgroundColor,borderColor,textColor}) => {
  return (
      <button
          className={`flex items-center rounded-full justify-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
          ${backgroundColor ? `${backgroundColor} ${textColor}  ${borderColor}` :"bg-coral-red  text-white border-coral-red"}
           `}>
          {label}
          {iconURL && <img
              src={iconURL}
              alt="arrow right icon"
              className="ml-2 rounded-full w-5 h-5"
          />}
      </button>
  )
}

export default Button