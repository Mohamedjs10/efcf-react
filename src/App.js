import "./App.css";
import Paginator from "./components/Paginator.jsx";
import PageWrapper from "./components/PageWrapper";
import Form from "./pages/Form.jsx";
import Home from "./pages/Home.jsx";
import ExecutiveMangers from "./pages/ExecutiveMangers.jsx";
import BoardMembers from "./pages/BoardMembers.jsx";
import Training from "./pages/Training.jsx";

import AboutEFCF from "./pages/AboutEFCF.jsx";
import Lists from "./pages/Lists.jsx";
import Laws from "./pages/Laws.jsx";
import BurgerMenu from "./components/BurgerMenu";
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  Fragment,
} from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <PageWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/mangers" element={<ExecutiveMangers />} />
          <Route path="/members" element={<BoardMembers />} />
          <Route path="/about" element={<AboutEFCF />} />
          <Route path="/training" element={<Training />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/laws" element={<Laws />} />
        </Routes>
      </PageWrapper>
    </div>
  );
}

export default App;
