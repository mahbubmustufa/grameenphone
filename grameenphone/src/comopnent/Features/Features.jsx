import Paragraph from "../Paragraph";
import FeaturesHeading from "./FeaturesHeading";
import FeaturesItem from "./FeaturesItem";

export default function Features (){
    return(
<>
{/* <!-- fiture section --> */}
<section id="features">
  <div
    className="
      container
      flex flex-col
      px-4
      mx-auto
      mt-10
      space-y-12
      md:space-y-0 md:space-x-2 md:flex-row
    "
  >
    {/* <!-- What's different --> */}
    <div className="flex flex-col space-y-12 md:w-1/2">
      <FeaturesHeading>What's different about Me</FeaturesHeading>
      <Paragraph>
      Mange provides all the functionality your team needs, without hte
        compesity. Our softeare is tailor-made for moren digital product
        teams.
      </Paragraph>
    </div>



      {/* <!-- Numberd List  --> */}
    <div className="flex flex-col space-y-8 md:w-1/2">
      
      <FeaturesItem itemNumber={'01'} title={'Track company-wide progress'} >
        see how your day-to-day task fit into the wider vision . Go form tracking progess at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again
      </FeaturesItem>
      <FeaturesItem itemNumber={'02'} title={"Everything you deed in one place"}>
        see how your day-to-day task fit into the wider vision . Go form tracking progess at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again
      </FeaturesItem>
      <FeaturesItem itemNumber={'03'} title={'What next do you want'}>
        see how your day-to-day task fit into the wider vision . Go form tracking progess at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again
      </FeaturesItem>
    </div>

  </div>
</section>
</>
    )
}