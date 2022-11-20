
import './App.css';
import { CampaignContext } from './Contexts/CampaignContext';
import {Routes, Route} from 'react-router-dom';
import ChooseProducts from './pages/CampaignForm/ChooseProduct';
import CampaignSettings from './pages/CampaignForm/CampaignSettings';
import CreateCampaign from './pages/CampaignForm/CreateCampaign';
import ReadyToGo from './pages/CampaignForm/ReadyToGo';
import axios from 'axios';
import CampaignsPage from './pages/CampaignForm/CampaignsPage';
import { useState } from 'react';

function App() {
  const [step, setStep] = useState(0)
  const [image, setImage] =useState(null);
  const [name, setName] = useState('');
  const [campaignName, setCampaignName] =useState("");
  const [startdate, setstartDate] =useState("");
  const [enddate, setendDate] =useState("");
  const [budget, setBudget] =useState(100);
  const [location, setLocation] =useState("");
  const [platform, setPlatform] =useState("");
  const [campaigns, setCampaigns] =useState([])

  const values = {step, setStep, image, setImage, campaignName, setCampaignName, 
  startdate,setstartDate,enddate,setendDate,budget, setBudget, location, setLocation,name,setName,
     platform, setPlatform, campaigns, setCampaigns}

  console.log(values)


  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 4);
  };


  switch (step) {
    
    case 0:
      return (
        <CampaignContext.Provider value={values}>
            <CampaignsPage 
            step={step}
            nextStep={nextStep}
            />
        </CampaignContext.Provider>
      );
    case 1:
      return (
      <CampaignContext.Provider value={values}>
        <CreateCampaign 
        step={step}
        nextStep={nextStep}
        prevStep={prevStep}
        />
      </CampaignContext.Provider>
      )
    case 2:
      return (
        <CampaignContext.Provider value={values}>
          <ChooseProducts
          step={step}
          nextStep={nextStep}
          prevStep={prevStep}       
          />
        </CampaignContext.Provider>
      )
    case 3:
      return (
        <CampaignContext.Provider value={values}>
          <CampaignSettings
          step={step}
          nextStep={nextStep}
          prevStep={prevStep}
          />
        </CampaignContext.Provider>
      )
    case 4:
      return (
        <CampaignContext.Provider value={values}>
        <ReadyToGo
        step={step}
        nextStep={nextStep}
        prevStep={prevStep}
        />
      </CampaignContext.Provider>
      )  
      default:   
      <CampaignContext.Provider value={values}>
      <CampaignsPage 
      step={step}
      nextStep={nextStep}
      />
  </CampaignContext.Provider>
   }

}


export default App;
