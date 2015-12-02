RecordForm = React.createClass({
    getInitialState(){
        return {
            title: '',
            date: '',
            amount: ''
        }
    },
    handleChange(e){
        let name = e.target.name;
        let state ={};
        state[name]  = e.target.value;
        this.setState(state);
    },
    valid(){
        return this.state.title && this.state.date && this.state.amount;
    },

    handleSubmit(e){
        e.preventDefault();
        console.log("submitting");
        $.post('', {record: this.state}, (data)=>{
            this.props.handleNewRecord(data);
            this.setState(this.getInitialState());
        }, 'JSON');
    },

    render(){
        return(
            <form className="form-inline">
                <div className="form-group" onSubmit={this.handleSubmit}>
                    <input type="text"
                        placeholder="Date"
                        name="date"
                        value={this.state.date}
                        onChange={this.handleChange}
                        className="form-control"/>
                </div>
                <div className="form-group">
                    <input type="text"
                        placeholder="Title"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        className="form-control"/>
                </div>
                <div className="form-group">
                    <input type="text"
                        placeholder="Amount"
                        name="amount"
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
