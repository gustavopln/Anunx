import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'

const Default = ({ children }) => {

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Default