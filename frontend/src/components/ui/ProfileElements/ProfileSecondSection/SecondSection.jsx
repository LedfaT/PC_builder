import { useState } from "react";
import { styles } from "./SecondSection.styles";
import { Button } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import CompareIcon from '@mui/icons-material/Compare';
import ComputerIcon from '@mui/icons-material/Computer';

import SavedBuildsSection from '../SavedBuildsSection/SavedBuildsSection';
import CompareSection from '../CompareSection/CompareSection';
import AccountSection from '../AccountSection/AccountSection';

const ProfileSecondSection = () => {
    const [selectedSection, setSelectedSection] = useState('saved');

    const renderSectionContent = () => {
        switch (selectedSection) {
            case 'saved':
                return <SavedBuildsSection />;
            case 'compare':
                return <CompareSection />;
            case 'account':
                return <AccountSection />;
            default:
                return null;
        }
    };

    return(
        <section className={styles.secondSection}>
            <div className={styles.switchButtonsGroup}>
                <Button 
                    sx={{
                        ...styles.switchButtons,
                        ...(selectedSection === 'saved' ? styles.activeButton : {})
                    }} 
                    variant="text" 
                    onClick={() => setSelectedSection('saved')}
                >
                    <ComputerIcon />Saved Builds
                </Button>
                <Button 
                    sx={{
                        ...styles.switchButtons,
                        ...(selectedSection === 'compare' ? styles.activeButton : {})
                    }} 
                    variant="text" 
                    onClick={() => setSelectedSection('compare')}
                >
                    <CompareIcon />Compare
                </Button>
                <Button 
                    sx={{
                        ...styles.switchButtons,
                        ...(selectedSection === 'account' ? styles.activeButton : {})
                    }} 
                    variant="text" 
                    onClick={() => setSelectedSection('account')}
                >
                    <PersonIcon />Account
                </Button>
            </div>

            {renderSectionContent()}
        </section>
    );
};

export default ProfileSecondSection;
