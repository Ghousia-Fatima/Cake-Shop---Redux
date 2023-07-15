
import { Provider } from 'react-redux';
import './App.css';

import store from './components/store';
import CakeCounter1 from './components/CakeCounter1';
import CakeCounter2 from './components/CakeCounter2';


function App() {
  return (
    <div className="App">

    <Provider store={store}>
      <CakeCounter1/>
      <hr/>
      <CakeCounter2/>
    </Provider>
    
    </div>
  );
}

export default App;
