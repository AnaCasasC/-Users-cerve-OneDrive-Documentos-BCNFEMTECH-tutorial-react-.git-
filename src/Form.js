import React, { Component } from 'react';

class Form extends Component {
    state = {
        nombre: '',
        apellido: '',
    };

    gestionarCambio= (event) => {
        const { campo, valor} = event.target;

        this.setState({
            [campo]: valor,
        });
    }

    render() {
        const { nombre, apellido } = this.state;

        return (
            <form>
                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    value={nombre}
                    onChange={this.gestionarCambio} />
                <label htmlFor="apellido">Apellido</label>
                <input
                    type="text"
                    name="apellido"
                    id="apellido"
                    value={apellido}
                    onChange={this.gestionarCambio} />
                <input type="button" value="Enviar" onClick={this.enviarFormulario} />
            </form>
        );
    }
    enviarFormulario = () => {
        this.props.enviarFormulario(this.state);
        this.setState({
            nombre: '',
            apellido: '',
        });
    }

}

export default Form;