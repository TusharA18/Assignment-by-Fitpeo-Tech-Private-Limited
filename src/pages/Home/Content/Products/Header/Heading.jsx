import { AiOutlineDown } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

const Heading = () => {
   return (
      <div className="flex items-center justify-between">
         <div>
            <h3 className="text-lg lg:text-2xl font-bold">Product Sell</h3>
         </div>
         <div className="flex items-center space-x-4">
            <div className="space-x-2 flex items-center bg-[#eeeeee] px-2 py-1 rounded-lg text-slate-600">
               <BsSearch />
               <input
                  className="outline-none bg-transparent w-[4rem] lg:w-32 text-[12px] lg:text-[14px]"
                  type="text"
                  placeholder="Search"
               />
            </div>
            <div className="flex items-center space-x-2 bg-[#eeeeee] px-2 lg:px-3 py-1 rounded-lg text-slate-500 w-[7rem] lg:w-36">
               <p className="text-[12px] lg:text-[14px] lg:mr-1">
                  Last 30 days
               </p>
               <AiOutlineDown className="text-[14px]" />
            </div>
         </div>
      </div>
   );
};

export default Heading;
