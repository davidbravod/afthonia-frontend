import Image from "next/image";
import Link from "next/link";
import { blogs } from "../../data/blog";

const AllBlog = () => {
  return (
    <section className="bg-white bg-[url('/images/blog/bg.png')] bg-contain bg-no-repeat bg-right-bottom">
      <div className="max-w-[1296px] mx-auto pt-9 md:pt-[82px] pb-[70px] lg:pb-[280px]">
        <div className="mx-3 xl:mx-0">
          <div className="xl:max-w-[640px] text-center xl:text-start mx-3 lg:mx-0 ">
            <h1 className="heading-1 text-[#222] my-[25px]">
              Blog Post
            </h1>
            <p className="paragraph-default mb-9 md:mb-[55px] md:mx-20 xl:mx-0">
              With our integrated CRM, project management, collaboration and
              invoicing capabilities, you can manage your business in one secure
              platform.
            </p>
          </div>
        </div>
        <div className="flex mx-3 lg:mx-0 justify-center flex-col gap-6 flex-wrap md:flex-row">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white p-4 md:w-[416px] rounded-md shadow-lg"
            >
              <Link href={`/blog/${blog.id}`}>
                <div className="cursor-pointer">
                  <Image
                    src={blog.images[0]}
                    width={385}
                    height={253}
                    className="zoom"
                    alt="blog img"
                  />
                  <div className="md:px-[15px] pb-1 md:pb-2 pt-1">
                    <p className="text-[#222] figure-caption gap-1 flex items-center">
                      {blog.author} •{blog.date}
                    </p>
                    <h5 className="heading-5 text-[#222]  mt-2 md:mt-5 mb-3">
                      {blog.title}
                    </h5>
                    <p className="text-[#222] paragraph-default mb-3 md:mb-5">
                      {blog.text.substring(0, 100)}
                    </p>
                    <a className="text-[var(--color-primary)] paragraph-default">Read More</a>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center text-[#222] duration-300 gap-5 mt-10 md:mt-[60px]">
          {["1", "2", ">"].map((item) => (
            <Link href="#" key={item}>
              <a className=" hover:bg-[var(--color-primary)] paragraph-large duration-300 hover:text-white w-12 h-12 items-center flex justify-center bg-[#D3D3D3]">
                {item}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllBlog;
