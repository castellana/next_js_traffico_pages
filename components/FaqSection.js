import questions from '../data/questions'
import Accordion from './Accordion'

const FaqSection = () => {
    return ( 
        <section>
            <section id="faq">
                <article className="text-container">
                    <h2 className="section_title">Faq</h2>
                    <h3>Questions and Answers on Professional Traffic Permits:</h3>
                </article>
                <img src="../img/faqs.svg" alt=""/>
            </section>

            <section className="accord">
                {questions.map(singleAnswer => <Accordion
                question ={singleAnswer.question}
                answer ={singleAnswer.answer}
                // key={singleAnswer.id}
                />)}
            </section>

            <style jsx>{`
                #faq {
                    height: 70vh;
                    display: flex;
                    justify-content: space-around;
                    width: 90%;
                    margin: 10vh auto;
                }
                .section_title {
                    color: #EE4D47;
                    margin-top: 20vh;
                    font-size: 1.3rem;
                    letter-spacing: 5px;
                    font-weight: 700;
                    text-transform: uppercase;
                }
                h3 {
                    font-family: 'DM Serif Display', serif;
                    font-size: 2.7rem;
                    width: 70%;
                }
                .accord {
                    width: 80%;
                    height: 70vh;
                    margin: 0 auto;
                    display: grid;
                    column-gap: 5%;
                    row-gap: 1vh;
                    grid-template-rows: repeat(5, 1fr);
                    grid-auto-flow: column;
                    grid-auto-columns: repeat(2, 1fr);
                }
            `}</style>
        </section>
     );
}
 
export default FaqSection;