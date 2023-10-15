import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
   plugins: {
      legend: {
         display: false,
      },
   },
};

const data = {
   labels: ["", "", ""],
   datasets: [
      {
         data: [5, 12, 13],
         backgroundColor: ["#f2399a", "#764aea", "#f1effc"],
         borderColor: ["#f2399a", "#764aea", "#f1effc"],
         borderWidth: 1,
      },
   ],
};

const PieChart = () => {
   return (
      <div className="bg-white h-[40vh] lg:h-[43vh] 3xl:h-[34vh] w-[90vw] lg:w-[21vw] rounded-lg px-7 py-5 flex flex-col space-y-5">
         <div>
            <h3 className="text-[22px] font-bold">Customers</h3>
            <p className="text-[15px] text-[#c9c9c9]">
               Customers that buy products
            </p>
         </div>
         <div className="flex items-center justify-center bg-[#fdfeff] h-52">
            <Doughnut options={options} data={data} />
            <div className="absolute w-12 flex flex-col items-center justify-center text-center leading-[14px]">
               <h3 className="text-2xl font-bold">65%</h3>
               <p className="text-[13px]">Total New Customers</p>
            </div>
         </div>
      </div>
   );
};

export default PieChart;
