import Head from 'next/head'
import Navigation from './Navigation'

const Header = () => {
    return ( 
        <main>
            <Head>
                <title>Next Js Traffico</title>
            </Head>
            <Navigation />
            <div className="introduction">
                <h2>Your awesome traffic permit consultant.</h2>

                <a href="" className="getStarted">Get started &#8594;</a>
            </div>
            <img src="../img/mobel.svg" alt="" className="mobel"></img>

            {/* css */}
            <style jsx>{`
                main {
                    min-height: 115vh;
                    background: url('../img/Scene.svg') left top / contain no-repeat;
                }
                .introduction {
                        width: 45%;
                        margin: 10vh 13%;
                }
                .getStarted {
                    background: #EE4D47;
                    border-radius: 5px;
                    padding: 25px;
                    color: #fff;
                    text-transform: uppercase;
                    font-size: 1.2rem;
                }
                .mobel {
                    width: 38%;
                    margin-top: 9vh;
                    margin-bottom: 2vh;
                }
                h2 {
                    font-size: 5rem;
                    font-family: 'DM Serif Display', serif;
                    color: #fff;
                    font-weight: 300;
                    line-height: 12vh;
                }
            `}</style>
        </main>
     );
}
 
export default Header ;