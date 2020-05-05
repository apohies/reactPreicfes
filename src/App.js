import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Caja1 from './component/caja1';
import FormularioInstituto from './component/formularioColegio';
import axios from 'axios';


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
                </div>
        
    </div> 


    //return  this.props.tasks.map(tasks => <Tarea tasks={tasks} key={tasks.id}/>);
        
        
        

    
}
}





export default App;