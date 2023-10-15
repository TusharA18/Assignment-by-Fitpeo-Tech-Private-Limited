import { AiOutlineRight, AiOutlineDown } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { LuWallet } from "react-icons/lu";
import { RiSettingsLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { TbDiscount2 } from "react-icons/tb";
import person from "../../../assets/person.jpg";
import { useContext } from "react";
import { SidebarContext } from "../../../context/Sidebar/SidebarContextProvider";

const Sidebar = () => {
   const { sidebar, setSidebar } = useContext(SidebarContext);

   return (
      <div
         className={`fixed ${
            sidebar ? "left-0" : "-left-[100vw]"
         } lg:left-0 bg-[#040440] h-screen flex flex-col justify-between w-[100vw] lg:w-[17vw] p-5 space-y-10 z-30`}
      >
         <div className="space-y-8">
            <div className="flex items-center justify-between text-[25px]">
               <div className="flex items-center space-x-2">
                  <RiSettingsLine />
                  <h1>Dashboard</h1>
               </div>
               <div onClick={() => setSidebar(false)}>
                  <RxCross2 className="block lg:hidden" />
               </div>
            </div>
            <div className="space-y-4 text-[#60638a]">
               <div className="flex items-center space-x-2 bg-[#2d2d69] px-4 py-3 rounded-lg text-[#d8d9e1] w-full">
                  <MdOutlineSpaceDashboard className="text-[19px] mr-2" />
                  <p className="text-[17px]">Dashboard</p>
               </div>
               <div className="flex items-center justify-between px-4 py-3 rounded-lg w-full hover:bg-[#2d2d69] hover:text-[#d8d9e1]">
                  <div className="flex items-center space-x-2">
                     <BsBoxSeam className="text-[19px] mr-2" />
                     <p className="text-[17px]">Product</p>
                  </div>
                  <div>
                     <AiOutlineRight className="text-[15px]" />
                  </div>
               </div>
               <div className="flex items-center justify-between px-4 py-3 rounded-lg w-full hover:bg-[#2d2d69] hover:text-[#d8d9e1]">
                  <div className="flex items-center space-x-2">
                     <FaRegUserCircle className="text-[19px] mr-2" />
                     <p className="text-[17px]">Customer</p>
                  </div>
                  <div>
                     <AiOutlineRight className="text-[15px]" />
                  </div>
               </div>
               <div className="flex items-center justify-between text-[19px] px-4 py-2 rounded-lg w-full hover:bg-[#2d2d69] hover:text-[#d8d9e1]">
                  <div className="flex items-center space-x-2">
                     <LuWallet className="text-[19px] mr-2" />
                     <p className="text-[17px]">Income</p>
                  </div>
                  <div>
                     <AiOutlineRight className="text-[15px]" />
                  </div>
               </div>
               <div className="flex items-center justify-between text-[19px] px-4 py-2 rounded-lg w-full hover:bg-[#2d2d69] hover:text-[#d8d9e1]">
                  <div className="flex items-center space-x-2">
                     <TbDiscount2 className="text-[19px] mr-2" />
                     <p className="text-[17px]">Promote</p>
                  </div>
                  <div>
                     <AiOutlineRight className="text-[15px]" />
                  </div>
               </div>
               <div className="flex items-center justify-between text-[19px] px-4 py-2 rounded-lg w-full hover:bg-[#2d2d69] hover:text-[#d8d9e1]">
                  <div className="flex items-center space-x-2">
                     <BiHelpCircle className="text-[19px] mr-2" />
                     <p className="text-[17px]">Help</p>
                  </div>
                  <div>
                     <AiOutlineRight className="text-[15px]" />
                  </div>
               </div>
            </div>
         </div>
         <div className="flex items-center justify-between space-x-2 bg-[#2d2d69] px-4 py-3 h-16 rounded-lg text-[#d8d9e1]">
            <div className="flex items-center space-x-3">
               <div>
                  <img className="w-8 h-8 rounded-3xl" src={person} alt="" />
               </div>
               <div className="flex flex-col ">
                  <h3 className="text-[16px] font-semibold">Enzo</h3>
                  <p className="text-[13px]">Product Manager</p>
               </div>
            </div>
            <div>
               <AiOutlineDown className="text-[15px]" />
            </div>
         </div>
      </div>
   );
};

export default Sidebar;
