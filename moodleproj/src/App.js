import logo from './logo.svg';
import './App.css';
import ReUsableBanners from './Components/ReUsableBanners/reuse';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import CongratsCard from './Components/CongratsCard/congrats';
import HelloWorld from './Components/HelloWorld/hello';
import LoginDesign from './Components/LoginDesign/login';
import NotificationsApplication from './Components/NotificationsApplication/notific';
import SocialButtons from './Components/SocialButtons/social';
import SuperOverLeague from './Components/SuperOverLeague/super';
import Technologies from './Components/Technologies/tech';
import Hooks from './Components/ReactHooks/hooks';
import FruitsCounter from './Components/FruitsCounter/counter';
function App() {
  return (
    <>
   <BrowserRouter>
        <Routes>
            <Route path='/' element={[<ReUsableBanners/>,<HelloWorld/>]}/>
            <Route path='/CongratsCard' element={[<ReUsableBanners/>,<CongratsCard/>]}/>
            <Route path='/LoginDesign' element={[<ReUsableBanners/>,<LoginDesign/>]}/>
            <Route path='/NotificationsApplication' element={[<ReUsableBanners/>,<NotificationsApplication/>]}/>
            <Route path='/SocialButtons' element={[<ReUsableBanners/>,<SocialButtons/>]}/>
            <Route path='/SuperOverLeague' element={[<ReUsableBanners/>,<SuperOverLeague/>]}/>
            <Route path='/Technologies' element={[<ReUsableBanners/>,<Technologies/>]}/>
            <Route path='/Hooks' element={[<ReUsableBanners/>,<Hooks/>]}/>
            <Route path='/FruitsCounter' element={[<ReUsableBanners/>,<FruitsCounter/>]}/>
        </Routes>
        </BrowserRouter>

    </>
  );
}
export default App;

