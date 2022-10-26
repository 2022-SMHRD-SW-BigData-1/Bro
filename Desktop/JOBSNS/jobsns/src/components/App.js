import "../styles/App.scss";
import Header from "./Header";
import Cards from "./Cards";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Login from "../components/Login.js";

function App() {
  return (
    // <Login></Login>
    <div className="App">
      <Header />
      <main>
        <div className="container">
          <Cards />
          <Sidebar />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
