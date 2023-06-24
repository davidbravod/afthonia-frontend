import Banner from '../../components/Seo/Banner';
import Marketing from '../../components/Seo/Marketing';
import PricingSeo from '../../components/Seo/PricingSeo';
import Seo from '../../components/Seo/Seo';
import SeoWork from '../../components/Seo/SeoWork';
import Specialization from '../../components/Seo/Specialization';

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