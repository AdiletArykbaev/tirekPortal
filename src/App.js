import './App.css';
import { Header } from './Сomponents/moleculas';
import { Routes,Route,} from "react-router-dom"
import { MainPage } from './Pages';

function App() {
  return (
    <div className="App">
         <Header />

        <div className="content_wrapper">
          <Routes>
            <Route path={"/"} element={<MainPage/>}/>

          </Routes>
        </div>
    </div>
  );
}

export default App;
