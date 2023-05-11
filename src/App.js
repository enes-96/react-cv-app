import "./index.css";
import Header from "./components/Header/Header";
import TopSection from "./components/TopSection/TopSection";
import WorkExperience from "./components/ExperienceSection/WorkExperience";
import EducationSection from "./components/EducationSection/EducationSection";
import SkillSection from "./components/SkillSection/SkillSection";
import ActionGuide from "./components/ActionGuide/ActionGuide";
import PrintButton from "./components/PrintButton";

export default function App() {
  return (
    <div className="app">
      <Header />
      <PrintButton />

      <div className="cv-file" id="cv-file">
        <TopSection />
        <WorkExperience />
        <EducationSection />
        <SkillSection />
        <ActionGuide />
      </div>
    </div>
  );
}
