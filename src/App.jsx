import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { About } from "./pages/About/About";
import { AboutPortal } from "./pages/AboutPortal/AboutPortal";
import { Contacts } from "./pages/Contacts/Contacts";
import { Paid } from "./pages/Paid/Paid";
import { PrivacyPolicy } from "./pages/PrivacyPolicy/PrivacyPolicy";
import { ProcessingData } from "./pages/ProcessingData/ProcessingData";
import { News } from "./pages/News/News";
import { CityOrganization } from "./pages/CityOrganization/CityOrganization";
import { Attractions } from "./pages/Attractions/Attractions";
import { Article } from "./pages/Article/Article";
import { Cooperation } from "./pages/Cooperation/Cooperation";
import { Advertising } from "./pages/Advertising/Advertising";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { SignIn } from "./pages/SignIn/SignIn";
import { SignUp } from "./pages/SignUp/SignUp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <BrowserRouter>
        {/* <Header /> */}
        <Navbar />
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/about-portal"} element={<AboutPortal />} />
          <Route path={"/contacts"} element={<Contacts />} />
          <Route path={"/paid"} element={<Paid />} />
          <Route path={"/privacy-policy"} element={<PrivacyPolicy />} />

          <Route path={"/processing-data"} element={<ProcessingData />} />

          <Route path={"/news"} element={<News />} />

          <Route path={"/city-organization"} element={<CityOrganization />} />

          <Route path={"/attractions"} element={<Attractions />} />
          <Route path={"/article"} element={<Article />} />

          <Route path={"/cooperation"} element={<Cooperation />} />
          <Route path={"/advertising"} element={<Advertising />} />

          <Route path={"/sign-in"} element={<SignIn />} />
          <Route path={"/sign-up"} element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
