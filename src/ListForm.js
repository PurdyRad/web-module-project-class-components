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
             <div className='form'>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type='text' 
                    name='itemText' 
                    value={this.state.itemText} 
                    onChange={this.handleChanges} 
                    placeholder='Something to crush..' />
                    <button className='tada'>Tada</button>
                </form>
             </div>
         );
     }

}

export default ListForm;