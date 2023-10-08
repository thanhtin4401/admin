import AllProductDetails from "./AllProductDetails";
import Card from "./Card";
import InforProduct from "./InforProduct";
import Section from "./Section";

const ProductDetail = () => {
  return (
    <div className="p-[30px] w-full bg-[#efeeee] shadow-md">
      <Section />
      <h1 className="text-[#212121] text-[18px] font-bold leading-[21px]">
        Project Detail
      </h1>
      <Card />
      <InforProduct />
      <AllProductDetails />
    </div>
  );
};
export default ProductDetail;
