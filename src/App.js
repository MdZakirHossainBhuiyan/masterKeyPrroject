import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import './App.css';
import TopCart from "./components/TopCart/TopCart";

function App() {
  return (
    <div className="main">
      <div className="sidebar">
      <SideBar />
      </div>
      <div className="body">
        <Header />
        <div className="bodyMain">
          <div className="leftBody">
            <TopCart />
          </div>
          <div className="rightBody">

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
