import Button from "../Button"
import Logo from "./Logo"
import Manu from "./Manu"

function Nav() {
  
    return (
        <nav class="relative container mx-auto p-6">
         {/* Flex container */}
        <div class="flex items-center justify-between">
          {/* logo */}
          <Logo />
          {/*  menu items */}
          <Manu />
          {/*  button  */}
          <Button className={'hidden'}>Get started</Button>
          {/*  Hanburger Icon  */}
          <button
            class="hamburger md:hidden focus:outline-none"
            id="menu-btn"
          >
            <span class="hamburger-top"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
          </button>
        </div>
        <div class="md:hidden">
          <div
            class="
              hidden
              absolute
              flex-col
              items-center
              self-end
              py-8
              mt010
              space-y-6
              font-bokd
              bg-white
              sm:w-auto sm:self-center
              left-6
              right-6
              drop-shadow-md
            "
            id="menu"
          >
            <a href="#">Pricing</a>
            <a href="#">Product</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Community</a>
          </div>
        </div>
      </nav>
    )
  }
  
  export default Nav
  