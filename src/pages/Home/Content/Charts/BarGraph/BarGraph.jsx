import { AiOutlineDown } from "react-icons/ai";

const BarGraph = () => {
   const makeRandomPercentage = () => {
      const val = Math.random() * 80;

      return val < 20 ? 20 : val;
   };

   return (
      <div className="bg-white rounded-xl px-2 py-4 lg:px-7 lg:py-5 flex flex-col space-y-4">
         <div className="flex items-center justify-between">
            <div>
               <h3 className="text-2xl font-bold">Overview</h3>
               <p className="text-[14px] text-[#a8a8a8]">Monthly Earning</p>
            </div>
            <div className="flex items-center space-x-3 bg-[#f2f4f8] rounded-lg p-2 text-gray-500">
               <p className="text-[15px]">Quarterly</p>
               <AiOutlineDown className="text-[13px]" />
            </div>
         </div>
         <div className="flex items-center space-x-2 lg:space-x-5">
            <div className="flex flex-col items-center justify-end space-y-4 h-56">
               <div
                  className="bg-[#f2efff] w-3 lg:w-10 rounded-lg"
                  style={{ height: `${makeRandomPercentage()}%` }}
               />
               <div className="text-[14px] text-[#454545]">Jan</div>
            </div>
            <div className="flex flex-col items-center justify-end space-y-4 h-56">
               <div
                  className="bg-[#f2efff] w-3 lg:w-10 rounded-lg"
                  style={{ height: `${makeRandomPercentage()}%` }}
               />
               <div className="text-[14px] text-[#454545]">Feb</div>
            </div>
            <div className="flex flex-col items-center justify-end space-y-4 h-56">
               <div
                  className="bg-[#f2efff] w-3 lg:w-10 rounded-lg"
                  style={{ height: `${makeRandomPercentage()}%` }}
               />
               <div className="text-[14px] text-[#454545]">Mar</div>
            </div>
            <div className="flex flex-col items-center justify-end space-y-4 h-56">
               <div
                  className="bg-[#f2efff] w-3 lg:w-10 rounded-lg"
                  style={{ height: `${makeRandomPercentage()}%` }}
               />
               <div className="text-[14px] text-[#454545]">Apr</div>
            </div>
            <div className="flex flex-col items-center justify-end space-y-4 h-56">
               <div
                  className="bg-[#f2efff] w-3 lg:w-10 rounded-lg"
                  style={{ height: `${makeRandomPercentage()}%` }}
               />
               <div className="text-[14px] text-[#454545]">May</div>
            </div>
            <div className="flex flex-col items-center justify-end space-y-4 h-56">
               <div
                  className="bg-[#f2efff] w-3 lg:w-10 rounded-lg"
                  style={{ height: `${makeRandomPercentage()}%` }}
               />
               <div className="text-[14px] text-[#454545]">Jun</div>
            </div>
            <div className="flex flex-col items-center justify-end space-y-4 h-56">
               <div
                  className="bg-[#f2efff] w-3 lg:w-10 rounded-lg"
                  style={{ height: `${makeRandomPercentage()}%` }}
               />
               <div className="text-[14px] text-[#454545]">jul</div>
            </div>
            <div className="flex flex-col items-center justify-end space-y-4 h-56">
               <div
                  className="bg-[#5a32ea] w-3 lg:w-10 rounded-lg"
                  style={{ height: `${95}%` }}
               />
               <div className="text-[14px] text-[#454545]">Aug</div>
            </div>
            <div className="flex flex-col items-center justify-end space-y-4 h-56">
               <div
                  className="bg-[#f2efff] w-3 lg:w-10 rounded-lg"
                  style={{ height: `${makeRandomPercentage()}%` }}
               />
               <div className="text-[14px] text-[#454545]">Sep</div>
            </div>
            <div className="flex flex-col items-center justify-end space-y-4 h-56">
               <div
                  className="bg-[#f2efff] w-3 lg:w-10 rounded-lg"
                  style={{ height: `${makeRandomPercentage()}%` }}
               />
               <div className="text-[14px] text-[#454545]">Oct</div>
            </div>
            <div className="flex flex-col items-center justify-end space-y-4 h-56">
               <div
                  className="bg-[#f2efff] w-3 lg:w-10 rounded-lg"
                  style={{ height: `${makeRandomPercentage()}%` }}
               />
               <div className="text-[14px] text-[#454545]">Nov</div>
            </div>
            <div className="flex flex-col items-center justify-end space-y-4 h-56">
               <div
                  className="bg-[#f2efff] w-3 lg:w-10 rounded-lg"
                  style={{ height: `${makeRandomPercentage()}%` }}
               />
               <div className="text-[14px] text-[#454545]">Dec</div>
            </div>
         </div>
      </div>
   );
};

export default BarGraph;
