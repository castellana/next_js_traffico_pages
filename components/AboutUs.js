const AboutUs = () => {
    return ( 
        <section className="about">
            <div className="about-text">
                <h2 className="section_title">About us</h2>
                <p className="section_p">The occupational traffic permit is one of the most important things in the company when carrying out freight transport.  In fact, it is a prerequisite for doing business traffic at all. </p>
                <p className="about_question">How do you do when you need to obtain a commercial traffic permit for freight transport to your business?</p>
            </div>

            <style jsx>{`
                .about{
                    background: url('../img/illustration.svg') right / 55% no-repeat;
                    height: 70vh;
                    width: 80%;
                    margin: 10vh auto;

                }
                .about-text {
                    display: flex;
                    flex-direction: column;
                    justify-content: left;
                    align-items: space-around;
                    width: 50%;
                }
                .section_title {
                    color: #EE4D47;
                    padding-top: 8vh;
                    font-size: 1.3rem;
                    letter-spacing: 5px;
                    font-weight: 700;
                    text-transform: uppercase;
                }
                .section_p {
                    font-weight: 300;
                    font-size: 1rem;
                    padding: 7vh 0;
                    width: 80%;
                    line-height: 4vh;
                }
                .about_question {
                    background: #FCDDD4;
                    border-left: 10px solid #ED4D47;
                    width: 90%;
                    font-weight: 500;
                    font-size: 1.2rem;
                    padding: 28px;
                    line-height: 4vh;
                }

            `}</style>
        </section>
     );
}
 
export default AboutUs;