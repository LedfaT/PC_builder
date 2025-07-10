import { secondSectionStyles } from "./SecondSection.styles";
import MemoryIcon from "@mui/icons-material/Memory";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import SettingsIcon from "@mui/icons-material/Settings";
import SaveIcon from "@mui/icons-material/Save";
import BarChartIcon from "@mui/icons-material/BarChart";
import SearchIcon from "@mui/icons-material/Search";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Browse Components",
    text: "Access a vast database of PC components with detailed specifications.",
    icon: <MemoryIcon sx={{ fontSize: 28 }} />,
    bg: "bg-blue-50",
    link: (
      <Link to={"/components"}>
        Explore
        <ArrowRightAltIcon sx={{ fontSize: 20 }} />
      </Link>
    ),
  },
  {
    title: "Recommended Builds",
    text: "Explore curated PC builds for different budgets and use cases.",
    icon: <ViewInArIcon sx={{ fontSize: 28 }} />,
    bg: "bg-violet-50",
    link: (
      <Link to={"/builds"}>
        Explore
        <ArrowRightAltIcon sx={{ fontSize: 20 }} />
      </Link>
    ),
  },
  {
    title: "Custom Configurator",
    text: "Build your perfect PC from scratch with our easy-to-use configurator.",
    icon: <SettingsIcon sx={{ fontSize: 28 }} />,
    bg: "bg-emerald-50",
    link: (
      <Link to={"/configurator"}>
        Explore
        <ArrowRightAltIcon sx={{ fontSize: 20 }} />
      </Link>
    ),
  },
  {
    title: "Save Your Builds",
    text: "Store and manage your custom PC configurations in your profile.",
    icon: <SaveIcon sx={{ fontSize: 28 }} />,
    bg: "bg-amber-50",
    link: (
      <Link to={"/profile"}>
        Explore
        <ArrowRightAltIcon sx={{ fontSize: 20 }} />
      </Link>
    ),
  },
  {
    title: "Compare Builds",
    text: "Compare multiple builds side by side to find the perfect match.",
    icon: <BarChartIcon sx={{ fontSize: 28 }} />,
    bg: "bg-rose-50",
    link: (
      <Link to={"/builds"}>
        Explore
        <ArrowRightAltIcon sx={{ fontSize: 20 }} />
      </Link>
    ),
  },
  {
    title: "Find Components",
    text: "Search for specific components and view detailed information.",
    icon: <SearchIcon sx={{ fontSize: 28 }} />,
    bg: "bg-cyan-50",
    link: (
      <Link to={"/components"}>
        Explore
        <ArrowRightAltIcon sx={{ fontSize: 20 }} />
      </Link>
    ),
  },
];

const HomeSecondSection = () => (
  <section className={secondSectionStyles.section}>
    <h2 className={secondSectionStyles.heading}>
      Everything You Need To Build Your PC
    </h2>
    <p className={secondSectionStyles.subheading}>
      Our platform offers all the tools you need to create, save, and compare
      your custom PC builds
    </p>

    <div className={secondSectionStyles.grid}>
      {features.map(({ title, text, icon, bg, link }) => (
        <div key={title} className={`${secondSectionStyles.card} ${bg}`}>
          <div>
            <div className={secondSectionStyles.iconWrapper}>{icon}</div>
            <h3 className={secondSectionStyles.title}>{title}</h3>
            <p className={secondSectionStyles.text}>{text}</p>
          </div>

          <a className={secondSectionStyles.cta}>{link}</a>
        </div>
      ))}
    </div>
  </section>
);

export default HomeSecondSection;
