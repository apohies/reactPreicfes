import React, { Component } from 'react';


class Caja1 extends Component {
    
    
    render(){
        
    const a=this.props.parametros;

        return <div className="col-md-3"><div className="card" style={{width: "18rem"}}>
             <div className="card-body">
    <h5 className="card-title">{a.nombre_institucion}</h5>
    <p className="card-text">{a.info_institucion}</p>
       
        </div>
        </div>
        </div>
      
    }
}



export default Caja1;