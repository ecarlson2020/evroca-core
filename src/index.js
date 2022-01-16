import React from 'react'
import ReactDOM from 'react-dom'

function Root(){
	return (
		<div>hello there</div>
	)
}

ReactDOM.render(<Root />, document.querySelector('#root'));
