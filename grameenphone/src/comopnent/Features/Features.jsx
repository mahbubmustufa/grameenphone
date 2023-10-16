import Paragraph from "../Paragraph";
import FeaturesHeading from "./FeaturesHeading";
import FeaturesItem from "./FeaturesItem";
import ItemHeading from "./ItemHeading";
import ItemText from "./ItemText";
import NumnerList from "./NumberList";

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


    
    <NumnerList/>

  </div>
</section>
</>
    )
}