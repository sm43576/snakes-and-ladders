import "../css/HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-page">
      <h1 className="title">Seaweed and Bubbles</h1>

      <Link to="/players">
        <button className="button-start">PLAY</button>
      </Link>

      <img className="waves-container" src="../src/assets/start_waves.png" />
    </div>
  );
}

export default HomePage;
