import React, { Component } from 'react';
import axios from "axios";
import FormularioInstituto from './component/formularioColegio';
import Caja1 from './component/caja1';
import Datatable from './component/dataTable';


class App extends Component 
{

    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
        this.traerDatos = this.traerDatos.bind(this);

    }


    traerDatos() {
        axios.get(`http://127.0.0.1:8000/api/institutions`)
            .then(res => {
                this.setState({ items: res.data['instituciones'] });
            });

    }


    componentDidMount() {

        this.traerDatos();

    }


    render(){
        
        return <div className="card">
        <FormularioInstituto actualizar={this.traerDatos}></FormularioInstituto>
                <div className="card-header"> Todo los colegios</div>
                <div className="card-body">
                <div className="row">
                {this.state.items.map(intitution=><Caja1 parametros={intitution}></Caja1>)}
                 </div>
                <Datatable></Datatable>   
                </div>
                </div>
    
    }
}
export default App;