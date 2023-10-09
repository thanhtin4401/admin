const InforProduct = () => {
  return (
    <div className="">
      <div className="flex justify-between lg:space-x-12 lg:flex-row flex-col items-center w-full">
        <div className="flex w-full left flex-col">
          <div className="flex justify-between items-center mt-[30px] lg:mt-[0]">
            <h3 className="text-[18px] text-[#212121] font-medium">
              Product Detail
            </h3>
            <button className="bg-[#6D6CE3] mt-[-20px] lg:hidden  text-[white] rounded-[28px] px-[21px] py-[10px]">
              Create new Project
            </button>
          </div>

          <div className="card h-[150px] w-full rounded-[10px] mt-[20px] p-[20px]  bg-[#FFF]">
            <h3 className="text-[18px] flex justify-between  text-[#212121] font-medium">
              App Development
              <h3 className="text-[18px] text-[#212121] font-medium">70%</h3>
            </h3>
            <p className="w-[75%] text-[13px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros,
              mattis cursus luctus accumsan cras
              <span className=" hidden lg:inline">
                {" "}
                Orci at dolor tempor, pulvinar et.
              </span>
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
          <div className="card h-[150px] w-full rounded-[10px] mt-[20px] p-[20px] bg-[#FFF]">
            <h3 className="text-[18px] flex justify-between text-[#212121] font-medium">
              Agency website Development
              <h3 className="text-[18px] text-[#212121] font-medium">100%</h3>
            </h3>
            <p className="w-[75%] text-[13px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros,
              mattis cursus luctus accumsan cras
              <span className=" hidden lg:inline">
                {" "}
                Orci at dolor tempor, pulvinar et.
              </span>
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
          <div className="card h-[150px] w-full rounded-[10px] mt-[20px] p-[20px] bg-[#FFF]">
            <h3 className="text-[18px] flex justify-between text-[#212121] font-medium">
              Dashboard Development
              <h3 className="text-[18px] text-[#212121] font-medium">10%</h3>
            </h3>
            <p className="w-[75%] text-[13px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros,
              mattis cursus luctus accumsan cras
              <span className=" hidden lg:inline">
                {" "}
                Orci at dolor tempor, pulvinar et.
              </span>
            </p>
            <div className="flex justify-end">
              <div className="flex items-center border border-[#F3BB1C]/[0.5] rounded-[5px] p-[4px]">
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
        <div className="flex w-full right flex-col">
          <div className="flex justify-between mt-[30px] lg:mt-[0px] ">
            <h3 className="text-[18px]  text-[#212121] font-medium ">
              Milestone
            </h3>
            <button className="bg-[#6D6CE3] mt-[-20px] hidden lg:inline-block  text-[white] rounded-[28px] px-[21px] py-[10px]">
              Create new Project
            </button>
          </div>

          <div className="card h-[150px] w-full rounded-[10px]  mt-[20px] p-[20px] bg-[#FFF]">
            <h3 className="text-[18px] flex justify-between text-[#212121] font-medium">
              App Development
              <h3 className="text-[18px] text-[#212121] font-medium">200$</h3>
            </h3>
            <p className="w-[75%] text-[13px] opacity-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros,
              mattis cursus luctus accumsan cras
              <span className=" hidden lg:inline">
                {" "}
                Orci at dolor tempor, pulvinar et.
              </span>
            </p>
            <p className="text-[15px] flex justify-between  items-center ">
              <span className="text-[14px] font-normal text-[Gray]">
                Mile stone-1
              </span>
              <div className="flex items-center border border-[#4BDE97]/[0.5] rounded-[5px] py-[4px] px-[8px]">
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
                <span className="text-[15px] ml-[5px] text-[#4BDE97]">
                  Paid
                </span>
              </div>
            </p>
          </div>

          <div className="card h-[150px] w-full rounded-[10px] mt-[20px] p-[20px] bg-[#FFF]">
            <h3 className="text-[18px] flex justify-between text-[#212121] font-medium">
              App Development
              <h3 className="text-[18px] text-[#212121] font-medium">400$</h3>
            </h3>
            <p className="w-[75%] opacity-0 text-[13px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros,
              mattis cursus luctus accumsan cras
              <span className=" hidden lg:inline">
                {" "}
                Orci at dolor tempor, pulvinar et.
              </span>
            </p>
            <p className="text-[15px] flex justify-between items-center ">
              <span className="text-[14px] font-normal text-[Gray]">
                Mile stone-2
              </span>
              <div className="flex space-x-5">
                <div className="flex items-center border ml-[200px] border-[#F03738]/[0.5] rounded-[5px] px-[8px] py-[4px]">
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
                      fill="#F03738"
                    />
                  </svg>
                  <span className="text-[15px] ml-[5px]  text-[#F03738]">
                    Unpaid
                  </span>
                </div>
                <button className="bg-[#6D6CE3]  text-[white] rounded-[28px] px-[21px] py-[10px]">
                  Play now
                </button>{" "}
              </div>
            </p>{" "}
          </div>
          <div className="card h-[150px] w-full rounded-[10px] mt-[20px] p-[20px] bg-[#FFF]">
            <h3 className="text-[18px] flex justify-between text-[#212121] font-medium">
              Dashboard development
              <h3 className="text-[18px] text-[#212121] font-medium">400$</h3>
            </h3>
            <p className="w-[75%] opacity-0 text-[13px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros,
              mattis cursus luctus accumsan cras
              <span className=" hidden lg:inline">
                {" "}
                Orci at dolor tempor, pulvinar et.
              </span>
            </p>
            <p className="text-[15px] flex justify-between items-center ">
              <span className="text-[14px] font-normal text-[Gray]">
                Mile stone-3
              </span>
              <div className="flex space-x-5">
                <div className="flex items-center border ml-[200px] border-[#F03738]/[0.5] rounded-[5px] px-[8px] py-[4px]">
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
                      fill="#F03738"
                    />
                  </svg>
                  <span className="text-[15px] ml-[5px]  text-[#F03738]">
                    Unpaid
                  </span>
                </div>
                <button className="bg-[#6D6CE3]  text-[white] rounded-[28px] px-[21px] py-[10px]">
                  Play now
                </button>{" "}
              </div>
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InforProduct;
