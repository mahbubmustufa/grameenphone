function Button ({children}){
    return (
    <a
    href="#"
    className="
      hidden
      p-3
      px-6
      text-white
      bg-brightRed
      rounded-full
      baseline
      hover:bg-brightRedLight
      md:block
    "
  >
    {children}
  </a>
  )
    
}
export default Button;