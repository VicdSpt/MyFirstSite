import SectionFullStackBxl from "./SectionFullStackBxl";
import SectionAboutMe from "./SectionAboutMe";
import SectionSkills from "./SectionSkills";
import SectionContact from "./SectionContact";

function MainHomePage() {
  return (
    <div>
      <SectionFullStackBxl />
      <SectionAboutMe />
      <SectionSkills />
      <SectionContact />
    </div>
  );
}

export default MainHomePage;
