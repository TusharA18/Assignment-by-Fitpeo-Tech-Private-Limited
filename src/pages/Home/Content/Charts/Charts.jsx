import BarGraph from "./BarGraph/BarGraph";
import PieChart from "./PieChart/PieChart";

const Charts = () => {
   return (
      <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-x-16">
         <BarGraph />
         <PieChart />
      </div>
   );
};

export default Charts;
