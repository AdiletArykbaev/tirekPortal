import './App.css';
import { Header,Footer} from './Сomponents/moleculas';
import { Routes,Route,} from "react-router-dom"
import { MainPage,Login,ContactPage,Gallery,PageNotFound,NewsPage} from './Pages';
import "@fancyapps/ui/dist/fancybox.css";
import {NewsCard} from "./Сomponents/atoms"

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
            <Route path={"/gallery"} element={<Gallery page={true}/>}/>
            <Route path={"/News"} element={<NewsPage/>}/>
            <Route  component={PageNotFound}/>
          </Routes>
        </div>
        <Footer/>

    </div>
  );
}

export default App;
