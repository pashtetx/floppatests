import React from "react";
import styles from './Quiz.css';

function QuizItem({ questions, handleAnswerOptionClick, currentQuestion }) {

    return (
            <div className="quiz" stlye={styles.quiz}>
                <div className="question_section">
                    <div className="question_count">
                        <span>Вопрос {currentQuestion + 1}</span> / {questions.length}
                    </div>
                    <div className="question_text">{questions[currentQuestion].questionText}</div>
                    <div className="answer_section">
                        {questions[currentQuestion].answersOptions.map((item, idx) => 
                        (
                            <button key={idx} onClick={() => handleAnswerOptionClick(item.isCorrect)}>{item.answerText}</button>
                        ))
                        }
                    </div>
                </div>
            </div>
    )
}


export default QuizItem;