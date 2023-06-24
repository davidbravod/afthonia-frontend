import PricingSeo from '../../components/seo/PricingSeo';
import Banner from '../../components/smm/Banner';
import FbMarketing from '../../components/smm/FbMarketing';
import MarketingProcess from '../../components/smm/MarketingProcess';
import Smm from '../../components/smm/Smm';

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