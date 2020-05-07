import React, { Component } from 'react';
import axios from "axios";
import FormularioInstituto from './component/formularioColegio';
import Caja1 from './component/caja1';
import Datatable from './component/dataTable';
import ModalMDB from './component/modalMDB/ModalMDB'



class App extends Component 
{

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isShowing: false
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

    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

    render(){
        
        return <div className="card">
                    <ModalMDB></ModalMDB>
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