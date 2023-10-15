import PropTypes from "prop-types";

const Product = ({ product }) => {
   return (
      <div className="flex items-start lg:items-center justify-between">
         <div className="flex flex-col lg:flex-row items-center space-x-5 w-[40%] space-y-3">
            <div>
               <img
                  className="w-32 h-20 lg:w-20 lg:h-12 rounded-lg"
                  src={product?.imageSrc}
                  alt="product image"
               />
            </div>
            <div className="space-y-2">
               <h3 className="text-lg font-bold">{product?.name}</h3>
               <p className="text-[14px] text-[#414141]">
                  {product?.description}
               </p>
            </div>
         </div>
         <div className="flex items-center pt-10 space-x-5 pr-5 lg:space-x-[70px] lg:pr-4">
            <p className="text-[14px] text-[#414141] break-words w-12 lg:w-full">
               {product?.stock} in stock
            </p>
            <p className="text-[14px] text-black font-bold pr-3 lg:pr-4">
               ${product?.price}
            </p>
            <p className="text-[14px] text-[#414141] lg:pr-8">
               {product?.totalSales}
            </p>
         </div>
      </div>
   );
};

Product.propTypes = {
   product: PropTypes.object,
};

export default Product;
