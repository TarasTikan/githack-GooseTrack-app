import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  padding-left: 0;
  padding-right: 0;

  margin: 0;

  /* margin-left: auto;
  margin-right: auto; */

  @media screen and (min-width: ${props => props.theme.breakpoints.mobile}) {
    max-width: ${props => props.theme.breakpoints.mobile};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    max-width: ${props => props.theme.breakpoints.table};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    max-width: ${props => props.theme.breakpoints.desktop};
  }
`;

export const Main = styled.main`
  display: flex;
  height: 100vh;
  /* justify-content: center; */
`;

export const WrapLeftColumn = styled.div`
  /* background-color: tomato; */
  /* transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out; */
  display: flex;
  width: 225px;
  @media screen and (min-width: ${props => props.theme.breakpoints.table}) {
    width: 289px;
  }
`;

export const WrapRightColumn = styled.div`
  flex-grow: 1;
`;
