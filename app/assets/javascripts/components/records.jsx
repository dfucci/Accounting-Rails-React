this.Records = React.createClass({
  credits(){
    let credits = this.state.records.filter(function(val){
      return val.amount >= 0;
    });
    return credits.reduce(function(prev, curr){
      return prev + parseFloat(curr.amount);
    }, 0);
  },

  debits(){
    let debits = this.state.records.filter(function(val){
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
      return <Record key={record.id} record={record} handleDeleteRecord={this.deleteRecord} handleEditRecord={this.updateRecord}/>;
    });
  },

  addRecord(record){
    let records = React.addons.update(this.state.records, {$push: [record]});
    this.setState({
      records: records
    });
  },

  updateRecord(record, data){
    let index = this.state.records.indexOf(record);
    let records = React.addons.update(this.state.records, {$splice: [[index, 1, data]]});
    this.replaceState({
      records: records
    })
  },

  deleteRecord(record){
    let index = this.state.records.indexOf(record);
    let records = React.addons.update(this.state.records, {$splice: [[index, 1]]})
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
