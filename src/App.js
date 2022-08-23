import Header from "./components/Header";
import Restaurants from "./components/Restaurants";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="container-sm">
      <Header />
      <SearchBar />
      <Restaurants />
    </div>
  );
}

export default App;
