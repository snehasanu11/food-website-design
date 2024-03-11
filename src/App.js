  import './App.css'

  import{Routes,Route} from 'react-router-dom'
  
  import Nav from './Nav';
  import Home from './Home';
 
  import About from './About';
  import Menu from './Menu';
  import Contact from './Contact';
  import Missing from './Missing';
  import Action from './Action';
  import Cart from './Cart';
  
  
  import Footer from './Footer';
  import KnowMore from './KnowMore';
import { useState,useEffect } from 'react';
function App() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  const[search,setSearch]=useState('');
  const[searchResult,setSearchResult]=useState('')
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };
    const handleOffline = () => {
      setIsOnline(false);
    };
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div>
      
    <Nav/>
      {!isOnline && (
        <div className='hook'>
          You are offline. Please check your connectivity and try again.
          
        </div>
      )}
     
     
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  
  <Route path='/Cart' element={< Cart/>}/>
  <Route path='/menu' element={< Menu/>}/>
  <Route path='/missing' element={<Missing/>}/>
  <Route path='/contact' element={< Contact/>}/>
  <Route path='/KnowMore' element={< KnowMore/>}/>
  <Route path='/Action' element={< Action/>}/>
  
</Routes>
     <Footer/>
    </div>
    
  );
}

export default App;
