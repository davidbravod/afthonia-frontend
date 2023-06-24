import Image from "next/image";
import Link from "next/link";
import { blogs } from "../../../data/blog";
import {motion} from 'framer-motion'

const Blog = () => {
  return (
    <section className="bg-[#F9F9F9] bg-[url('/images/blog/bg.png')] bg-contain bg-no-repeat bg-right-bottom">
      <div className="max-w-[1296px] mx-auto pt-[65px] md:pt-[115px] pb-16 md:pb-[277px]">
        <div className="flex justify-center">
          <motion.div initial={{translateY:'20px', opacity:0}} whileInView={{translateY:0, opacity:1}} transition={{duration: .5}} className="max-w-[640px] text-center">
            <h5 className="heading-5 text-[var(--color-primary)]">Blog</h5>
            <h2 className="heading-2 mx-2 lg:mx-0 mt-4 md:mt-[20px] mb-2">
              Our Latest <span className="text-[var(--color-primary)]">Articles</span>
            </h2>
            <p className="paragraph-default mb-10 md:mb-[60px]">
              Lorem ipsum dolor sit amet.
            </p>
          </motion.div>
        </div>
        <div className="flex mx-2 flex-col gap-5 justify-center xl:justify-between flex-wrap md:flex-row">
          {blogs.slice(0, 3).map((blog) => (
            <div
              key={blog.id}
              className="bg-white px-4 pt-4 pb-2 md:w-[410px] rounded-md shadow-lg"
            >
              <Image
                src={blog.images[0]}
                width={385}
                height={253}
                alt="blog img"
                className="zoom"
              />
              <div className="p-[15px]">
                <p className="text-[#222] figure-caption mt-1 gap-1 flex items-center">
                  {blog.author} •{blog.date}
                </p>
                <h5 className="heading-5 text-[#222] mt-1 mb-[22px]">
                  {blog.title}
                </h5>
                <p className="paragraph-default mb-[20px]">
                  {blog.text.substring(0, 100)}
                </p>
                <Link href={`/blog/${blog.id}`}>
                  <a className="text-[#1A4DBE] paragraph-default">Read More</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
