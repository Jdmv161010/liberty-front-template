import React from 'react';
import styles from './LibertyFooter.module.scss';

const LibertyFooter = () => {
  return (
    <div className={styles.footer}>
      <hr className={styles.separator} />
      <span className={styles.text}>Liberty 2022. Todos los derechos reservados</span>
    </div>
  );
};

export default LibertyFooter;
