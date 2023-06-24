import Banner from '../../components/seo/Banner';
import Marketing from '../../components/seo/Marketing';
import PricingSeo from '../../components/seo/PricingSeo';
import Seo from '../../components/seo/Seo';
import SeoWork from '../../components/seo/SeoWork';
import Specialization from '../../components/seo/Specialization';

const index = () => {
    return (
        <>
           <Banner />
           <Seo />
           <Marketing />
           <SeoWork />
           <Specialization />
           <PricingSeo />
        </>
    );
};

export default index;