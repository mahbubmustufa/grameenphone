export default function TestimonialsItem({children, className, title, src}){
    return(
        <>
            <div
            className={`${className}
            flex flex-col
            items-center
            p-6
            space-y-6
            rounded-lg
            bg-varyLigntGray
            md:w-1/3`}
            
          >
            <img
              className="w-16 h-16 -mt-14 rounded-full"
              src={src}
              alt="Logo"
            />
            <h5 className="text-xl font-bold">{title}</h5>
            <p className="text-sm text-darkGraisBlue">
              {children}
              
            </p>
          </div>
        </>
    )
}