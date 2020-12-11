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
                        <a>Faq</a>
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
                }
                li {
                    display: inline-block;
                    margin: 4%;
                }
                a {
                    color: #fff;
                    text-transform: uppercase;
                    font-family: 'Roboto', sans-serif;
                    font-size: 1.3rem;
                    
                }
                a:hover {
                    transform: scale(1.1)
                }
               
            `}</style>
        </nav>
        
      );
}
 
export default Navigation;