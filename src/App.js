
import './App.css';
import Layout1 from './layouts/layout1';
import Layout2 from './layouts/layout2';
import Layout3 from './layouts/layout3';
import Layout4 from './layouts/layout4';
import Layout5 from './layouts/layout5';
import Progbar from './components/Progbar';

function App() {
    return ( 
        < div className = "App" >
            <Layout1 name="bssm allah"/>
            <Layout2 name="bssm allah"/>
            <Layout3 name="bssm allah"/>
            <Layout4 name="bssm allah"/>
            <Layout5 name="bssm allah"/>
          <Progbar />
        </div>
        
    );
}

export default App;