import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quiz = useLoaderData();
    const { data } = quiz;
    const { questions } = data;
    console.log(data)
    return (
        <div>
            <h1 className='text-3xl p-4 font-bold'>{data.name} quiz-</h1>
            {
                questions.map(question => <Question quest={question}></Question>)

            }
        </div>
    );
};

export default Quiz;