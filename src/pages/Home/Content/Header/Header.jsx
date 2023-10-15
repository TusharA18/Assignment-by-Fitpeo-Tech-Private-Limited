import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { SidebarContext } from "../../../../context/Sidebar/SidebarContextProvider";
import { useContext } from "react";

const Header = () => {
   const { setSidebar } = useContext(SidebarContext);

   return (
      <div className="flex items-center justify-between w-full px-4">
         <div>
            <p className="text-xl font-semibold">Hello Tushar👋🏽,</p>
         </div>
         <div className="flex items-center">
            <div className="hidden lg:flex items-center bg-white p-2 space-x-2 rounded-md">
               <AiOutlineSearch className="text-[22px] text-[#989898]" />
               <input
                  className="outline-none"
                  type="text"
                  placeholder="Search"
               />
            </div>
            <div onClick={() => setSidebar(true)}>
               <GiHamburgerMenu className="block lg:hidden" />
            </div>
         </div>
      </div>
   );
};

export default Header;
