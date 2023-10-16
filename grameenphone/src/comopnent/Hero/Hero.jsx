import Button from '../Button'
import Headding from './Headding';
import Images from './Image';
import Paragraph from '../Paragraph';
function Hero(){
    return(
<section id="hero">
      <div
        className="
          container
          flex flex-col-reverse
          items-center
          px-6
          mx-auto
          mt-10
          space-y-0
          md:
          space:y-0
          md:flex-row
        "
      >
        {/* <!-- Left item --> */}
        <div className="flex flex-col md-32 space-y-12 md:w-1/2">
            {/* Headding */}
            <Headding >Bring everyone together</Headding>
          {/* <!-- paragraph --> */}
          <Paragraph >Mango makes it simple for softwar teams to plane day to da task</Paragraph>
          <div className="flex justify-center md:justufy-Start">
            <Button className={'hidden'}>Get Stargted</Button>
            </div>
        </div>
        {/* <!-- Hero images --> */}
        <Images />
      </div>
    </section>
    )
}
export default Hero;