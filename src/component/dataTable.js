import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';

class Datatable extends Component {

    constructor(props) {
        super();
        
        this.data = "";

        this.traerDatos.bind(this);
            
    }

    traerDatos() {
        axios.get(`http://127.0.0.1:8000/api/datatableinfo`)
            .then(res => {
                this.data = res.data['dataTableInfo'];
            });

    }

    componentDidMount() {

        this.traerDatos();

    }
    
    render(){
        console.log("datatable"+this.data);
        return (
            <MDBDataTable
              striped
              bordered
              hover
              data={this.data}
            />
          );
    }
}
export default Datatable;