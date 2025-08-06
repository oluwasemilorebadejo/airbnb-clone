import Header from "./components/Header";
import SearchSection from "./components/SearchSection";
import PropertyGrid from "./components/PropertyGrid";
import InspirationSection from "./components/InspirationSection";
import Footer from "./components/Footer";
import { londonProperties, capeTownProperties } from "./data/mockData";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchSection />
      <PropertyGrid
        title="Popular homes in London"
        properties={londonProperties}
      />
      <PropertyGrid
        title="Available next month in Cape Town"
        properties={capeTownProperties}
      />
      <InspirationSection />
      <Footer />
    </div>
  );
}

export default App;
