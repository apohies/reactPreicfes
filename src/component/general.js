import React, { Component } from 'react';
import axios from "axios";
import FormularioInstituto from './formularioColegio';
import Caja1 from './caja1';
import Datatable from './dataTable';
import ModalMDB from './modalMDB/ModalMDB';
import ImageClass from './image/ImageClass';



class General extends Component 
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
                    <ImageClass></ImageClass>
                    <FormularioInstituto actualizar={this.traerDatos}></FormularioInstituto>
                    <div className="card-header"> Todo los colegios</div>
                    <div className="card-body">
                        <div className="row">
                            {this.state.items.map(intitution=><Caja1 parametros={intitution}></Caja1>)}
                        </div>
                        {/* <Datatable></Datatable>    */}
                    </div>
                </div>
    
    }
}
export default General;