import { Route, Routes } from "react-router-dom";
import "./App.css";
import Users from "./users";
import Navbar from "./Navbar";
import Home from './Home'

// const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About us </h1>;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />} >
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
      </Route>
    </Routes>
  );
}

export default App;
