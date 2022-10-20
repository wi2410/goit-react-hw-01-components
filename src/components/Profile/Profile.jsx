import PropTypes from 'prop-types';
import {UserProfile,Container, StatsList,StatsItem, UserName, UserInfo,StatInfo,Avatar} from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => { 
    return <UserProfile>
                <Container>
                <Avatar
                    src={avatar}
                    alt={username}
                    width="150px"
                />
                <UserName>{ username}</UserName>
                <UserInfo className="tag">@{ tag}</UserInfo>
                <UserInfo className="location">{ location}</UserInfo>
                </Container>
            <StatsList>
                <StatsItem>
                  <span className="label">Followers</span>
                  <StatInfo className="quantity">{ stats.followers}</StatInfo>
                </StatsItem>
                <StatsItem>
                  <span className="label">Views</span>
                  <StatInfo className="quantity">{ stats.views}</StatInfo>
                </StatsItem>
                <StatsItem>
                  <span className="label">Likes</span>
                  <StatInfo className="quantity">{ stats.likes}</StatInfo>
                </StatsItem>
            </StatsList>
        </UserProfile>;
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
}