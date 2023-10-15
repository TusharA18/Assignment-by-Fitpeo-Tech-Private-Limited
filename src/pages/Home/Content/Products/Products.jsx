import Heading from "./Header/Heading";
import Index from "./Index/Index";
import Product from "./Product/Product";
import product1 from "../../../../assets/product-1.avif";
import product2 from "../../../../assets/product-2.avif";

const products = [
   {
      id: 1,
      name: "Abstract 3D",
      description:
         "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, delectus?",
      stock: 32,
      price: 45.99,
      totalSales: 20,
      imageSrc: product1,
   },
   {
      id: 2,
      name: "Sarphens Illustration",
      description:
         "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, delectus?",
      stock: 32,
      price: 45.99,
      totalSales: 20,
      imageSrc: product2,
   },
];

const Products = () => {
   return (
      <div className="w-full bg-white px-3 lg:px-7 py-5 rounded-lg space-y-7">
         <Heading />
         <Index />

         {products && products.map((p) => <Product key={p.id} product={p} />)}
      </div>
   );
};

export default Products;
