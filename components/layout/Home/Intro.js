import Button from "../../reUsable/Button";
import TwoRow from "../templates/twoRow";
import { FaGithub, FaInstagram } from "react-icons/fa";

export default function HomeIntro() {
  const leftContent = (
    <p className="text-xl font-light tracking-wide md:text-2xl ">
      Hello! I’m Ivan Telles — UI focused Web Developer based in Placentia,
      California 🏖 . Interested in classic Porsche&apos;s, User Interfaces, new
      developement technology, desk set-up&apos;s, productivity & ethics.
      Currently a Freelance Support ReactJS Developer, while contributing to new
      side projects.
    </p>
  );

  const rightContent = (
    <div className="flex flex-row items-center w-full mt-5 md:flex-col md:mt-0">
      <Button
        icon={<FaGithub size="1.5em" className="mr-3" />}
        type={"fill"}
        text={"Github"}
        styles="mr-2 md:mb-6 w-1/2"
        link="https://github.com/tellesiivan"
      />
      <Button
        icon={<FaInstagram size="1.5em" className="mr-3" />}
        text="Instagram"
        styles="w-1/2"
        link="https://www.instagram.com/"
      />
    </div>
  );

  return <TwoRow styles={"mt-28"} leftC={leftContent} rightC={rightContent} />;
}
