import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import type { NextPage } from 'next';
import { MouseEventHandler } from 'react';

import styles from '../../assets/styles/scss/main.module.scss';

interface Props {
    clicked: MouseEventHandler<HTMLDivElement>;
}

const Hamburger = ({ clicked }: Props) => {
    return (
        <div className={styles.HamburgerIcon} onClick={clicked}>
            <FontAwesomeIcon icon={faBars} />
        </div>
    );
};

export default Hamburger;
