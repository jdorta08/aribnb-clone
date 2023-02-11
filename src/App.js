import Navbar from "./Components/Navbar";
import "./Styles/global.scss";
import Card from "./Components/Card";
import data from "./Components/data";
import Hero from "./Components/Hero";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div className="App">
      <Navbar />
      <section>
        <Hero />
      </section>
      <section className="card--container">{cards}</section>
    </div>
  );
}

export default App;
