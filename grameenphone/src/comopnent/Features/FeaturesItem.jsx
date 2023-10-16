import ItemHeading from "./ItemHeading";

export default function FeaturesItem(){
    return(
        <>
            <div
        className="
          flex flex-col
          space-y-3
          md:space-y-0 md:space-x-6 md:flex-row
        "
      >
        <ItemHeading />
        <div>
          <h3 className="hidden md-4 text-lg font-bold md:block">
            Everything you deed in one place
          </h3>
          <p className="text-darkGreyisBlue">
            see how your day-to-day task fit into the wider vision . Go form
            tracking progess at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture
            again.
          </p>
        </div>
      </div>
        </>
    )
}