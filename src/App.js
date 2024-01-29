import logo from "./logo.svg";
import style from "./App.module.css";
import MenuList from "./components/MenuList";
import capsuleBackground from "../src/assets/bg-tablet-pattern.svg";
import MainSection from "./components/MainSection";
import Details from "./components/Details/Details";
import Testimonial from "./components/Testimonial";
import Message from "./components/Message";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{overflow: "hidden"}}>
      <div className={style.container}>
        <MenuList />
        <MainSection />
        <Details />
      </div>
      <div>
        <Testimonial />
      </div>
      <Message />
      <Footer />
      <div className={style.bgImg}>
        <img src={capsuleBackground} className={style.capsuleBg} />
      </div>
    </div>
  );
}

export default App;
