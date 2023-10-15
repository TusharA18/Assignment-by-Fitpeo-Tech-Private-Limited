const Index = () => {
   return (
      <div className="space-y-5">
         <div className="flex items-center justify-between text-slate-600">
            <div>
               <p className="text-[14px]">Product Name</p>
            </div>
            <div className="flex items-center space-x-6 lg:space-x-[75px]">
               <p className="text-[14px] pr-5 lg:pr-3">Stock</p>
               <p className="text-[14px] pr-2">Price</p>
               <p className="text-[14px] break-words w-10 lg:w-full lg:pr-3">
                  Total Sales
               </p>
            </div>
         </div>
         <hr />
      </div>
   );
};

export default Index;
