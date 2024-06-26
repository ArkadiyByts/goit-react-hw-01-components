import PropTypes from 'prop-types';
import css from 'styles/FriendList.module.css'

const FriendList = ({ friends }) => {
    


    return (
        <ul className={css.friendList}>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <li className={css.item}
                    key={id}
                    
                    >
                    {isOnline ? <span className={css.statusActive}></span> : <span className={css.status}></span>}
                   
                   <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                   <p className={css.name}>{name}</p>
                </li>
            ))}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ).isRequired,
}

export default FriendList;