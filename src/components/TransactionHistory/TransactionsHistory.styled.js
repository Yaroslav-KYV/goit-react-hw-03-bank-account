import styled from 'styled-components';

export const StyledTable = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
  padding: 0;
  width: 60%;
  text-align: center;
  box-shadow: 1px 1px 3px 1px rgba(191, 205, 222, 0.75);
`;

export const StyledThead = styled.thead`
  font-family: 'Helvetica Neue', sans-serif;
  background-color: #ebeef2;
  padding: 10px;
  text-transform: uppercase;
  font-size: 13px;
`;
export const StyledTh = styled.th`
  border-right: 1px solid #fff;
  :last-child {
    border: none;
    width: 30%;
    padding: 30px;
  }
`;
export const StyledTbody = styled.tbody`
  color: #5c6975;
  font-weight: 300;
`;
export const StyledTd = styled.td`
  border-right: 1px solid #e0e6e7;
  border-bottom: 1px solid #e0e6e7;
  width: 30%;
  padding: 30px;
`;
