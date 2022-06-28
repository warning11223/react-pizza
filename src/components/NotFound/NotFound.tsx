import React from 'react';

import styles from './NotFound.module.scss'

const NotFound: React.FC = () => {
    return (
        <div className={styles.root}>
            <h1>404 Page not found 😕</h1>
            <p className={styles.desc}>Данная страница отсутствует</p>
        </div>
    );
};

export default NotFound;
