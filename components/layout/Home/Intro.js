import Button from "../../reUsable/Button";
// @ts-ignore
import TopBottom from "../templates/TopBottom";
import { FaGithub, FaInstagram } from "react-icons/fa";

import FadeIn from "react-fade-in";

export default function HomeIntro() {
  const leftContent = (
    <div className="font-Karla">
      <FadeIn delay={150}>
        <h3 className="mb-2 text-6xl font-bold sm:text-7xl text-common-wht">
          web developer<span className="text-common-gold">.</span>
        </h3>
      </FadeIn>
      <FadeIn delay={250}>
        <p className="text-lg tracking-wide md:text-xl xl:text-3xl text-text-grey">
          Hello! I&apos;m <span className="text-text-white">Ivan Telles</span> —
          UI focused Web Developer based in Placentia, California 🏖. Interested
          in classic Porsche&apos;s, User Interfaces, new developement
          technology, desk set-up&apos;s, productivity & ethics. Currently a
          Freelance Support{" "}
          <span className="text-text-white">React Developer</span>, while
          contributing to new side projects.
        </p>
      </FadeIn>
    </div>
  );

  const rightContent = (
    <div className="flex items-center w-full mt-5">
      <Button
        icon={<FaGithub size="1rem" className="mr-3" />}
        type={"fill"}
        text={"Github"}
        styles="mr-2  md:w-auto"
        link="https://github.com/tellesiivan"
        target="blank"
      />
      <Button
        icon={<FaInstagram size="1rem" className="mr-3" />}
        text="Instagram"
        styles=" md:w-auto"
        link="https://www.instagram.com/tellesiivan"
        target="blank"
      />
    </div>
  );

  return (
    <TopBottom styles={"mt-24"} leftC={leftContent} rightC={rightContent} />
  );
}
