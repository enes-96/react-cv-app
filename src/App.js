import "./index.css";
import Header from "./components/Header/Header";
import TopSection from "./components/TopSection/TopSection";
import WorkExperience from "./components/ExperienceSection/WorkExperience";
import EducationSection from "./components/EducationSection/EducationSection";
import SkillSection from "./components/SkillSection/SkillSection";
import ActionGuide from "./components/ActionGuide/ActionGuide";

export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="cv-file">
        <TopSection />
        <WorkExperience />
        <EducationSection />
        <SkillSection />
        <ActionGuide />
      </div>
    </div>
  );
}
