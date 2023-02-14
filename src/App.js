import Home from './components/Home'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import './components/Cart.css'
import store from './store';
import { Provider } from 'react-redux';


function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
      </Provider>
      <div className='containerAll'>
        <Sidebar />
        <Provider store={store}>
          <Home />
        </Provider>
      </div>
    </>
  );
}

export default App;
