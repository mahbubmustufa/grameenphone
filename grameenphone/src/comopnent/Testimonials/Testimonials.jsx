import TestimonialsItem from '../Testimonials/TestimonialsItem'

export default function Testimonials (){
    return (
        <>
             {/* <!-- Testimonials Container --> */}
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {/* <!-- testimonial 01 --> */}
          <div
            className="
              hidden
              flex-col
              items-center
              p-6
              space-y-6
              rounded-lg
              bg-varyLigntGray
              md:w-1/3 md:flex
            "
          >
            <img
              className="w-16 -mt-14 rounded-full"
              src="https://news.simplybook.me/wp-content/uploads/2022/06/avatar-anisha-1.jpg"
              alt="Logo"
            />
            <h5 className="text-bold font-lg">Anisha Li</h5>
            <p className="text-sm text-darkGraisBlue">
              Go form tracking progess at the milestone level all the way done
              to the smallest of details. Never lose sight of the bigger picture
              again.
            </p>
          </div>
          {/* <!-- testimonial 02 --> */}
          <TestimonialsItem></TestimonialsItem>
          {/* <!-- testimonial 03 --> */}
          <div
            className="
              hidden
              flex-col
              items-center
              p-6
              space-y-6
              rounded-lg
              bg-varyLigntGray
              md:w-1/3 md:flex
            "
          >
            <img
              className="w-16 -mt-14 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMvtmv8VXhCxIVZP-JUAVL_40ZJJzQpFSYCoZsmu-pOA&s"
              alt="Logo"
            />
            <h5 className="text-bold font-lg">Branden Mari</h5>
            <p className="text-sm text-darkGraisBlue">
              Go form tracking progess at the milestone level all the way done
              to the smallest of details. Never lose sight of the bigger picture
              again.
            </p>
          </div>
        </div>

        {/* <!-- button --> */}
        
        <div className="my-16">
          <a
            href=""
            class="
              p-3
              px-6
              text-white
              bg-brightRed
              rounded-full
              baseline
              hover:bg-brightRedLight
            "
          >
            Get Stargted
          </a>
        </div>
        </>
    )
}