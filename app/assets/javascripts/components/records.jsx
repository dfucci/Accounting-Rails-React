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

  addRecord(record){
      records=this.state.records.slice();
      records.push(record);
      this.setState({
          records: records
      });
  },

  render(){
    return (
      <div className='records'>
        <h2 className='title'>Records</h2>
        <RecordForm handleNewRecord={this.addRecord}/>
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
