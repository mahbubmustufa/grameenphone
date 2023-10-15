import Button from "./Button"
import Logo from "./Logo"

function Nav() {
  
    return (
        <nav class="relative container mx-auto p-6">
         {/* Flex container */}
        <div class="flex items-center justify-between">
          {/* logo */}
          <Logo />
          {/*  menu items */}
          <div class="hidden space-x-6 md:flex">
            <a href="#" class="hover:text-darkGrayisBlue">Pricing</a>
            <a href="#" class="hover:text-darkGrayisBlue">Product</a>
            <a href="#" class="hover:text-darkGrayisBlue">About Us</a>
            <a href="#" class="hover:text-darkGrayisBlue">Careers</a>
            <a href="#" class="hover:text-darkGrayisBlue">Community</a>
          </div>
          {/*  button  */}
          <Button>Get started</Button>
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
  