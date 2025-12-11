import Banner from "../layouts/Banner";
import Clientreview from "../layouts/Clientreview";
import Ourcreative from "../layouts/Ourcreative";
import Ourlatest from "../layouts/Ourlatest";

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
      <Ourlatest/>
    </>
  );
};

export default Home;
