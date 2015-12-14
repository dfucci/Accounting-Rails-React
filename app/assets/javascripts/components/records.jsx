this.Records = React.createClass({
  credits(){
    credits = this.state.records.filter(function(val){
      return val.amount >= 0;
    });
    return credits.reduce(function(prev, curr){
      return prev + parseFloat(curr.amount);
    }, 0);
  },

  debits(){
    debits = this.state.records.filter(function(val){
      return val.amount < 0;
    });
    return debits.reduce(function(prev, curr){
      return prev + parseFloat(curr.amount);
    }, 0);
  },

  balance(){
    return this.credits() + this.debits();
  },

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
      return <Record key={record.id} record={record} handleDeleteRecord={this.deleteRecord} />;
    });
  },

  addRecord(record){
    records=this.state.records.slice();
    records.push(record);
    this.setState({
      records: records
    });
  },

  deleteRecord(record){
    let records = this.state.records.slice();
    let index = records.indexOf(record);
    records.splice(index, 1);
    this.replaceState({
      records: records,
    });
  },

  render(){
    return (
      <div className='records'>
        <h2 className='title'>Records</h2>
        <AmountBox type='success' amount={this.credits()} text='Credit' />
        <AmountBox type='danger' amount={this.debits()} text='Debits' />
        <AmountBox type='info' amount={this.balance()} text='Balance' />
        <RecordForm handleNewRecord={this.addRecord}/>
        <hr/>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
              <th>Actions</th>
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
