import React, { useState } from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => {
  const [showFullText, setShowFullText] = useState(false);

  // Define the full text content
  const fullText = `
    I am a driven Bachelor of Technology student at Delhi Technological University, specializing in web development within the MERN (MongoDB, Express.js, React, Node.js) stack. With a solid academic foundation and hands-on experience, I have interned as an Associate Web Developer, actively contributing to dynamic web applications. My proficiency in the MERN stack allows me to create robust and efficient web solutions. I have honed my problem-solving skills by successfully tackling over 1000+ Data Structure and Algorithm questions, reflecting in my impressive LeetCode rating of 1612. My ambition is to apply my academic knowledge and practical expertise to excel in web development, staying up-to-date with emerging technologies, and delivering top-notch solutions to complex challenges. I am eager to explore opportunities where I can contribute my skills and passion to innovative web development projects, making a meaningful impact in this dynamic field.
  `;

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi!! <br />
          My Name is Aman Rawat
        </SectionTitle>
        <SectionText>
          {showFullText ? fullText : fullText.split(' ').slice(0, 28).join(' ')} {showFullText ? null : '...'}
        </SectionText>
        <Button onClick={toggleText}>
          {showFullText ? 'Show Less' : 'Show More'}
        </Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
