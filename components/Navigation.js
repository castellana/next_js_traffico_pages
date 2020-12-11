import Link from 'next/link'

const Navigation = () => {
    return (
        <nav>
            <img src="../img/logo.svg" alt=""/>
            <ul>
                <li>
                    <Link href="/">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/howTo">
                        <a>How to</a>
                    </Link>
                </li>
                <li>
                    <Link href="/faq">
                        <a>Faqs</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a>Contact us</a>
                    </Link>
                </li>
            </ul>

            <style jsx>{`
                nav {
                    display: flex;
                    justify-content: space-between;
                    padding-top: 4vh;
                    width: 75%;
                    margin: 0 auto;
                    
                }
                ul {
                    width: 60%;
                    text-align: right;
                    display: flex;
                    justify-content: space-around;

                }
                li {
                    display: inline-block;
                    padding: 25px;
                }
                ul li:last-child{
                    background: #EE4D47;
                    border-radius: 5px;
                }
                a {
                    color: #fff;
                    text-transform: uppercase;
                    font-size: 1.2rem;
                }
               
            `}</style>
        </nav>
        
      );
}
 
export default Navigation;