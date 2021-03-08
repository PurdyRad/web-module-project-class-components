import React from 'react';

class ListForm extends React.Component {
    constructor() { 
        super ();
        this.state = {
            itemText: '',
        }
    }
    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.itemText) 
        this.setState({
            itemText: '',
        });
    }

     render() {
         return (
             <form onSubmit={this.handleSubmit}>
                 <input 
                 type='text' 
                 name='itemText' 
                 value={this.state.itemText} 
                 onChange={this.handleChanges} />
                 <button>Tada</button>
             </form>
         );
     }

}

export default ListForm;