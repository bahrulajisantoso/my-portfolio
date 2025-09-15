import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";
import { FiverUrl, ResumeUrl, UpworkUrl } from "../../constants/constants";
import LinkButton from "../../styles/GlobalComponents/LinkButton";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello! <br />
          I'm Bahrul Aji Santoso
        </SectionTitle>
        <SectionText>
          A Mobile Developer in
          Android and IOS application. Proficient in
          Flutter and Kotlin for seamless mobile app development.
        </SectionText>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            margin: "0 0 80px",
          }}
        >
          <LinkButton alt="upwork" href={UpworkUrl} target="_blank">
            Upwork
          </LinkButton>
          <LinkButton alt="fiverr" href={FiverUrl} target="_blank">
            Fiverr
          </LinkButton>
          <LinkButton alt="resume" href={ResumeUrl} target="_blank">
            Resume
          </LinkButton>
        </div>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
