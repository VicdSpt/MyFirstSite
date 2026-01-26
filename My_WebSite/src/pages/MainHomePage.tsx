import SectionFullStackBxl from "./SectionFullStackBxl";
import SectionAboutMe from "./SectionAboutMe";
import SectionSkills from "./SectionSkills";
import SectionContact from "./SectionContact";
import SectionHeader from "../components/SectionHeader";
import SectionFooter from "../components/SectionFooter";

function MainHomePage() {
  return (
    <div>
      <SectionHeader />
      <SectionFullStackBxl />
      <SectionAboutMe />
      <SectionSkills />
      <SectionContact />
      <SectionFooter />
    </div>
  );
}

export default MainHomePage;
