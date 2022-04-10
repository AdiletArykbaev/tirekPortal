import './App.css';
import { Header } from './Сomponents/moleculas';
import { Routes,Route,} from "react-router-dom"
import { MainPage,Login,ContactPage} from './Pages';
import Footer from './Сomponents/moleculas/Footer/Footer';

function App() {
  return (
    <div className="App">
         <input type="text" />
         <Header />

        <div className="content_wrapper">
          <Routes>
            <Route path={"/"} element={<MainPage/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/appeal"} element={<ContactPage/>}/>
          </Routes>
        </div>
        <Footer/>

    </div>
  );
}

export default App;
