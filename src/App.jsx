import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const styles= {
    layout: {
      minHeight: '80vh',
    }
  }

  return (
    <>
    
    <Header/>
    <main style={styles.layout}>
      <Outlet/>
    </main>  
    <Footer/>
      
    </>
  )
};

export default App
