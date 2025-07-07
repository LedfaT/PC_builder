import { styles } from "./Compare.styles";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import CompareFirstSection from "../../components/ui/CompareElements/CompareFirstSection/FirstSection";

const Compare = () => {
  return (
    <div className={styles.comparePage}>
      <CompareFirstSection />
    </div>
  );
};

export default Compare;
