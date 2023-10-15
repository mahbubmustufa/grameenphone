function Headding ({children}){
    return(
        <h1
            className="
              max-w-md
              text-4xl
              font-bold
              text-center
              md:text-5xl md:text-left
            "
          >
            {children}
            
          </h1>
    )
}
export default Headding;