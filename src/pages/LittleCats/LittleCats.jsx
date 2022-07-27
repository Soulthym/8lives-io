import React from 'react';
import AppSectionAboutUs from "./components/AppSectionAboutUs/AppSectionAboutUs";
import AppSectionFeatures from "./components/AppSectionFeatures/AppSectionFeatures";
import AppSectionRoadmap from "./components/AppSectionRoadmap/AppSectionRoadmap";
import AppSectionArtists from "./components/AppSectionArtists/AppSectionArtists";
import AppSectionFAQ from "./components/AppSectionFAQ/AppSectionFAQ";
import AppFooter from "./components/AppFooter/AppFooter";
import AppMain from "./components/AppMain/AppMain";
import AppHeader from "./components/AppHeader/AppHeader";
import AppServices from "../../components/AppServices";
import Header from "./components/Header";

function App(props) {
    return (
        <div style={{background: 'black'}}>
            <Header />
            <AppHeader />
            <AppMain />
            <AppSectionAboutUs />
            <AppSectionFeatures />
            <AppSectionRoadmap />
            <AppSectionArtists />
            <AppSectionFAQ />
            <AppFooter />
            <AppServices />
        </div>
    );
}

export default App;