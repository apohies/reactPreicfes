import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import axios from 'axios';

class Datatable extends Component {

    constructor() {
        super();
        
        this.state={
            data:""
        }

        this.traerDatos.bind(this);

       
            
    }

    traerDatos() {
        
        axios.get(`http://127.0.0.1:8000/api/datatableinfo`)
            .then(res => {
                this.setState({data:res.data['dataTableInfo']});
               
            });



    }

    componentDidMount() {

        this.traerDatos();

    }
    
    render(){
        console.log(this.data);
        return (
            <div>
                
            <MDBDataTable
              striped
              bordered
              hover
              data={this.state.data}
            />
            </div>
          );
    }
}
export default Datatable;