import Banner from "../layouts/Banner";
import Clientreview from "../layouts/Clientreview";
import Ourcreative from "../layouts/Ourcreative";

import Ourservices from "../layouts/Ourservices";
import Whoweare from "../layouts/Whoweare";
import Workshowcase from "../layouts/Workshowcase";

const Home = () => {
  return (
    <>
      <Banner />
      <Ourservices />
      <Whoweare />
      <Workshowcase/>
      <Ourcreative/>
      <Clientreview/>
    </>
  );
};

export default Home;
