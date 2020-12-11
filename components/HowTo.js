const HowTo = () => {
    return (  
        <section className="apply">
            <div className="apply-text">
                <h2 className="section_title">How to apply</h2>
                <p className="section_p">When applying for a traffic permit, there are certain requirements that you must meet that are included in the examination: requirements for professional knowledge, solid establishment, good reputation and financial resources. Important to remember is to confirm your application for a traffic permit by the company's company signer or CEO.</p>
            </div>
            <style jsx>{`
            .apply {
                background: url(../img/illustrations.svg) -20% bottom/ 60% no-repeat;
                height: 70vh;
                width: 75%;
                margin: 20vh auto;
                font-weight: 700;
            }
            .apply-text {
                line-height: 25px;
                margin-left: 60%;
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
            `}</style>
        </section>
    );
}
 
export default HowTo;