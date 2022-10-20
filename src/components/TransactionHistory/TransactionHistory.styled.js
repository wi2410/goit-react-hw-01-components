import styled from '@emotion/styled'

export const TransactionTable = styled.table`
width: 700px;
text-align: center;
color: black;
box-shadow: 4px 4px 5px 1px rgba(219,215,219,1);
background-color: white;
border-collapse: collapse;
margin: 25px auto;
`;

export const Thead = styled.thead`
    color: white;
    background-color: rgb(0, 191, 255);
`;

export const TableTh = styled.th`
    border: 1px solid white;
`;

export const TableTd = styled.td`
    border: 1px solid #ecf1f4;
    text-transform: capitalize;
`;

export const TableTr = styled.tr`
    height: 35px;
    
    &:nth-of-type(even) {
        background-color: rgb(230, 231, 232);
    }
    &:hover{
        background-color: rgb(175, 238, 238);
    }
`;