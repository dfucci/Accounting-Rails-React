RecordForm = React.createClass({
  getInitialState(){
    return {
      title: '',
      date: '',
      amount: ''
    }
  },
  handleChange(){},
  valid(){},
  render(){
    return(
        <form className="form-inline">
          <div className="form-group">
            <input type="text"
              placeholder="Date"
              name="Date"
              value={this.state.date}
              jonChange={this.handleChange}
              className="form-control"/>
            </div>
          <div className="form-group">
            <input type="text"
              placeholder="Title"
              name="Title"
              value={this.state.title}
              onChange={this.handleChange}
              className="form-control"/>
            </div>
          <div className="form-group">
            <input type="text"
              placeholder="Amount"
              name="Amount"
              value={this.state.amount}
              onChange={this.handleChange}
              className="form-control"/>
            </div>
            <button type='submit'
              className='btn btn-primary'
              disabled={!this.valid()}>
                Create record
              </button>
        </form>
    )
  }
});
