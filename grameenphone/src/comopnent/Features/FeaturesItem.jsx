export default function FeaturesItem({children, itemNumber, title}){
    return(
      <>
        <div
          className="
          flex flex-col
          space-y-3
          md:space-y-0 md:space-x-6
          "
        >
            {/* <!-- Item Heading  --> */}
          <div className="rounded-l-full ng-brightRedSueLight md:bg-transparent">
            <div className="flex items-center space-x-2">
            <div
              className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
            >
              {itemNumber}
            </div>
            <h3 className="text-base font-bold">
              {title}
            </h3>
            </div>
          </div>

            {/* paragraph */}
          <div>
            <p className="text-darkGreyisBlue">
              {children}
            </p>
          </div>
        </div>
      </>
    )
}