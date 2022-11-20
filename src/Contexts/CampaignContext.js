import React from 'react'
import {createContext} from 'react';

export const CampaignContext = createContext({
    step: 0,
    setStep: () => {},
    image: null,
    setImage: () => {},
    campaignName: "",
    setCampaignName: () => {},
    name: "",
    setName: () => {},
    date: [],
    setDate: () => {},
    budget: 0,
    setBudget: () => {},
    location: "",
    setLocation: () => {},
    platform: 0,
    setPlatform: () => {},
    campaigns: [],
    setCampaigns: () => {}
})
