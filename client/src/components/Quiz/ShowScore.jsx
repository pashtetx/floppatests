import React from "react";



function ShowScore({ score, questions }) {


    return (
        <div className="section_score">
            <div>Правильных ответов {score} из {questions.length}</div>
        </div>
    )
}


export default ShowScore;