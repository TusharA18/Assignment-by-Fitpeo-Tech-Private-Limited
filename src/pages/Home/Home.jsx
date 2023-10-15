import Content from "./Content/Content";
import Sidebar from "./Sidebar/Sidebar";

const Home = () => {
   return (
      <div className="flex h-screen">
         <div className="text-white w-0 lg:w-[17vw]">
            <Sidebar />
         </div>
         <div className="px-1 lg:px-12 py-7 flex-1">
            <Content />
         </div>
      </div>
   );
};

export default Home;
