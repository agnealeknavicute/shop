import "./App.css";
import Banner from "./Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCom from "./Slider";
import Banner1k1 from "./Banner1k1";
import Categories from "./Categories";
import AboutUs from "./AboutUs";
import Banner1k1sec from "./Banner1k1(2)";
import Feedback from "./Feedback";
import RedLine from "./RedLine";
import BottomLinks from "./BottomLinks";
import Products from "./Products";
import Product from "./Product";
import Banner3 from "./Banner3";
import Header from "./Header";

function App() {
  return (
    <div className="App  mx-auto">
      <Header />
      <div className="max-w-[1475px] mx-auto">
        <Banner />
        <Products />
        <Product />
        <Banner3 />
        <SliderCom />
        <Banner1k1 />
        <Categories />
        <AboutUs />
        <Banner1k1sec />
        <Feedback />
        <RedLine />
        <BottomLinks />
      </div>
    </div>
  );
}

export default App;
