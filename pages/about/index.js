import About from "../../componentsaAbout/About";
import Banner from "../../components/about/Banner";
import Team from "../../components/about/Team";
import Clients from "../../components/about/ClientsLove";
import Testimonial from "../../components/homepage/testimonial/Testimonial";

const index = () => {
  return (
    <>
      <Banner />
      <About />
      <Team />
      {/* <Testimonial />
      <Clients /> */}
    </>
  );
};

export default index;
