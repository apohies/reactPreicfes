import React, { Component } from 'react';
import General from "./component/general";
import ImageClass from  "./component/image/ImageClass";
import Datatable from "./component/dataTable";
import FormularioInstituto from "./component/formularioColegio";
import DatatablePage from "./component/dataTablePage";
import Chirri from "./chirri";
import { MDBDataTable } from 'mdbreact';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

  class App extends Component {


    render(){
    return (
      <Router>
        <div>
           
          <ul>
            <li>
              <Link to="/formulario">Formulario</Link>
            </li>
            <li>
              <Link to="/data">data</Link>
            </li>
            <li>
              <Link to="/capibara">Capibara</Link>
            </li>
          </ul>
  
         
          <Switch>
            <Route exact path="/formulario">
            <FormularioInstituto></FormularioInstituto>
            </Route>
           
            <Route path="/data">
        
             <Chirri></Chirri>
            </Route>

            <Route path="/capibara">
                    <ImageClass></ImageClass>
            </Route>

          </Switch>
        </div>
      </Router>
      
    );

    
  }

}

export default App;
  
  // You can think of these components as "pages"
  // in your app.
  




 
      

