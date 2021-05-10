import styled, {keyframes, css } from 'styled-components'

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

  /* 0% {
    color: red;
  }

  100% {
    color: blue;
  } */

`;

const animationCss = ({ animation }) => {
  if (animation) {
    return css`
      animation: ${rubberBand} 1s 1;
    `;
  } else {
    return css`
      animation: ${rubberBand} 1s 1;
    `;
  }
};

export const AnimatedTextContainer = styled.section`

  .bouncing-animation {
    ${animationCss}
  }

  .animatedTextContent span span {
    display: inline-block;
    padding-right: 5px;
    &:hover {
      color: ${props => props.theme.colors.tertiaryColor}
    }
  }

`