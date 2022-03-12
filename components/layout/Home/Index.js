import ApiSection from "./apiSection";
import HomeIntro from "./Intro";
import ShowCaseOne from "./showCaseOne";
import Workspace from "./workspace";

export default function HomeContent() {
  return (
    <>
      <HomeIntro />
      <ShowCaseOne />
      <Workspace />
      <ApiSection />
    </>
  );
}
