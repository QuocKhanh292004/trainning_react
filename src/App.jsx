import { BrowserRouter as Router, Routes, Route } from "react-router";
import { publicRoutes } from "./routes/routes";
import { Fragment } from "react";
import React from "react";

import { DefaultLayout } from "./layout/defaultLayout";



function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout;
            const Page = route.component;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
