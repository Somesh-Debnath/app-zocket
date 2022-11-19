
import './App.css';
import {Routes, Route} from 'react-router-dom';

import CampaignsPage from './pages/CampaignsPage';
import CreateCampaign from './pages/CampaignForm/CreateCampaign';
import ChooseProducts from './pages/CampaignForm/ChooseProduct';
import CampaignSettings from './pages/CampaignForm/CampaignSettings';
import ReadyToGo from './pages/CampaignForm/ReadyToGo';


function App() {
  return (
    
      <Routes>
        <Route path='/1' element={<CreateCampaign/>}/>
        <Route path='/' element={<CampaignsPage/>}/>
        <Route path='/3' element={<CampaignSettings/>}/>
        <Route path='/4' element={<ReadyToGo/>}/>
        <Route path='/2' element={<ChooseProducts/>}/>
      </Routes>
   
  );
}

export default App;
