Record = React.createClass({
  getInitialState(){
    return {edit: false}
  },

  handleToggle(e){
    e.preventDefault();
    this.setState({
      edit: !this.state.edit,
    });
  },

  handleDelete(e){
    e.preventDefault();
    let url = `/records/${this.props.record.id}`;
    $.ajax({
      method: 'DELETE',
      url: url,
      dataType: 'JSON',
      success: ()=>{
        this.props.handleDeleteRecord(this.props.record)
      },
    });
  },

  handleEdit(e){
    e.preventDefault();
    let data = {
      title: ReactDOM.findDOMNode(this.refs.title).value,
      date: ReactDOM.findDOMNode(this.refs.date).value,
      amount: ReactDOM.findDOMNode(this.refs.amount).value
    };
    let url = `/records/${this.props.record.id}`;
    $.ajax({
      method: 'PUT',
      url: url,
      dataType: 'JSON',
      data: {record: data},
      success: (data)=>{this.setState({
        edit: false
      });
      this.props.handleEditRecord(this.props.record, data)
      },
    });
  },

  recordRow(){
    return(
      <tr>
        <td>{this.props.record.date}</td>
        <td>{this.props.record.title}</td>
        <td>{amountFormat( this.props.record.amount )}</td>
        <td>
          <a onClick={this.handleToggle} className='btn btn-default'>Edit</a>
          <a onClick={this.handleDelete} className='btn btn-danger'>Delete</a>
        </td>
      </tr>
    )
  },

  recordForm(){
    return(
      <tr>
        <td><input className='form-control' type='text' defaultValue={this.props.record.date} ref='date'/></td>
        <td><input className='form-control' type='text' defaultValue={this.props.record.title} ref='title'/></td>
        <td><input className='form-control' type='number' defaultValue={this.props.record.amount} ref='amount'/></td>
        <td>
          <a onClick={this.handleEdit} className='btn btn-default'>Update</a>
          <a onClick={this.handleToggle} className='btn btn-danger'>Cancel</a>
        </td>
      </tr>
    )
  },

  render(){
    if (this.state.edit) return this.recordForm()
      else return this.recordRow()
  }
})
