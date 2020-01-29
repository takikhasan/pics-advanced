import React from 'react';
import { connect } from 'react-redux';
import { newQuery, newImages } from '../actions'; 

class SearchBar extends React.Component {
    state = { term: '' };
    
    onFormSumbit = event => {
        event.preventDefault();
        this.props.newQuery(this.state.term);
        this.props.newImages();
    }

    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSumbit} className='ui form'>
                    <div className='field'>
                        <label>Image Search</label>
                        <input 
                            type='text'
                            onChange={(e) => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(
    null,
    { newQuery, newImages }
)(SearchBar);