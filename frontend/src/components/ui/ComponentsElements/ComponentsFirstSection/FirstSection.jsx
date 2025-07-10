import { firstSectionStyles } from "./FirstSection.styles";

const ComponentsFirstSection = () => {
    return(
        <div className={firstSectionStyles.container}>
            <h1 className={firstSectionStyles.title}>PC Components</h1>
            <h2 className={firstSectionStyles.subtext}>Browse and search for computer components to build your perfect PC</h2>
        </div>
    );
};

export default ComponentsFirstSection;