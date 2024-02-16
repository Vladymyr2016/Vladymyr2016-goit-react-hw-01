import React from 'react';
import s from './Profile.module.css';

const Profile = ({ user }) => {
  const {
    username,
    tag,
    location,
    stats: { followers, likes, views },
  } = user;
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <div className={s.listItem}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
            alt="User avatar"
            className={s.avatar}
          />
          <p className={s.name}>{username}</p>
          <p className={s.tag}>{tag}</p>
          <p className={s.location}>{location}</p>
        </div>
      </div>

      <ul className={s.stats}>
        <li className={s.itemInfo}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li className={s.itemInfo}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li className={s.itemInfo}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;
