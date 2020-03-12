import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddEditForm extends React.Component {
    state = {
        nome: '',
        crm: '',
        telefone: '',
        cidade: '',
        estado: '',
        especialidade: '',
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitFormAdd = e => {
        e.preventDefault()
        fetch('http://localhost:3333/create', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: this.state.nome,
                telefone: this.state.telefone,
                cidade: this.state.cidade,
                crm: this.state.crm,
                estado: this.state.estado,
                especialidade: this.state.especialidade
            })
        })
            .then(response => response.json())
            .then(item => {



            })
            .catch(err => console.log(err))
    }

    // submitFormEdit = e => {
    //     e.preventDefault()
    //     fetch(`http://localhost:3333/${this.state.crm}/update`, {
    //         method: 'put',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             nome: this.state.nome,
    //             telefone: this.state.telefone,
    //             cidade: this.state.cidade,
    //             estado: this.state.estado,
    //             especialidade: this.state.especialidade,
    //             crm: this.state.crm
    //         })
    //     }).then(response => console.log(response))

    // }

    componentDidMount() {
        // if item exists, populate the state with proper data
        if (this.props.item) {
            const { nome, crm, telefone, cidade, estado, especialidade } = this.props.item
            this.setState({ nome, crm, telefone, cidade, estado, especialidade })
        }
    }

    render() {
        return (
            <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
                <FormGroup>
                    <Label for="nome">Nome</Label>
                    <Input type="text" name="nome" id="nome" onChange={this.onChange} value={this.state.nome === null ? '' : this.state.nome} />
                </FormGroup>
                <FormGroup>
                    <Label for="crm">CRM</Label>
                    <Input type="text" name="crm" id="crm" onChange={this.onChange} value={this.state.crm === null ? '' : this.state.crm} />
                </FormGroup>
                <FormGroup>
                    <Label for="telefone">Telefone</Label>
                    <Input type="text" name="telefone" id="telefone" onChange={this.onChange} value={this.state.telefone === null ? '' : this.state.telefone} placeholder="ex. 555-555-5555" />
                </FormGroup>
                <FormGroup>
                    <Label for="cidade">Cidade</Label>
                    <Input type="text" name="cidade" id="cidade" onChange={this.onChange} value={this.state.cidade === null ? '' : this.state.cidade} placeholder="City, State" />
                </FormGroup>
                <FormGroup>
                    <Label for="estado">Estado</Label>
                    <Input type="text" name="estado" id="estado" onChange={this.onChange} value={this.state.estado === null ? '' : this.state.estado} />
                </FormGroup>

                <FormGroup>
                    <Label for="especialiade">Especialidade</Label>
                    <Input type="text" name="especialidade" id="especialidade" onChange={this.onChange} value={this.state.especialidade == null ? '' : this.state.especialidade} />
                </FormGroup>

                <Button>Submit</Button>
            </Form>
        );
    }
}

export default AddEditForm