import styled, {keyframes } from 'styled-components'


const rubberBand = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, .95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }

`;

export const AnimatedTextContainer = styled.section`

  .animatedTextContent span span {
    display: inline-block;
    padding-right: 5px;
    
    &:hover {
      color: ${props => props.theme.colors.tertiaryColor};
      animation: ${rubberBand} 4s both 1;
      animation-fill-mode: forwards;

    }
  }

`