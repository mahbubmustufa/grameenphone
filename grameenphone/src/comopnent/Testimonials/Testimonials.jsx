import TestimonialsItem from '../Testimonials/TestimonialsItem';
import Button from '../Button'


export default function Testimonials (){
    return (
        <>
             {/* <!-- Testimonials Container --> */}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {/* <!-- testimonial 01 --> */}
          
          {/* <!-- testimonial 02 --> */}
          <TestimonialsItem className={"hidden md:flex md:w-1/3"} title={"Alim dar"} src={"https://c.ndtvimg.com/2021-02/sqetet4g_aleem-dar-afp_625x300_25_February_21.jpg"}>
          Go form tracking progess at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again
          </TestimonialsItem>
          {/* <!-- testimonial 03 --> */}
          <TestimonialsItem  title={"Tailor Swift"} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4mLkFa9oxiV3lVUum8rw1MZriWgLuxgs9Mr4uyYiFVOYMrbCOh9XaEhGBEfwZwbpvsBM&usqp=CAU"}>
          Go form tracking progess at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again
          </TestimonialsItem>
          <TestimonialsItem className={'hidden md:flex md:w-1/3'} title={'Monali Thakur'} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXB2MJGilAI2dcTVb7jCAG0N3GyIT_cNU_5KlhEhFXm4H3k-BfTF9pU-oWfN2IvzCAOdk&usqp=CAU'}>
          Go form tracking progess at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again
          </TestimonialsItem>
        </div>

        {/* <!-- button --> */}
        
        <div className="my-16 text-center">
          <Button className={""}>Get Started</Button>
        </div>
        </>
    )
}