import "./homePage.css";
import logo from "../../assets/images/logo.svg";
import NavBar from "../../components/NavBar";

function HomePage() {
  return (
    <section className="home-page">
      <section className="home-page__logo">
        <img src={logo} alt="Logo" className="home-page__img" />
        <h1 className="home-page__title">Where It's @</h1>
        <h3 className="home-page__text">Ticketing made easy</h3>
      </section>
      <NavBar />
    </section>
  );
}

export default HomePage;
