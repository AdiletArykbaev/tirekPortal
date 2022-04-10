import './App.css';
import {Header} from './Сomponents/moleculas';
import {Routes, Route,} from "react-router-dom"
import {MainPage, Admin, ContactPage} from './Pages';
import Footer from "./Сomponents/moleculas/Footer/Footer";
import Gallery from "./Pages/Gallery";

function App() {
    return (
        <div className="App">
            <input type="text"/>
            <Header/>

            <div className="content_wrapper">
                <Routes>
                    <Route path={"/"} element={<MainPage/>}/>
                    <Route path={"/admin"} element={<Admin/>}/>
                    <Route path={"/contacts"} element={<ContactPage/>}/>
                    <Route path={"/gallery"} element={<Gallery/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
