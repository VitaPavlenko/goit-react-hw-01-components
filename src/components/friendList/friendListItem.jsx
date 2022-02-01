import PropTypes from 'prop-types';
import s from './friendListItem.module.css';
import { FriendsIsOnline } from './friendList.styled.js';
function FriendListItem(props) {
  const { avatar, name, isOnline } = props;

  return (
    <li className={s['item']}>
      <FriendsIsOnline isOnline={isOnline}></FriendsIsOnline>
      <img className={s['avatar']} src={avatar} alt="User avatar" width="48" />
      <p className={s['name']}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
