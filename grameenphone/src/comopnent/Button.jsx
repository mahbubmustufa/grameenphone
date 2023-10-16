function Button ({children, className}){
    return (
    <a
    href="#"
    className={`${className}
      w-40
      mx-auto
      text-center
      p-3
      px-6
      text-white
      bg-brightRed
      rounded-full
      baseline
      hover:bg-brightRedLight
      md:block
    `}
  >
    {children}
  </a>
  )
    
}
export default Button;