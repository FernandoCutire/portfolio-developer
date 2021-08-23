import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi my name <br />
          is Fernando Cutire
        </SectionTitle>
        <SectionText>
          Software Engineer developing apps on the web , helping business with
          cloud technologies and improve their processes with software.
        </SectionText>
        <a href='#about'>
          <Button onClick={props.handleClick}>Learn More</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
