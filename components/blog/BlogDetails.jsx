import Image from "next/image";
import { useRouter } from "next/router";
import { FiSearch } from "react-icons/fi";
import { blogs } from "../../data/blog";
import { HiOutlineChevronRight } from "react-icons/hi";
const BlogDetails = () => {
  const { query } = useRouter();
  const blog = blogs.find((item) => item.id == query.id);

  return (
    <section className="bg-white">
      <div className="max-w-[1296px] xl:mx-auto grid grid-cols-12 gap-3 mx-3">
        <div className="mt-7 sm:mt-[60px] lg:mt-[120px] lg:mb-[275px]  col-span-12 lg:col-span-9">
          <Image
            src={blog?.images[0]}
            className="rounded-md "
            height={551}
            width={896}
            alt="blog img"
          />
          <p className="mt-[20px] text-[#444] mb-3">
            {blog?.author} • {blog?.date}
          </p>
          <h2 className="text-[#242424]  mb-6 heading-2">
            {blog?.title}
          </h2>
          <div className="xl:w-10/12 text-[#444] paragraph-default text-justify">
            <p className="mb-7 md:mb-[40px]">
              {blog?.text.split(".").slice(0, 2).join("")}
            </p>
            <div className="border-l-2 mb-[40px] border-[var(--color-primary)]">
              <p className="text-lg md:text-2xl leading-tight md:leading-[31px] font-semibold text-[#222] px-[25px]">
                {blog?.quote?.text}
              </p>
              <p className="text-lg text-[#444] px-[25px] font-medium mt-3">
                - {blog?.quote?.designation}
              </p>
            </div>
            <p className="mb-9 md:mb-[55px]">
              {blog?.text.split(".").slice(2, 4).join("")}
            </p>
            <Image
              src={blog?.images[1]}
              className="rounded-md "
              height={501}
              width={896}
              alt="blog img"
            />
            <p className="mb-5 md:mb-[44px] lg:mb-0 mt-4">
              {blog?.text.split(".").slice(4).join("")}
            </p>
          </div>
        </div>
        <div className="col-span-12 mx-3 lg:mx-0  lg:col-span-3 mt-4 lg:mt-[120px]">
          <div className="flex justify-between mb-7 xl:mb-[55px] w-[260px] xl:w-[306px] bg-[#F5F5F5] px-2 py-1 xl:px-5 xl:py-3 rounded-md">
            <input
              className="focus:outline-none w-full text-black bg-[#F5F5F5]"
              type="text"
              placeholder="Search..."
            />
            <div className="bg-[var(--color-primary)] p-2 shadow-lg shadow-[#ff52496c] rounded-lg">
              <FiSearch size={30} className=" text-white" />
            </div>
          </div>
          <h5 className="heading-5 mb-5 lg:mb-8 text-[#242424] ">
            Recent Post
          </h5>
          <div className="flex flex-col gap-3 md:gap-[18px] md:mb-5">
            {blogs.slice(3).map((blog) => (
              <div className="flex gap-3 md:gap-5" key={blog?.id}>
                <div className="xl:w-52 xl:h-32 ">
                  <Image
                    className="rounded shadow-lg"
                    width={150}
                    height={150}
                    src={blog?.images[0]}
                    alt="image"
                  />
                </div>
                <p className="paragraph-default text-[#222]">{blog?.title}</p>
              </div>
            ))}
          </div>
          <div className="mb-16">
            <h5 className="heading-5 mt-5 md:mt-10 mb-[10px] text-[#242424]">
              Post Category
            </h5>
            <ul>
              {["Marketing", "SEO", "SMM", "Business"].map((category) => (
                <li
                  className="flex text-[#444] gap-2 items-center paragraph-default mb-1"
                  key={category}
                >
                  <HiOutlineChevronRight color="#FF5349" /> {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
