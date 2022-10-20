import styled from '@emotion/styled'

export const UserProfile = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    border: 1px solid rgb(128, 128, 128);
    background-color: white;
    box-shadow: 4px 4px 5px 1px rgba(219,215,219,1);
    margin: 50px auto;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
`;

export const UserName = styled.p`
font-size: 24px;
font-weight: 700;
`;

export const UserInfo = styled.p`
margin: 5px;
color: black;
`

export const StatsList = styled.ul`
    display: flex;
    height: 70px;
    width: 100%;
    padding: 0;
    margin: 0;
`;

export const StatsItem = styled.li`
    display: grid;
    justify-items: center;
    align-items: center;
    background-color: rgb(230, 231, 232);
    border: 1px solid rgb(128, 128, 128);
    width: 100%;
`;

export const StatInfo = styled.span`
    font-weight: 700;
`;
export const Avatar = styled.img`
    border-radius: 50%;
    border: 1px solid rgb(128, 128, 128);
`