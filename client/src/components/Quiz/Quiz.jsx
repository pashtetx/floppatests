import React from "react";
import QuizItem from "./QuizItem";
import styles from './Quiz.css'
import ShowScore from "./ShowScore";
import { useParams, UseParams } from 'react-router-dom';



function Quiz({id}) {

    const params = useParams();

    const quizs = [
        {
            id: 1,
            title: 'Тест 1',
            questions: [{
                    questionText: 'Столица США?',
                    answersOptions: [
                        {answerText: 'Вашингтон', isCorrect: true},
                        {answerText: 'Нью-Йорк', isCorrect: false},
                    ]
                },
                {
                    questionText: 'Как зовут жену Павла?',
                    answersOptions: [
                        {answerText: 'Регина', isCorrect: true},
                        {answerText: 'Регина', isCorrect: true},
                    ]
                }
        ]},
        {
            id: 2,
            title: 'Тест 2',
            questions: [{
                    questionText: '2*2=?',
                    answersOptions: [
                        {answerText: '4', isCorrect: true},
                        {answerText: '6', isCorrect: false},
                    ]
                },
                {
                    questionText: 'Как зовут жену Павла?',
                    answersOptions: [
                        {answerText: 'Регина', isCorrect: true},
                        {answerText: 'Регина', isCorrect: true},
                    ]
                }
        ]}
        ]  


    const questions = quizs[params.id - 1].questions
    console.log(questions)


    const [currentQuestion, setCurrentQuestion] = React.useState(0)
    const [score, setScore] = React.useState(0)
    const [showScore, setShowScore] = React.useState(false)


    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1)
        }

        const nextQuestion = currentQuestion + 1

        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion)
        } else {
            setShowScore(true)
        }
    }


    return (
        <div className="app">

            { showScore ?
            (<ShowScore questions={questions}
            score={score}/>) :
            (<QuizItem questions={questions}
            currentQuestion={currentQuestion}
            handleAnswerOptionClick={handleAnswerOptionClick}/>)
            }
        </div>
    )
}


export {Quiz};