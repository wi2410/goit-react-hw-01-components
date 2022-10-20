import styled from '@emotion/styled'

export const Item = styled.li`
    display: flex;
    width: 250px;
    border: color: rgb(133, 132, 132);
    border-radius: 4px;
    background-color: white;
    margin: 0 auto;
    margin-bottom: 5px;
    padding: 5px;
    box-shadow: 4px 4px 5px 1px rgba(219,215,219,1);
    
    &:hover {
        background-color: rgb(175, 238, 238);
    }
`;

export const FriendName = styled.p`
    font-size: 18px;
    font-weight: 700;
    margin-left: 10px;
`;

export const Status = styled.span`
    width:20px;
    height: 20px;
    border-radius:50%;
    margin: auto 10px;
    background-color: ${props => 
    props.type === true ? "green" : "red"
    }};
`;