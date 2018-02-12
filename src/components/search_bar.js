import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = { term: ''};
  }
  render(){
    return (
      <div>
        <input
          value = {this.state.term}
          onChange = {event => this.onInputChange(event.target.value)}/>
      </div>
    )
  }
  onInputChange(term){
    //console.log(event.target.value);
    this.setState({term:term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar
