import React from 'react';
import '../styles/App.css';
import { useParams } from 'react-router-dom';
import { QuestionsContext } from './QuestionsContext';

const AddAnswer = () => {
    const [answerText, setAnswerText] = useState('');
    const { addAnswer } = useContext(QuestionsContext);
    const { questionId } = useParams();

    const handleSubmit = e => {
        e.preventDefault();
        addAnswer(questionId, answerText);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Answer text'
                value={answerText}
                onChange={e => setAnswerText(e.target.value)}
            />
            <button type='submit'>Add Answer</button>
        </form>
    )
}

export default AddAnswer