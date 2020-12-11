import Layout from '../components/Layout'
import AboutUs from '../components/AboutUs'
import HowTo from '../components/HowTo'


export default function Home() {
  return (
    <main>
        <Layout>
            <AboutUs />
            <HowTo />
        </Layout>
    </main>
     
  )
}
