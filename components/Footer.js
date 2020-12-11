import FooterNav from '../components/FooterNav'


const Footer = () => {
    return ( 
        <footer>
            <img src="./img/lkw_footer.svg" alt=""/>
            <section className="rectangle">
                <article className="footer_text">
                    <p className="section_p">We provide traffic management consultants so you get started quickly, contact us for a quote today!</p>
                    <a href="" className="getStarted">Get started &#8594;</a>
                </article>
                <FooterNav />
            </section>
            <section className="mediaFoot">
                <p>Copyright @ 2019 </p>

                <div className="media-icons">
                    <img src="./img/f.svg" alt=""/>
                    <img src="./img/t.svg" alt=""/>
                    <img src="./img/i.svg" alt=""/>
                </div>
            </section>

            <style jsx>{`
                .rectangle {
                    background-color: #0F264C;
                    background-image:url('../img/Mask Group.png');
                    width: 90%;
                    background-position: left top;
                    background-size: 100%;
                    border-top-right-radius: 90px;
                    margin-top: -4vh;
                }
                .footer_text {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    padding-top: 10vh;
                }
                .section_p {
                    font-weight: 300;
                    font-size: 1rem;
                    padding-left: 2%;
                    width: 23%;
                    line-height: 4vh;
                    color: #fff;
                    border-left: 15px solid #EE4D47;
                }
                .getStarted {
                    background: #EE4D47;
                    border-radius: 5px;
                    padding: 25px;
                    color: #fff;
                    text-transform: uppercase;
                    font-size: 1.2rem;
                }
                .mediaFoot {
                    width: 90%;
                    display: flex;
                    justify-content: space-around;
                    padding-bottom: 10vh;
                }
                .media-icons {
                    display: flex;
                    width: 10%;
                    justify-content: space-between;
                }
            `}</style>

        </footer>
     );
}
 
export default Footer;