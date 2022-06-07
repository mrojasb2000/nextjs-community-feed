import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import styled from "styled-components";
import Card from '../../components/Card';

const QuestionDetailContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 5%;
`;

function QuestionDetail() {
    const router = useRouter();
    const { id } = router.query;
    const [loading, setLoading] = useState(false);
    const [question, setQuestion] = useState({});

    useEffect(() => {
        async function fetchData(){
            const data = await fetch('');
            const result = await data.json();
            if(result) {
                setQuestion(result.items[0]);
                setLoading(false);
            }
        }
        id && fetchData();
    }, [id]);

    return (
        <QuestionDetailContainer>
            {loading ? (<span>...Loading</span>):(
                <Card 
                    key={question.question_id} 
                    title={question.title} 
                    views={question.view_count} 
                    answers={question.answer_count} 
                />
            )}

        </QuestionDetailContainer>
    );
}

export default QuestionDetail;