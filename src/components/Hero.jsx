import { Link } from "react-router-dom";
import Banner from "../assets/img/Banner.avif";
import Logo from "./Logo";
import { ROUTES } from "./../utils/routes";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-img">
        <img src={Banner} alt="Banner" />
      </div>
      <div className="hero-decs container">
        <Logo />
        <h2 className="hero-title">The greatest story ever worn</h2>
        <p className="hero-content">
          Celebrating 150 years of the 5clothes 501 jean.
        </p>
        <div className="hero-nav">
          <Link className="hero-link" to={ROUTES.PRODUCT}>
            Shop mens 501 jeans
          </Link>
          <Link className="hero-link" to={ROUTES.PRODUCT}>
            Shop womens 501 jeans
          </Link>
          <Link className="hero-link" to={ROUTES.PRODUCT}>
            explores 501 stories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
