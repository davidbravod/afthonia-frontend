import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import Image from "next/image";
import Link from "next/link";
import { services } from "../../data/service";

const AllService = () => {
  const { store, actions } = useContext(Context);

  return (
    <section className="bg-white">
      <div className="max-w-[1296px] justify-center mx-auto pt-[70px] md:pt-[120px] pb-[70px] lg:pb-[277px] flex flex-col md:flex-row flex-wrap gap-6">
        {services.map(({ id, title, desc, img, url }) => (
          <div
            className="md:w-[413px] mx-3 md:mx-0 text-[#222] shadow-lg rounded-md"
            key={id}
          >
            <Image
              className="rounded-t-md zoom rounded-md"
              src={img}
              height={263}
              width={414}
              alt="service img"
            />
            <div className="px-5 md:px-[30px] pt-4 pb-9">
              <h5 className="heading-5 mb-4 md:mb-[23px]">{title}</h5>
              <p className="mb-7 md:mb-10 paragraph-default">{desc}</p>
              <Link href={url}>
              <a className="hover:text-white duration-300 border-black border-[1px] hover:border-[var(--color-primary)] paragraph-default px-5 hover:shadow-lg hover:shadow-[#ff524987] py-2 rounded hover:bg-[#FF5744]">
                View details
              </a>
              </Link>
            </div>
          </div>        
        ))}
      </div>
    </section>
  );
};

export default AllService;
