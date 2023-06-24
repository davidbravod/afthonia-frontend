import About from "../../components/About/About";
import Banner from "../../components/About/Banner";
import Team from "../../components/About/Team";
import Clients from "../../components/About/ClientsLove";
import Testimonial from "../../components/Homepage/Testimonial/Testimonial";

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
