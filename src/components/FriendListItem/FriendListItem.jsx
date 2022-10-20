import {Item,FriendName,Status} from './FriendListItem.styled';

export const FriendListItem = ({id, avatar, name, isOnline}) => {
    return <Item key={id}>
        <Status type={isOnline.toString()}>{isOnline}</Status>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <FriendName>{name}</FriendName>
</Item>
}
