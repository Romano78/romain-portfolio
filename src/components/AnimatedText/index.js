import React from "react";
import { AnimatedTextContainer } from './styles'
import Title from '../Utilities/Title'
import SplitText from './SplitText/index'

const AnimatedText = ({ textColor, overlayColor, children, ...props }) => {

  return (
    <AnimatedTextContainer
      {...props}
    >
      <Title 
        type="heading1"
        as="h1"
        className="animatedTextContent"
      >
        <SplitText copy={children} role="heading"/>
      </Title>
    </AnimatedTextContainer>
  );
};

export default AnimatedText 
