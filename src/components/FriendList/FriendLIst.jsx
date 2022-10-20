import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { Container } from "./FriendList.styled";

export const FriendList = ({ friends}) => {
    return <Container>
                {
            friends.map(friend => {
                return <FriendListItem key={friend.id.toString()} avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline}  />    
            })
        }
        
            </Container>
}



FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
  }),   )
}