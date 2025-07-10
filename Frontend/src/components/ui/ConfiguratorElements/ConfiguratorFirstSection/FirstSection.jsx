import { firstSectionStyles } from "./FirstSection.styles";

const ConfiguratorFirstSection = () => {
    return(
        <div className={firstSectionStyles.container}>
            <h1 className={firstSectionStyles.title}>PC Configurator</h1>
            <h2 className={firstSectionStyles.subtext}>Build your custom PC by selecting components from each category</h2>
        </div>
    );
};

export default ConfiguratorFirstSection;