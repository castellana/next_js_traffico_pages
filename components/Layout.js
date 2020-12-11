import Head from 'next/head'
import Header from '../components/Header'
import Footer from './Footer'

const Layout = ({children}) => {
    return ( 
        <main>
            <Head>
                <title>Traffico-Landing-Page</title>
            </Head>
            <Header />
            {children}
            <Footer />
        </main>
     );
}
 
export default Layout;