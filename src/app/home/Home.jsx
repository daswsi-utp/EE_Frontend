import Header from '@/app/Components/Header'
import Bentos from './Bentos'
import Info from './Info'

const Home = () => {
    return (
        <div className='bg-tertiary'>
            <Header />
            <Bentos/>
            <Info/>
        </div>
    )
}

export default Home
