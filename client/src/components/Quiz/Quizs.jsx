import React from "react";
import {useNavigate} from 'react-router-dom';


function Quizs() {

    const navigate = useNavigate()

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

    return (
        <div className="app">
            {quizs.map(item => (
                <div className="body-quiz">
                    {item.title}
                    <button onClick={() => navigate(`/tests/${item.id}`)}>Пройти тест</button>
                </div>
            ))}
        </div>
    )
}


export { Quizs };