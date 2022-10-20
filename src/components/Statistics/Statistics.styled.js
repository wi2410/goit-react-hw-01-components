import styled from '@emotion/styled'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 350px;
    border: 1px solid rgb(133, 132, 132);
    background-color: white;
    margin: 0 auto;
    margin-bottom: 50px;
    box-shadow: 4px 4px 5px 1px rgba(219,215,219,1);
    `;

export const Title = styled.h2`
    text-transform: uppercase;
    color: rgb(133, 132, 132);
    margin: 0 auto;
    padding: 20px;    
`;

export const StatList = styled.ul`
    display: flex;
    height: 70px;
    width: 100%;
    padding: 0;
    margin: 0;
`;

export const Item = styled.li`
    display: grid;
    justify-items: center;
    align-items: center;
    color: white;
    width: 100%;
`;
