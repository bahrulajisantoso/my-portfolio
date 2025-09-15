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

import { FaDatabase, FaMobileAlt } from 'react-icons/fa';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the information technologiy world.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <FaMobileAlt size="3rem" />
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
          <FaDatabase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Basic with PHP, MySQL, and Hapi.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      {/* <ListItem>
        <picture>
          <FaBrain size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Blockchain</ListTitle>
          <ListParagraph>
            Experience with <br />
            Solana Blockchain <br />
            using Rust
          </ListParagraph>
        </ListContainer>
      </ListItem> */}
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
