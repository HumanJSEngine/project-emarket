/** @format */
import { ProductCard } from "../../../components/Elements/ProductCard";
export const FeaturedProduct = () => {
  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline">
        리스트 목록
      </h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </section>
  );
};
