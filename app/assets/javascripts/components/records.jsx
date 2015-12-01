this.Records = React.createClass({
  getInitialState(){
    return({
      records: this.props.data
    })
  },

  getDefaultProps(){
    return({
      records: []
    })
  },

  renderRecords(){
    return this.state.records.map((record)=>{
      return <Record key={record.id} record={record} />;
    });
  },

  render(){
    return (
      <div className='records'>
        <h2 className='title'>Records</h2>
        <RecordForm />
        <hr/>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRecords()}
          </tbody>
        </table>
      </div>
    )
  }
});
