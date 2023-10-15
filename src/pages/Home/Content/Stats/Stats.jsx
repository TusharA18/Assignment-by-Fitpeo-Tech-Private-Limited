import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import earning from "../../../../assets/earning.png";
import orders from "../../../../assets/orders.png";
import balance from "../../../../assets/balance.png";
import totalSales from "../../../../assets/total-sales.png";

const Stats = () => {
   return (
      <div className="flex flex-col lg:flex-row items-center space-y-5 lg:space-x-8 3xl:space-x-16 w-full">
         <div className="flex items-center bg-white rounded-lg p-4 w-[16.5rem] h-[9.5rem] space-x-3">
            <div className="bg-[#deffee] rounded-[50%] w-24 h-24 flex items-center justify-center">
               <img className="w-16 rounded-[50%]" src={earning} alt="" />
            </div>
            <div className="space-y-1">
               <p className="text-sm text-[#c2c2c2]">Earning</p>
               <h3 className="text-2xl font-semibold">$198k</h3>
               <p className="text-[13.5px]">
                  <span className="text-[#03a642] text-[13px] font-semibold">
                     <BiUpArrowAlt className="inline-flex text-[17px] items-center justify-center" />
                     37.8%
                  </span>{" "}
                  this month
               </p>
            </div>
         </div>
         <div className="flex items-center bg-white rounded-lg p-4 w-[16.5rem] h-[9.5rem] space-x-3">
            <div className="bg-[#e7dbff] rounded-[50%] w-24 h-24 flex items-center justify-center">
               <img className="w-16 rounded-[50%]" src={orders} alt="" />
            </div>
            <div className="space-y-1">
               <p className="text-sm text-[#c2c2c2]">Orders</p>
               <h3 className="text-2xl font-semibold">$2.4k</h3>
               <p className="text-[13.5px]">
                  <span className="text-[#cc0341] text-[13px] font-semibold">
                     <BiDownArrowAlt className="inline-flex text-[17px] items-center justify-center" />
                     2%
                  </span>{" "}
                  this month
               </p>
            </div>
         </div>
         <div className="flex items-center bg-white rounded-lg p-4 w-[16.5rem] h-[9.5rem] space-x-3">
            <div className="bg-[#caf1ff] rounded-[50%] w-24 h-24 flex items-center justify-center">
               <img className="w-16 rounded-[50%]" src={balance} alt="" />
            </div>
            <div className="space-y-1">
               <p className="text-sm text-[#c2c2c2]">Balance</p>
               <h3 className="text-2xl font-semibold">$2.4k</h3>
               <p className="text-[13.5px]">
                  <span className="text-[#cc0341] text-[13px] font-semibold">
                     <BiDownArrowAlt className="inline-flex text-[17px] items-center justify-center" />
                     2%
                  </span>{" "}
                  this month
               </p>
            </div>
         </div>
         <div className="flex items-center bg-white rounded-lg p-4 w-[16.5rem] h-[9.5rem] space-x-3">
            <div className="bg-[#febae0] rounded-[50%] w-24 h-24 flex items-center justify-center">
               <img className="w-12 rounded-[50%]" src={totalSales} alt="" />
            </div>
            <div className="space-y-1">
               <p className="text-sm text-[#c2c2c2]">Earning</p>
               <h3 className="text-2xl font-semibold">$89k</h3>
               <p className="text-[13.5px]">
                  <span className="text-[#03a642] text-[13px] font-semibold">
                     <BiUpArrowAlt className="inline-flex text-[17px] items-center justify-center" />
                     11%
                  </span>{" "}
                  this month
               </p>
            </div>
         </div>
      </div>
   );
};

export default Stats;
