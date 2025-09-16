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

    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Image src="/icons/android.svg" alt="android" width={40} height={40} />
      <Image src="/icons/flutter.svg" alt="flutter" width={40} height={40} />
      <Image src="/icons/dart.svg" alt="dart" width={40} height={40} />
      <Image src="/icons/kotlin.svg" alt="kotlin" width={40} height={40} />
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
