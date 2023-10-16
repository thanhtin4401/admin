import Image from "next/image";
import product2 from "../assets/Img/Rectangle 4501.png";
import product3 from "../assets/Img/Rectangle 4502.png";
const AllProductDetails = () => {
  return (
    <div className="mt-[30px]">
      <div className="flex lg:flex-row flex-col justify-between space-y-12 lg:space-y-0 lg:space-x-12">
        <div className="product_left rounded-lg overflow-hidden w-full lg:w-2/4">
          <Image className="  w-full" src={product2} alt="" />
          <div className="card w-full rounded-[10px p-[20px]  bg-white">
            <h3 className="text-[18px] flex justify-between  text-[#212121] font-medium">
              App Development
              <p className="text-[18px] text-[#212121] font-medium">70%</p>
            </h3>
            <p className="w-[75%] text-[13px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros,
              mattis cursus luctus accumsan cras. Orci at dolor tempor, pulvinar
              et.
            </p>
            <div className="flex justify-end">
              <div className="flex items-center border font-medium border-[#F3BB1C]/[0.5] rounded-[5px] p-[4px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <ellipse
                    cx="8.00033"
                    cy="7.99984"
                    rx="3.33334"
                    ry="3.33333"
                    fill="#F3BB1C"
                  />
                </svg>
                <span className="text-[15px] text-[#F3BB1C]">Pending</span>
              </div>
            </div>
          </div>
        </div>
        <div className="product_left rounded-lg overflow-hidden w-full lg:w-2/4">
          <Image
            className="object-container max-w-none lg:w-[107%] w-full"
            src={product3}
            alt=""
          />
          <div className="card w-full rounded-[10px p-[20px]  bg-white">
            <h3 className="text-[18px] flex justify-between  text-[#212121] font-medium">
              App Development
              <p className="text-[18px] text-[#212121] font-medium">70%</p>
            </h3>
            <p className="w-[75%] text-[13px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros,
              mattis cursus luctus accumsan cras. Orci at dolor tempor, pulvinar
              et.
            </p>
            <div className="flex justify-end">
              <div className="flex items-center border font-medium border-[#F3BB1C]/[0.5] rounded-[5px] p-[4px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <ellipse
                    cx="8.00033"
                    cy="7.99984"
                    rx="3.33334"
                    ry="3.33333"
                    fill="#F3BB1C"
                  />
                </svg>
                <span className="text-[15px] text-[#F3BB1C]">Pending</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductDetails;
