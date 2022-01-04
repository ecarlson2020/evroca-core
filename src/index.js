import React from 'react'
import ReactDOM from 'react-dom'

class Root extends React.Component{
	render(){
		return (
			<div></div>
		)
	}
}

ReactDOM.render(<Root />, document.querySelector('#root'));
