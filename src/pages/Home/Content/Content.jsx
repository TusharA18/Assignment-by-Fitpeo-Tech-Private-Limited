import Charts from "./Charts/Charts";
import Header from "./Header/Header";
import Products from "./Products/Products";
import Stats from "./Stats/Stats";

const Content = () => {
   return (
      <div className="flex flex-col space-y-6 3xl:space-y-7 pb-5">
         <Header />
         <Stats />
         <Charts />
         <Products />
      </div>
   );
};

export default Content;
