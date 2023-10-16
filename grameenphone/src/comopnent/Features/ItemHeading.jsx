export default function ItemHeading(){
    return(
        <>
            {/* <!-- Item Heading  --> */}
        <div className="rounded-l-full ng-brightRedSueLight md:bg-transparent">
          <div className="flex items-center space-x-2">
            <div
              className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
            >
              01
            </div>
            <h3 className="text-base font-bold md:mb-4 md:hidden">
              Track company-wide progress
            </h3>
          </div>
        </div>
        </>
    )
}