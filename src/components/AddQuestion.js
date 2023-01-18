import React from 'react'
import '../styles/App.css';
import { QuestionsContext } from './QuestionsContext';

const AddQuestion = () => {
    const [questionText, setQuestionText] = useState('');
    const { addQuestion } = useContext(QuestionsContext);

    const handleSubmit = e => {
        e.preventDefault();
        const newQuestion = { id: Date.now(), text: questionText, answer: "" };
        addQuestion(newQuestion);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Question text'
                value={questionText}
                onChange={e => setQuestionText(e.target.value)}
            />
            <button
                type='submit'>Add Question</button>
        </form>

    )
}

export default AddQuestion;