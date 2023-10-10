import Image from "next/image";
import product2 from "../assets/Img/Rectangle 4501.png";
import product3 from "../assets/Img/Rectangle 4502.png";
const AllProductDetails = () => {
  return (
    <div className="mt-[30px]">
      {" "}
      <h3 className="text-[18px] text-[#212121] my-[30px] font-medium">
        Project All Details
      </h3>
      <div className="grid grid-cols-2 gap-[50px]">
        <div className=" bg-white col-span-2 lg:col-span-1 border border-gray-200 rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="xl:h-[261px] 2xl:h-auto">
            <Image
              className="rounded-t-lg h-full w-full"
              src={product2}
              alt=""
            />
          </div>
          <div className="card w-full rounded-[10px] mt-[20px] p-[20px]  bg-[#FFF]">
            <h3 className="text-[18px] flex justify-between  text-[#212121] font-medium">
              App Development
              <h3 className="text-[18px] text-[#212121] font-medium">70%</h3>
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
        <div className=" bg-white col-span-2 lg:col-span-1  border border-gray-200 rounded-[20px] shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="xl:h-[261px] 2xl:h-auto">
            <Image
              className="rounded-t-lg w-full h-full"
              src={product3}
              alt=""
            />
          </div>
          <div className="card w-full rounded-[10px] mt-[20px] p-[20px]  bg-[#FFF]">
            <h3 className="text-[18px] flex justify-between  text-[#212121] font-medium">
              Agency website Development
              <h3 className="text-[18px] text-[#212121] font-medium">100%</h3>
            </h3>
            <p className="w-[75%] text-[13px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros,
              mattis cursus luctus accumsan cras. Orci at dolor tempor, pulvinar
              et.
            </p>
            <div className="flex justify-end ">
              <div className="flex items-center font-medium border border-[#4BDE97]/[0.5] rounded-[5px] p-[4px]">
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
                    fill="#4BDE97"
                  />
                </svg>
                <span className="text-[15px] text-[#4BDE97]">Complete</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductDetails;
