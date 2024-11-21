import React from "react";
import Sphere from "../components/Sphere";
import Ellipses from "../components/Ellipses";

const DownloadApp = () => {
  return (
    <section className="md:flex md:items-center md:px-20 md:justify-around mt-12 w-[100vw] pl-5 max-sm:mx-auto">
      <div className="download-content space-y-7  md:space-y-10 max-sm:p-8 max-md:p-28 md:w-[40%]">
        <h1 className="font-bold text-4xl md:text-5xl md:leading-snug">
          DOWNLOAD APP & GET THE VOUCHER!
        </h1>
        <p className="w-[60%]">
          Get 30% off for first transaction using Rondovision mobile app for
          now.
        </p>
        <div className="flex items-center gap-5">
          <img
            className="w-36 cursor-pointer hover:-translate-y-1 duration-500"
            src="/appStore.png"
            alt="appStoreLogo"
          />
          <img
            className="w-36 cursor-pointer hover:-translate-y-1 duration-500"
            src="/playStore.png"
            alt="playStoreLogo"
          />
        </div>
      </div>
      <div className="download-img max-sm:ml-16 relative max-md:ml-40">
        {/* Spheres */}

        <Sphere className="mt-5 size-5 bg-grey top-5 -left-20" />
        <Sphere className="mt-5 size-6 bg-yellow top-14 -right-10 max-md:right-28 max-sm:right-16" />
        <Sphere className="mt-5 size-3 bg-grey bottom-16 -right-12 max-md:right-28" />
        <Sphere className="mt-5 size-4 bg-yellow bottom-5 -left-5" />

        <Ellipses className={`-ml-14`} />

        <img className="w-80" src="/mobileApp.png" alt="" />
      </div>
    </section>
  );
};

export default DownloadApp;
