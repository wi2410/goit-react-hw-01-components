import styled from '@emotion/styled'

export const TransactionTable = styled.table`
width: 700px;
text-align: center;
color: var(--primary-color);
box-shadow: var(--box-shadow);
background-color: white;
border-collapse: collapse;
margin: 25px auto;
`;

export const Thead = styled.thead`
    color: white;
    background-color: #00bfff;
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
        background-color: var(--background-color);
    }
    &:hover{
        background-color: rgb(202, 242, 242);
    }
`;