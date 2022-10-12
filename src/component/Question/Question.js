import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Question.css'

const Question = ({ quest }) => {
    const { options, id, question, correctAnswer } = quest;
    console.log(correctAnswer)



    const handleIcon = () => {
        alert(correctAnswer)
    }



    return (
        <div>

            <div className='quiz'>

                <h1 className='font-bold'>{question}</h1>
                <div className='grid  md:grid-cols-2 gap-4 '>

                    <button>{options[0]}</button>
                    <button>{options[1]}</button>
                    <button>{options[2]}</button>
                    <button>{options[3]}</button>
                    <FontAwesomeIcon onClick={handleIcon} className='pt-5 w-5 h-5' icon={faEye}></FontAwesomeIcon>

                </div>

            </div>
        </div>
    );
};

export default Question;