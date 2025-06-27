import { firstSectionStyles } from "./FirstSection.styles";

const BuildsFirstSection = () => {
    return(
        <div className={firstSectionStyles.container}>
            <h1 className={firstSectionStyles.title}>PC builds</h1>
            <h2 className={firstSectionStyles.subtext}>Browse our curated collection of PC builds for different needs and budgets</h2>
        </div>
    );
};

export default BuildsFirstSection;