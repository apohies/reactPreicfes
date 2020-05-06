import React, { Component } from 'react';
import axios from "axios";
import FormularioInstituto from './component/formularioColegio';
import Caja1 from './component/caja1';
import Datatable from './component/dataTable';
import Modal from './component/modal/Modal';
import Modal1 from './component/modal/Modal1';


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
                    { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

                    <button className="open-modal-btn" onClick={this.openModalHandler}>Open Modal</button>

                    <Modal1
                        className="modal"
                        show={this.state.isShowing}
                        close={this.closeModalHandler}>
                        Cuerpo Modal Clase
                    </Modal1>
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