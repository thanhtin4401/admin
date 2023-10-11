"use client";

import { useState } from "react";

const Tabs = () => {
  const [tabIndex, setTabIndex] = useState<number>(1);

  const handelActive = (tabIndex: any) => {
    setTabIndex(tabIndex);
  };
  return (
    <div className="lg:p-[10px]">
      <div className="grid grid-cols-3  lg:grid-cols-1 gap-x-[20px]  ">
        <div
          onClick={() => handelActive(1)}
          className={` ${
            tabIndex == 1 ? "bg-[#6D6CE3] text-[#fff] " : ""
          } flex mt-[10px] transition-all rounded-[15px] hover:text-[#fff] hover:bg-[#6D6CE3]   p-[10px] items-center lg:w-full w-[130px]`}
        >
          <div className="bg-white p-[10px] flex justify-center items-center rounded-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15px"
              height="15px"
              viewBox="0 0 15 16"
              fill="none"
            >
              <path
                d="M6.59492 0.00957108C5.58809 0.134643 4.74699 0.54425 4.04659 1.25403C3.42436 1.88251 3.06791 2.55164 2.88343 3.43027C2.80839 3.79923 2.80839 4.6247 2.88343 4.99366C3.06791 5.87228 3.42749 6.54454 4.04659 7.1699C4.67507 7.80463 5.36297 8.17672 6.25097 8.3612C6.6168 8.43624 7.43915 8.43624 7.82061 8.3612C8.66484 8.19235 9.36524 7.81714 9.9906 7.19804C10.6222 6.57581 10.9974 5.88166 11.1819 4.99366C11.2569 4.6247 11.2569 3.79923 11.1819 3.43027C11.06 2.85181 10.838 2.31713 10.519 1.83561C10.322 1.53857 9.71232 0.925718 9.42153 0.734984C8.91811 0.400419 8.37405 0.172164 7.83938 0.0689802C7.58611 0.0189514 6.81379 -0.0185699 6.59492 0.00957108Z"
                fill="#3A416F"
              />
              <path
                d="M5.35374 9.42126C3.60274 9.63388 2.02372 10.6251 1.00752 12.1541C0.410303 13.0483 0.069484 14.1052 0.0100752 15.2339C-0.0086855 15.581 -0.00555872 15.6217 0.0569769 15.7436C0.100752 15.8312 0.163287 15.8937 0.24771 15.9375C0.369655 16 0.416556 16 7.03282 16C13.6491 16 13.696 16 13.8179 15.9375C13.9024 15.8937 13.9649 15.8312 14.0087 15.7436C14.0712 15.6217 14.0743 15.581 14.0556 15.2339C13.9743 13.6924 13.3864 12.3417 12.3171 11.2348C11.304 10.1873 9.99701 9.54945 8.56807 9.4025C8.09593 9.35559 5.78836 9.3681 5.35374 9.42126Z"
                fill="#3A416F"
              />
            </svg>
          </div>
          <span className="ml-[10px] mt-[2px] text-[12px]">User Profile</span>
        </div>
        <div
          onClick={() => handelActive(2)}
          className={` ${
            tabIndex == 2 ? "bg-[#6D6CE3] text-[#fff] " : ""
          } flex mt-[10px] transition-all rounded-[15px] hover:text-[#fff] hover:bg-[#6D6CE3]   p-[10px] items-center lg:w-full w-[130px]`}
        >
          <div className="bg-white p-[10px] flex justify-center items-center rounded-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M3.04687 14.5317H2.10937C1.92289 14.5317 1.74405 14.4577 1.61219 14.3258C1.48033 14.1939 1.40625 14.0151 1.40625 13.8286V9.60986C1.40625 9.42338 1.48033 9.24454 1.61219 9.11268C1.74405 8.98082 1.92289 8.90674 2.10937 8.90674H3.04687C3.23335 8.90674 3.4122 8.98082 3.54406 9.11268C3.67592 9.24454 3.75 9.42338 3.75 9.60986V13.8286C3.75 14.0151 3.67592 14.1939 3.54406 14.3258C3.4122 14.4577 3.23335 14.5317 3.04687 14.5317Z"
                fill="#3A416F"
              />
              <path
                d="M9.60937 14.5308H8.67187C8.48539 14.5308 8.30655 14.4567 8.17469 14.3248C8.04283 14.193 7.96875 14.0141 7.96875 13.8276V6.79639C7.96875 6.60991 8.04283 6.43106 8.17469 6.2992C8.30655 6.16734 8.48539 6.09326 8.67187 6.09326H9.60937C9.79585 6.09326 9.9747 6.16734 10.1066 6.2992C10.2384 6.43106 10.3125 6.60991 10.3125 6.79639V13.8276C10.3125 14.0141 10.2384 14.193 10.1066 14.3248C9.9747 14.4567 9.79585 14.5308 9.60937 14.5308Z"
                fill="#3A416F"
              />
              <path
                d="M12.8906 14.5312H11.9531C11.7666 14.5312 11.5878 14.4572 11.4559 14.3253C11.3241 14.1934 11.25 14.0146 11.25 13.8281V3.51562C11.25 3.32914 11.3241 3.1503 11.4559 3.01844C11.5878 2.88658 11.7666 2.8125 11.9531 2.8125H12.8906C13.0771 2.8125 13.2559 2.88658 13.3878 3.01844C13.5197 3.1503 13.5937 3.32914 13.5937 3.51562V13.8281C13.5937 14.0146 13.5197 14.1934 13.3878 14.3253C13.2559 14.4572 13.0771 14.5312 12.8906 14.5312Z"
                fill="black"
              />
              <path
                d="M6.32812 14.5312H5.39062C5.20414 14.5312 5.0253 14.4572 4.89344 14.3253C4.76158 14.1934 4.6875 14.0146 4.6875 13.8281V1.17187C4.6875 0.985395 4.76158 0.806552 4.89344 0.674691C5.0253 0.542829 5.20414 0.46875 5.39062 0.46875H6.32812C6.5146 0.46875 6.69345 0.542829 6.82531 0.674691C6.95717 0.806552 7.03125 0.985395 7.03125 1.17187V13.8281C7.03125 14.0146 6.95717 14.1934 6.82531 14.3253C6.69345 14.4572 6.5146 14.5312 6.32812 14.5312Z"
                fill="black"
              />
            </svg>
          </div>
          <span className="ml-[10px] mt-[2px] text-[14px] ">Projects</span>
        </div>
        <div
          onClick={() => handelActive(3)}
          className={` ${
            tabIndex == 3 ? "bg-[#6D6CE3] text-[#fff] " : ""
          } flex mt-[10px] transition-all rounded-[15px] hover:text-[#fff] hover:bg-[#6D6CE3]   p-[10px] items-center lg:w-full w-[130px]`}
        >
          <div className="bg-white p-[10px] flex justify-center items-center rounded-[12px]">
            <svg
              // className="w-[15px]"
              xmlns="http://www.w3.org/2000/svg"
              width="15px"
              height="15px"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M0.937439 11.5151C0.937439 11.9503 1.11029 12.3676 1.41797 12.6752C1.72564 12.9829 2.14294 13.1558 2.57806 13.1558H12.4218C12.8569 13.1558 13.2742 12.9829 13.5819 12.6752C13.8896 12.3676 14.0624 11.9503 14.0624 11.5151V7.00342H0.937439V11.5151ZM2.87103 9.28857C2.87103 9.05547 2.96363 8.83192 3.12846 8.66709C3.29328 8.50227 3.51684 8.40967 3.74994 8.40967H5.15619C5.38929 8.40967 5.61284 8.50227 5.77767 8.66709C5.94249 8.83192 6.03509 9.05547 6.03509 9.28857V9.87451C6.03509 10.1076 5.94249 10.3312 5.77767 10.496C5.61284 10.6608 5.38929 10.7534 5.15619 10.7534H3.74994C3.51684 10.7534 3.29328 10.6608 3.12846 10.496C2.96363 10.3312 2.87103 10.1076 2.87103 9.87451V9.28857Z"
                fill="#3A416F"
              />
              <path
                d="M12.4218 2.84277H2.57806C2.14294 2.84277 1.72564 3.01562 1.41797 3.3233C1.11029 3.63098 0.937439 4.04828 0.937439 4.4834V5.24512H14.0624V4.4834C14.0624 4.04828 13.8896 3.63098 13.5819 3.3233C13.2742 3.01562 12.8569 2.84277 12.4218 2.84277Z"
                fill="#3A416F"
              />
            </svg>
          </div>

          <span className="ml-[10px] mt-[2px] text-[12px]">Payments</span>
        </div>
        <div
          onClick={() => handelActive(4)}
          className={` ${
            tabIndex == 4 ? "bg-[#6D6CE3] text-[#fff] " : ""
          } flex mt-[10px] transition-all rounded-[15px] hover:text-[#fff] hover:bg-[#6D6CE3]   p-[10px] items-center lg:w-full w-[143px]`}
        >
          <div className="bg-white p-[10px] flex justify-center items-center rounded-[12px]">
            <svg
              // className="w-[15px]"
              xmlns="http://www.w3.org/2000/svg"
              width="15px"
              height="15px"
              viewBox="0 0 14 15"
              fill="none"
            >
              <path
                d="M0.184865 9.27952L1.26598 8.40445C1.21481 8.10756 1.1884 7.80441 1.1884 7.50127C1.1884 7.19812 1.21481 6.89497 1.26598 6.59808L0.184865 5.72302C0.103321 5.65693 0.0449581 5.56891 0.0175381 5.47065C-0.00988197 5.3724 -0.00505924 5.26858 0.0313635 5.17298L0.0462179 5.13235C0.343848 4.34484 0.789523 3.6148 1.36171 2.97752L1.39142 2.9447C1.46083 2.86743 1.55335 2.81189 1.65677 2.78539C1.76019 2.75889 1.86966 2.76268 1.97076 2.79625L3.31266 3.24785C3.80783 2.86345 4.36077 2.5603 4.95827 2.34778L5.2174 1.01957C5.23695 0.919626 5.28816 0.827683 5.36423 0.755952C5.44029 0.684221 5.5376 0.636098 5.64325 0.617977L5.68781 0.610164C6.54775 0.463279 7.45225 0.463279 8.31219 0.610164L8.35675 0.617977C8.4624 0.636098 8.55971 0.684221 8.63578 0.755952C8.71184 0.827683 8.76305 0.919626 8.7826 1.01957L9.04339 2.35403C9.63612 2.56659 10.1881 2.86958 10.6774 3.25097L12.0292 2.79625C12.1303 2.76241 12.2399 2.75849 12.3433 2.785C12.4468 2.81152 12.5393 2.86722 12.6086 2.9447L12.6383 2.97752C13.2098 3.61525 13.6554 4.34517 13.9538 5.13235L13.9686 5.17298C14.0429 5.36831 13.9818 5.58707 13.8151 5.72302L12.7208 6.60746C12.772 6.90123 12.7967 7.20125 12.7967 7.4997C12.7967 7.79973 12.772 8.09975 12.7208 8.39195L13.8151 9.27639C13.8967 9.34248 13.955 9.4305 13.9825 9.52875C14.0099 9.62701 14.0051 9.73083 13.9686 9.82643L13.9538 9.86706C13.655 10.6546 13.2127 11.3812 12.6383 12.0219L12.6086 12.0547C12.5392 12.132 12.4467 12.1875 12.3432 12.214C12.2398 12.2405 12.1303 12.2367 12.0292 12.2032L10.6774 11.7484C10.1856 12.1313 9.63593 12.4344 9.04339 12.6454L8.7826 13.9798C8.76305 14.0798 8.71184 14.1717 8.63578 14.2435C8.55971 14.3152 8.4624 14.3633 8.35675 14.3814L8.31219 14.3892C7.44435 14.5369 6.55565 14.5369 5.68781 14.3892L5.64325 14.3814C5.5376 14.3633 5.44029 14.3152 5.36423 14.2435C5.28816 14.1717 5.23695 14.0798 5.2174 13.9798L4.95827 12.6516C4.36101 12.4397 3.80495 12.1355 3.31266 11.7516L1.97076 12.2032C1.86969 12.237 1.76014 12.2409 1.65666 12.2144C1.55317 12.1879 1.46066 12.1322 1.39142 12.0547L1.36171 12.0219C0.787317 11.3797 0.344969 10.6546 0.0462179 9.86706L0.0313635 9.82643C-0.0429106 9.63423 0.0181589 9.41546 0.184865 9.27952ZM2.43787 6.78247C2.39661 7.01842 2.37515 7.26063 2.37515 7.50283C2.37515 7.74503 2.39661 7.98724 2.43787 8.22319L2.54681 8.8498L1.31384 9.8483C1.50076 10.256 1.73669 10.6419 2.01698 10.9984L3.54869 10.4843L4.06697 10.8874C4.46145 11.1937 4.9005 11.4344 5.37586 11.6031L6.00472 11.8266L6.30017 13.3423C6.76633 13.3923 7.23697 13.3923 7.70314 13.3423L7.99858 11.8234L8.62249 11.5969C9.0929 11.4281 9.5303 11.1875 9.92148 10.8828L10.4398 10.478L11.9814 10.9968C12.262 10.639 12.4963 10.253 12.6845 9.84674L11.4383 8.83886L11.5456 8.21382C11.5852 7.98099 11.6067 7.74035 11.6067 7.50283C11.6067 7.26375 11.5869 7.02467 11.5456 6.79184L11.4383 6.1668L12.6845 5.15892C12.498 4.75108 12.262 4.36667 11.9814 4.00884L10.4398 4.52762L9.92148 4.12291C9.5303 3.8182 9.0929 3.57756 8.62249 3.4088L7.99693 3.18534L7.70149 1.66649C7.23768 1.61648 6.76397 1.61648 6.29851 1.66649L6.00307 3.18222L5.3742 3.40567C4.9005 3.57443 4.4598 3.81507 4.06532 4.12135L3.54704 4.5245L2.01533 4.0104C1.73473 4.36824 1.50036 4.7542 1.31219 5.16048L2.54516 6.15899L2.43787 6.78247ZM6.99835 4.59638C8.60269 4.59638 9.90332 5.82771 9.90332 7.34657C9.90332 8.86542 8.60269 10.0968 6.99835 10.0968C5.39401 10.0968 4.09338 8.86542 4.09338 7.34657C4.09338 5.82771 5.39401 4.59638 6.99835 4.59638ZM5.69111 8.58416C5.86257 8.74694 6.06633 8.87603 6.29068 8.96399C6.51502 9.05195 6.75553 9.09705 6.99835 9.09669C7.49186 9.09669 7.95567 8.91387 8.30559 8.58416C8.47754 8.42183 8.61389 8.22893 8.7068 8.01654C8.79971 7.80414 8.84735 7.57645 8.84697 7.34657C8.84697 6.87935 8.65385 6.44026 8.30559 6.10898C7.95567 5.77771 7.49186 5.59645 6.99835 5.59645C6.50483 5.59645 6.04103 5.77771 5.69111 6.10898C5.51916 6.2713 5.38281 6.46421 5.2899 6.6766C5.19699 6.88899 5.14935 7.11668 5.14973 7.34657C5.14973 7.81379 5.34284 8.25288 5.69111 8.58416Z"
                fill="#3A416F"
              />
            </svg>
          </div>

          <span className="ml-[10px] mt-[2px] text-[12px]">
            Project Setting
          </span>
        </div>
        <div
          onClick={() => handelActive(5)}
          className={` ${
            tabIndex == 5 ? "bg-[#6D6CE3] text-[#fff] " : ""
          } flex mt-[10px] transition-all rounded-[15px] hover:text-[#fff] hover:bg-[#6D6CE3]   p-[10px] items-center lg:w-full w-[143px] ml-[10px] lg:ml-0`}
        >
          <div className="bg-white p-[10px] flex justify-center items-center rounded-[12px]">
            <svg
              // className="w-[15px]"
              xmlns="http://www.w3.org/2000/svg"
              width="15px"
              height="15px"
              viewBox="0 0 14 15"
              fill="none"
            >
              <path
                d="M0.184865 9.27952L1.26598 8.40445C1.21481 8.10756 1.1884 7.80441 1.1884 7.50127C1.1884 7.19812 1.21481 6.89497 1.26598 6.59808L0.184865 5.72302C0.103321 5.65693 0.0449581 5.56891 0.0175381 5.47065C-0.00988197 5.3724 -0.00505924 5.26858 0.0313635 5.17298L0.0462179 5.13235C0.343848 4.34484 0.789523 3.6148 1.36171 2.97752L1.39142 2.9447C1.46083 2.86743 1.55335 2.81189 1.65677 2.78539C1.76019 2.75889 1.86966 2.76268 1.97076 2.79625L3.31266 3.24785C3.80783 2.86345 4.36077 2.5603 4.95827 2.34778L5.2174 1.01957C5.23695 0.919626 5.28816 0.827683 5.36423 0.755952C5.44029 0.684221 5.5376 0.636098 5.64325 0.617977L5.68781 0.610164C6.54775 0.463279 7.45225 0.463279 8.31219 0.610164L8.35675 0.617977C8.4624 0.636098 8.55971 0.684221 8.63578 0.755952C8.71184 0.827683 8.76305 0.919626 8.7826 1.01957L9.04339 2.35403C9.63612 2.56659 10.1881 2.86958 10.6774 3.25097L12.0292 2.79625C12.1303 2.76241 12.2399 2.75849 12.3433 2.785C12.4468 2.81152 12.5393 2.86722 12.6086 2.9447L12.6383 2.97752C13.2098 3.61525 13.6554 4.34517 13.9538 5.13235L13.9686 5.17298C14.0429 5.36831 13.9818 5.58707 13.8151 5.72302L12.7208 6.60746C12.772 6.90123 12.7967 7.20125 12.7967 7.4997C12.7967 7.79973 12.772 8.09975 12.7208 8.39195L13.8151 9.27639C13.8967 9.34248 13.955 9.4305 13.9825 9.52875C14.0099 9.62701 14.0051 9.73083 13.9686 9.82643L13.9538 9.86706C13.655 10.6546 13.2127 11.3812 12.6383 12.0219L12.6086 12.0547C12.5392 12.132 12.4467 12.1875 12.3432 12.214C12.2398 12.2405 12.1303 12.2367 12.0292 12.2032L10.6774 11.7484C10.1856 12.1313 9.63593 12.4344 9.04339 12.6454L8.7826 13.9798C8.76305 14.0798 8.71184 14.1717 8.63578 14.2435C8.55971 14.3152 8.4624 14.3633 8.35675 14.3814L8.31219 14.3892C7.44435 14.5369 6.55565 14.5369 5.68781 14.3892L5.64325 14.3814C5.5376 14.3633 5.44029 14.3152 5.36423 14.2435C5.28816 14.1717 5.23695 14.0798 5.2174 13.9798L4.95827 12.6516C4.36101 12.4397 3.80495 12.1355 3.31266 11.7516L1.97076 12.2032C1.86969 12.237 1.76014 12.2409 1.65666 12.2144C1.55317 12.1879 1.46066 12.1322 1.39142 12.0547L1.36171 12.0219C0.787317 11.3797 0.344969 10.6546 0.0462179 9.86706L0.0313635 9.82643C-0.0429106 9.63423 0.0181589 9.41546 0.184865 9.27952ZM2.43787 6.78247C2.39661 7.01842 2.37515 7.26063 2.37515 7.50283C2.37515 7.74503 2.39661 7.98724 2.43787 8.22319L2.54681 8.8498L1.31384 9.8483C1.50076 10.256 1.73669 10.6419 2.01698 10.9984L3.54869 10.4843L4.06697 10.8874C4.46145 11.1937 4.9005 11.4344 5.37586 11.6031L6.00472 11.8266L6.30017 13.3423C6.76633 13.3923 7.23697 13.3923 7.70314 13.3423L7.99858 11.8234L8.62249 11.5969C9.0929 11.4281 9.5303 11.1875 9.92148 10.8828L10.4398 10.478L11.9814 10.9968C12.262 10.639 12.4963 10.253 12.6845 9.84674L11.4383 8.83886L11.5456 8.21382C11.5852 7.98099 11.6067 7.74035 11.6067 7.50283C11.6067 7.26375 11.5869 7.02467 11.5456 6.79184L11.4383 6.1668L12.6845 5.15892C12.498 4.75108 12.262 4.36667 11.9814 4.00884L10.4398 4.52762L9.92148 4.12291C9.5303 3.8182 9.0929 3.57756 8.62249 3.4088L7.99693 3.18534L7.70149 1.66649C7.23768 1.61648 6.76397 1.61648 6.29851 1.66649L6.00307 3.18222L5.3742 3.40567C4.9005 3.57443 4.4598 3.81507 4.06532 4.12135L3.54704 4.5245L2.01533 4.0104C1.73473 4.36824 1.50036 4.7542 1.31219 5.16048L2.54516 6.15899L2.43787 6.78247ZM6.99835 4.59638C8.60269 4.59638 9.90332 5.82771 9.90332 7.34657C9.90332 8.86542 8.60269 10.0968 6.99835 10.0968C5.39401 10.0968 4.09338 8.86542 4.09338 7.34657C4.09338 5.82771 5.39401 4.59638 6.99835 4.59638ZM5.69111 8.58416C5.86257 8.74694 6.06633 8.87603 6.29068 8.96399C6.51502 9.05195 6.75553 9.09705 6.99835 9.09669C7.49186 9.09669 7.95567 8.91387 8.30559 8.58416C8.47754 8.42183 8.61389 8.22893 8.7068 8.01654C8.79971 7.80414 8.84735 7.57645 8.84697 7.34657C8.84697 6.87935 8.65385 6.44026 8.30559 6.10898C7.95567 5.77771 7.49186 5.59645 6.99835 5.59645C6.50483 5.59645 6.04103 5.77771 5.69111 6.10898C5.51916 6.2713 5.38281 6.46421 5.2899 6.6766C5.19699 6.88899 5.14935 7.11668 5.14973 7.34657C5.14973 7.81379 5.34284 8.25288 5.69111 8.58416Z"
                fill="#3A416F"
              />
            </svg>
          </div>
          <span className="ml-[10px] mt-[2px] text-[12px]">Main Settings</span>
        </div>
      </div>
    </div>
  );
};
export default Tabs;
