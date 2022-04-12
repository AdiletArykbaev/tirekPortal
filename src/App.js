import './App.css';
import {Header, Footer} from './Сomponents/moleculas';
import {Routes, Route, useLocation,} from "react-router-dom"
import {MainPage, Login, ContactPage, Gallery, PageNotFound, NewsPage, Projects,Admin} from './Pages';
import "@fancyapps/ui/dist/fancybox.css";
import {NewsCard} from "./Сomponents/atoms"
import {useEffect} from "react";
import 'remixicon/fonts/remixicon.css'

function App({store}) {
    const location = useLocation();
    useEffect(() => {
        document.documentElement.style.scrollBehavior = "unset";
        window.scrollTo(0, 0);
        document.documentElement.style.scrollBehavior = "smooth";
    }, [location.pathname]);
    console.log(store.getState())
    return (
        <div className="App">
            <input type="text"/>
            <Header/>

            <div className="content_wrapper">
                <Routes>
                    <Route path={"/"} element={<MainPage/>}/>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/appeal"} element={<ContactPage/>}/>
                    <Route path={"/gallery"} element={<Gallery page={true}/>}/>
                    <Route path={"/news"} element={<NewsPage/>}/>
                    <Route path={"/projects"} element={<Projects/>}/>
                    <Route path='/admin' element={<Admin/>}></Route>

                    <Route component={PageNotFound}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
