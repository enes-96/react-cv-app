import "./index.css";
import Header from "./components/Header/Header";
import TopSection from "./components/TopSection/TopSection";
import ExperienceSection from "./components/ExperienceSection/ExperienceSection";
import EducationSection from "./components/EducationSection/EducationSection";
import SkillSection from "./components/SkillSection/SkillSection";

export default function App() {
  return (
    <div className="app">
      <Header />
      <TopSection />
      <ExperienceSection />
      <EducationSection />
      <SkillSection />
    </div>
  );
}
