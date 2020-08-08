import React from "react";
import "./styles.css";
import CourseManagementView from "./View/CourseManagementBoard/CourseManagementView.js";
import { Route, Switch, BrowserRouter } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/dashboard" component={CourseManagementView} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
