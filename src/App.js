import "./App.css";
import { CardFour } from "./components/CardFour";
import { CardOne } from "./components/CardOne";
import { CardThree } from "./components/CardThree";
import { CardTwo } from "./components/CardTwo";

function App() {
  return (
    <>
      <div className="App">
        {/* <Hedding /> */}

        <section className="features">
          <div className="header">
            <p className="first-paragraph">Reliable, efficient delivery</p>
            <h2>Powered by Technology</h2>
            <p>
              Our Artificial Intelligence powered tools use millions of project
              data points to ensure your project is successful
            </p>
          </div>

          <div className="grid">
            <CardOne />
            <div className="middle-card">
              <CardTwo />
              <CardThree />
            </div>
            <CardFour />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
<div>
  <p className="attribution">
    Challenge by
    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
      Frontend Mentor
    </a>
    . Coded by <a href="#">Your Name Here</a>.
  </p>
</div>;
