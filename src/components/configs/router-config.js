import React, { Component } from "react";
import { BrowserRouter as Router  } from 'react-router-dom';
import AppRoutes from "./routes";

export class Routers extends Component {

  render() {

    return (
      <Router>       
          <AppRoutes />
        </Router>   
    );
  }
};

export default Routers
