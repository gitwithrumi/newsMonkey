import "./App.css";

import React, { useState } from "react";
import Navbar from "./COMPONENTS/Navbar";
import News from "./COMPONENTS/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
 const pageSize = 6;
 const apiKey= '40c2033ee65c4829afdee2ea49bfedc3';
  const [progress, setProgress] = useState(10);
  const country = "us";
  
    return (
      <div>
        
        <Router>
          <Navbar />
          <LoadingBar color="#f11946" progress={progress} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="general"
                  country={country}
                  pageSize={pageSize} 
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/"
              element={
                <News
                  
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="general"
                  pageSize={pageSize}
                   country={country} 
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="business"
                  pageSize={pageSize}
                   country={country}
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="entertainment"
                  pageSize={pageSize}
                   country={country}
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="general"
                  pageSize={pageSize}
                   country={country}
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="health"
                  pageSize={pageSize}
                   country={country}
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="science"
                  pageSize={pageSize}
                   country={country}
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="sports"
                  pageSize={pageSize}
                   country={country}
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="technology"
                  pageSize={pageSize}
                   country={country}
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  
}

export default App;
