import React, { Component } from 'react';

class ImageClass extends Component {

  constructor() {
    super();
    this.state = {
      mostrar:true
    }
  }

  cambiarEstado(){
    this.setState({mostrar:!this.state.mostrar});
  }

  render() {
    const textoBoton = this.state.mostrar ? "Ocultar" : "Mostrar";
    return (
      <div>
        <button onClick={this.cambiarEstado.bind(this)}>
          {textoBoton}
        </button>
        {this.state.mostrar ? <img src="https://i.ytimg.com/vi/7xyWG7YVqhQ/hqdefault.jpg" width="100" height="100"/> : null}
      </div>
    );
  }
}
export default ImageClass;