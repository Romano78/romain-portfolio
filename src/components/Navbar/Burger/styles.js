import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: absolute;
  top: 12px;
  left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }
  
`;

export const BurgerLines = styled.div`
    width: 2rem;
    height: 0.25rem;
    background: ${props => props.open ? props.theme.colors.primaryColor: props.theme.colors.secondaryColor };
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 2px;


    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(25px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
`