import "./App.css";
import RS from "./components/RS.jsx";
import PageWrapper from "./components/PageWrapper";
import Form from "./pages/Form.jsx";
import Home from "./pages/Home.jsx";
import ExecutiveMangers from "./pages/ExecutiveMangers.jsx";
import BoardMembers from "./pages/BoardMembers.jsx";
import Training from "./pages/Training.jsx";
import Details from "./pages/Details";
import AboutEFCF from "./pages/AboutEFCF.jsx";
import Lists from "./pages/Lists.jsx";
import Laws from "./pages/Laws.jsx";

import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import ImageList1 from "./components/ImageList1.jsx";
import ImageList2 from "./components/ImageList2.jsx";
import ImageList3 from "./components/ImageList3.jsx";
function App() {
  return (
    <div className="App">
      <PageWrapper>
        {/* <ImageList2></ImageList2> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/mangers" element={<ExecutiveMangers />} />
          <Route path="/members" element={<BoardMembers />} />
          <Route path="/about" element={<AboutEFCF />} />
          <Route path="/training" element={<Training />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/laws" element={<Laws />} />
          <Route path="/details/:number" element={<Details />} />
          <Route path="/img-list1" element={<ImageList1 />} />
          <Route path="/img-list2" element={<ImageList2 />} />
          <Route path="/img-list3" element={<ImageList3 />} />
        </Routes>
      </PageWrapper>
    </div>
  );
}

export default App;
