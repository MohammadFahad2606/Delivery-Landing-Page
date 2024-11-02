import Header from "../Computent/Header/Header";
import Banner from "../Computent/Banner/Banner";
import { banner1, banner2, banner3 } from "../utils/constant/bannerText";
import Card from "../Computent/common/card/card";
import "./home.css";
const Home = () => {
  return (
    <div>
      <Header />
      <Banner data={banner1} />
      <Banner isrotate data={banner2} />
      <Banner data={banner3} />
      <h1>Some Services We Offer</h1>
      <div className="card-wapper">
        <Card />
      </div>
    </div>
  );
};

export default Home;
