import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  Link,
  Img,
  My_Section,
  My_SectionTitle
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import Image from "next/image";
const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <My_Section row nopadding>
          <Img src="/images/img.png" />
          <My_SectionTitle center> Sr. React Native Developer</My_SectionTitle>
        </My_Section>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
          This is Ahsan Muneer. Inquisitive and Highly-motivated software
          engineer, with strong web and mobile application skills.
          Forward-thinker by nature and loves to code. Spends most of my time
          learning and experimenting with anything that looks promising.
        </SectionText>
        <Button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/files/resume.pdf";
          }}
        >
          My Resume
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
