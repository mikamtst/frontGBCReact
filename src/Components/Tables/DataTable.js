import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from '../Modals/Modal'

class DataTable extends Component {

  deleteItem = crm => {
    let confirmDelete = window.confirm('Deletar médico?')
    if (confirmDelete) {
      fetch(`https://backgbc.herokuapp.com/medico/${crm}/delete`, {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          crm
        })
      })
        .then(response => response.json())
        .then(item => {
          console.log(item)
          this.props.deleteItemFromState(crm)
        })
        .catch(err => console.log(err))
    }

  }

  render() {

    const items = this.props.items.map(item => {

      return (
        <tr>
          <td>{item.nome}</td>
          <td>{item.crm}</td>
          <td>{item.telefone}</td>
          <td>{item.cidade}</td>
          <td>{item.estado}</td>
          <td>{item.especialidade}</td>
          <td>
            <div style={{ width: "110px" }}>
              <ModalForm buttonLabel="Editar" item={item} updateState={this.props.updateState} />
              {' '}
              <Button color="danger" onClick={() => this.deleteItem(item.crm)}>Deletar</Button>
            </div>
          </td>
        </tr>
      )
    })

    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CRM</th>
            <th>Telefone</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Especialidade</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </Table>
    )
  }
}

export default DataTable