import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import './welcome.css';
// show questions
// check for correct answer
// score
function Welcome() {
	const [userName, setUsername] = useState('');
	const history = useHistory();
	const onChange = (event) => {
		setUsername(event.target.value);
	};

	const onStart = (event) => {
		event.preventDefault();
		userName.length !== 0
			? history.push({
					pathname: '/quiz',
					state: { userName },
			  })
			: alert('error');
	};
	return (
		<div className='welcome'>
			<Form
				className={'register-from d-flex flex-column align-items-center'}
				onSubmit={onStart}>
				<Form.Group controlId='username'>
					<Form.Control
						type='text'
						placeholder='enter your username'
						value={userName}
						onChange={onChange}
					/>
				</Form.Group>

				<Button variant='success' type='submit'>
					Start Quiz
				</Button>
			</Form>
		</div>
	);
}

export default Welcome;
