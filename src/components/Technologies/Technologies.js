import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

import { FcSmartphoneTablet, FcDatabase } from "react-icons/fc";
import Image from "next/image";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the information technologiy world.
    </SectionText>

    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        columnGap: "2rem",
        rowGap: "2rem",
        alignItems: "center",
      }}
    >
      <img src="/icons/android.svg" alt="android" style={{ height: "72px", width: "auto" }} />
      <img src="/icons/apple.svg" alt="apple" style={{ height: "72px", width: "auto" }} />
      <img src="/icons/flutter.svg" alt="flutter" style={{ height: "72px", width: "auto" }} />
      <img src="/icons/materialdesign.svg" alt="material design" style={{ height: "72px", width: "auto" }} />
      <img src="/icons/dart.svg" alt="dart" style={{ height: "72px", width: "auto" }} />
      <img src="/icons/kotlin.svg" alt="kotlin" style={{ height: "72px", width: "auto" }} />
      <img src="/icons/java.svg" alt="java" style={{ height: "72px", width: "auto" }} />
      <img src="/icons/androidstudio.svg" alt="android studio" style={{ height: "72px", width: "auto" }} />
      <img src="/icons/vscode.svg" alt="vs code" style={{ height: "72px", width: "auto" }} />
      <img src="/icons/xcode.svg" alt="xcode" style={{ height: "72px", width: "auto" }} />
      <img src="/icons/firebase.svg" alt="firebase" style={{ height: "72px", width: "auto" }} />
      <img src="/icons/php.svg" alt="php" style={{ height: "72px", width: "auto" }} />
      <img src="/icons/mysql.svg" alt="my sql" style={{ height: "72px", width: "auto" }} />
      <img src="/icons/js.svg" alt="js" style={{ height: "72px", width: "auto" }} />
      <img src="/icons/nodejs.svg" alt="node js" style={{ height: "72px", width: "auto" }} />
      <img src="/icons/git.svg" alt="git" style={{ height: "72px", width: "auto" }} />
      <img src="/icons/github.svg" alt="github" style={{ height: "72px", width: "auto" }} />
      <img src="/icons/linux.svg" alt="linux" style={{ height: "72px", width: "auto" }} />
    </div>

    <List>
      <ListItem>
        <picture>
          <FcSmartphoneTablet size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Mobile</ListTitle>
          <ListParagraph>
            Proficient with Flutter, Kotlin, Multi Platform, and Clean Architecture
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FcDatabase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Basic with PHP, MySQL, and Hapi.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
