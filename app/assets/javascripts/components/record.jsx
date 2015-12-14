Record = React.createClass({
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

  render(){
    return(
      <tr>
        <td>{this.props.record.date}</td>
        <td>{this.props.record.title}</td>
        <td>{amountFormat( this.props.record.amount )}</td>
        <td><a onClick={this.handleDelete} className='btn btn-danger'>Delete</a></td>
      </tr>
    )
  }
})
