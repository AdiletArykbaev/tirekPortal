import './App.css';
import { Header,Footer} from './Сomponents/moleculas';
import { Routes,Route,} from "react-router-dom"
import { MainPage,Login,ContactPage,Gallery} from './Pages';

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
            <Route path={"/gallery"} element={<Gallery/>}/>
          </Routes>
        </div>
        <Footer/>

    </div>
  );
}

export default App;
