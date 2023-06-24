import PricingSeo from '../../components/Seo/PricingSeo';
import Banner from '../../components/Smm/Banner';
import FbMarketing from '../../components/Smm/FbMarketing';
import MarketingProcess from '../../components/Smm/MarketingProcess';
import Smm from '../../components/Smm/Smm';

const index = () => {
    return (
        <>
        <Banner />
        <Smm />
        <FbMarketing />
        <MarketingProcess />
        <PricingSeo />
        </>
    );
};

export default index;