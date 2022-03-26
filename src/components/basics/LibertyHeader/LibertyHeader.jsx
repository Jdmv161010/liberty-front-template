import React from 'react';
import PropTypes from 'prop-types';
import logoIcon from '../../../assets/icons/liberty-logo.svg';
import arrowIcon from '../../../assets/icons/arrow-down-small.svg';
import userIcon from '../../../assets/icons/user.svg';
import notificationIcon from '../../../assets/icons/notification.svg';
import LibertyButton from '../LibertyButton/LibertyButton';
import styles from './LibertyHeader.module.scss';

const LibertyHeader = ({ userName }) => {
  return (
    <nav className={styles.navbar}>
      <img src={logoIcon} alt="Liberty" />
      <div className={styles.navbarProfileContainer}>
        <img src={arrowIcon} alt="arrow" style={{ cursor: 'pointer' }} />
        <span className={styles.navbarUserName}>{userName}</span>
        <div className={styles.navbarIcon}>
          <img src={userIcon} alt="user" />
        </div>
        <div className={styles.navbarIcon}>
          <img src={notificationIcon} alt="notification" />
        </div>
        <LibertyButton type="tertiary">Cerrar sesión</LibertyButton>
      </div>
    </nav>
  );
};

LibertyHeader.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default LibertyHeader;
