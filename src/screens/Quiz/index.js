import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const questions = [
	{
		questionText: 'Столица Португалии?',
		answerOptions: [
			{ answerText: 'Париж', isCorrect: false },
			{ answerText: 'Лиссабон', isCorrect: true },
			{ answerText: 'Берлин', isCorrect: false },
			{ answerText: 'Лондон', isCorrect: false },
		],
	},
	{
		questionText: 'Сколько вдохов делает человеческое тело ежедневно?',
		answerOptions: [
			{ answerText: '20,000', isCorrect: true },
			{ answerText: '15,000', isCorrect: true },
			{ answerText: '35,000', isCorrect: false },
			{ answerText: '5,000', isCorrect: false },
		],
	},
	{
		questionText: 'Кем была основана Apple?',
		answerOptions: [
			{ answerText: 'Билл Гейтс', isCorrect: false },
			{ answerText: 'Джефф Безос', isCorrect: false },
			{ answerText: 'Уоррен Баффетт', isCorrect: false },
			{ answerText: 'Стив Джобс', isCorrect: true },
		],
	},
	{
		questionText: 'Какая самая маленькая страна в мире?',
		answerOptions: [
			{ answerText: 'Ватикан', isCorrect: true },
			{ answerText: 'Науру', isCorrect: false },
			{ answerText: 'Монако', isCorrect: false },
			{ answerText: 'Сан-Марино', isCorrect: false },
		],
	},
	{
		questionText: 'Какая самая длинная река в мире?',
		answerOptions: [
			{ answerText: 'Вольга', isCorrect: false },
			{ answerText: 'Амазон', isCorrect: false },
			{ answerText: 'Ниль', isCorrect: true },
			{ answerText: 'Байкал', isCorrect: false },
		],
	},
	{
		questionText:
			'Какая страна выиграла чемпионат мира по футболу среди женщин в 2019 году?',
		answerOptions: [
			{ answerText: 'Германия', isCorrect: false },
			{ answerText: 'Россия', isCorrect: false },
			{ answerText: 'Иран', isCorrect: false },
			{ answerText: 'США', isCorrect: true },
		],
	},
];

function Quiz() {
	const [questionPosition, setQuestionPosition] = useState(0);
	const [score, setScore] = useState(0);
	const [timeSpent, setTimeSpent] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);
	const location = useLocation();

	const { userName } = (location && location.state) || {};

	function setTime() {
		setTimeSpent((t) => t + 1);
	}

	useEffect(() => {
		setInterval(setTime, 1000);
	}, []);
	useEffect(() => {
		localStorage.setItem('userName', userName);
		localStorage.setItem('timeSpent', timeSpent);
		localStorage.setItem('score', score);
	}, [userName, timeSpent, score]);

	const checkAnswer = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}
		const nextQuestion = questionPosition + 1;
		if (nextQuestion < questions.length) {
			setQuestionPosition(nextQuestion);
		} else {
			alert(
				`End of quiz. Time spent: ${localStorage.getItem(
					'timeSpent'
				)} Username: ${localStorage.getItem(
					'userName'
				)} Score: ${localStorage.getItem('score')}`
			);
		}
	};

	return (
		<div class='container d-flex flex-column align-items-center'>
			Quiz Page
			<div>
				Your score {score} out of {questions.length}
			</div>
			<div>Time spent {timeSpent} seconds</div>
			<div class='jumbotron p-4 p-md-5 text-white rounded bg-success'>
				<div class='row mb-2'>
					<div class='col-md-6'>
						<div class='row no-gutters overflow-hidden flex-md-row  shadow-sm h-md-250 position-relative'>
							<div class='col p-4 d-flex flex-column position-static'>
								<h3 class='font-weight-bold'>Вопрос:</h3>
								<h5>{questions[questionPosition].questionText}</h5>
							</div>
						</div>
					</div>
					<div class='col-md-6'>
						<div class='row no-gutters overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'>
							<div class='col p-4 d-flex flex-column position-static'>
								{questions[questionPosition].answerOptions.map((i) => (
									<button
										type='button'
										class='btn btn-outline-light btn-block'
										onClick={() => checkAnswer(i.isCorrect)}>
										{i.answerText}
									</button>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Quiz;
