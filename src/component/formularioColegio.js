import React, { Component } from 'react';
import axios from 'axios';


class FormularioInstituto extends Component {

    constructor(props){
        super(props);

        this.state={
            name:'',
            description:''
            
        };
    }

    actualizar=()=>{
        this.props.actualizar();
     }

        autoCarga=(e)=>{

            this.setState({[e.target.name]:e.target.value})
        }

        onSubmit=(e)=>{

            axios.post('http://127.0.0.1:8000/api/institutions', {
            name: this.state.name,
            description: this.state.description,

          })
          .then(function (response) {

            
        }).then((actualizar) => {
            this.actualizar();
        });
            e.preventDefault();
        
    }
    
    
    render(){

        console.log(this.state)
    return <div>
            <form  onSubmit={this.onSubmit}>

            <div class="form-group">
             <label for="exampleInputEmail1">Nombre Instituto</label>
                    <input type="text" class="form-control" value={this.state.name} name="name" onChange={this.autoCarga} />
                 </div>
                 <div class="form-group">
                    <label for="exampleInputEmail1">Descripcion Instituto</label>
                    <input type="text" class="form-control"  value={this.state.description} name="description" onChange={this.autoCarga}/>
                 </div>

                 <input type="submit" value="enviar"/>
            </form>
        </div>
        
    
    }
}



export default FormularioInstituto;