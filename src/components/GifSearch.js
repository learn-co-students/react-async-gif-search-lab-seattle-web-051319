import React from 'react';

export default class GifSearch extends React.Component {
   constructor(){
       super()
       this.state = {
           input: ''
       }
   }

   handleSubmit = ev => {
    ev.preventDefault()
    this.props.search(this.state.input)
    this.setState({input: ''})
   }

   handleChange = ev => {
    const input = ev.target.value
    this.setState({input})
   }
 
   render() {
    return (
        <div style={{float: 'right'}}>
            <h4>Enter a Search Term:</h4>
            <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.input} onChange={this.handleChange} />
                <input type='submit' value='Search' />
            </form>
        </div>
    )
   }
}