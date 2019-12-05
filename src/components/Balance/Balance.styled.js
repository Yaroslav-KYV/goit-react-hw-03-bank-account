import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 40px;
`;
export const StyledSpan = styled.span`
  color: #5c6975;
  font-weight: bold;

  :first-child {
    color: #98c665;
  }

  :nth-child(2),
  :nth-child(4) {
    padding: 2px 20px 0 5px;
  }

  :nth-child(3) {
    color: #e73439;
  }

  :nth-child(5) {
    padding-top: 2px;
  }
`;
