import React, { Component } from "react";

class Search extends React.Component{

    state= {
        search: '',
    }

    handleKey =(event) => {
        if(event.key === 'Enter'){
            this.props.searchMovies(this.state.search);
        }
    }

    render (){
        return <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input 
                className="validate"
                placeholder="search" 
                type="search"
                value={this.state.search} 
                onChange={(e) => this.setState({search: e.target.value})}
                onKeyDown={this.handleKey}
                />
                <button onClick={()=> this.props.searchMovies(this.state.search)} className="waves-effect  indigo btn search-btn">Search</button>
          </div>
        </div>
        <div>
          <label>
            <input className="with-gap radio" name="type" type="radio"/>
            <span>All</span>
          </label>
          <label>
            <input className="with-gap radio" name="type" type="radio"/>
            <span>Movies only</span>
          </label>
          <label>
            <input className="with-gap radio" name="type" type="radio"/>
            <span>Series only</span>
          </label>
        </div>
      </div>
    }
}

export {Search}