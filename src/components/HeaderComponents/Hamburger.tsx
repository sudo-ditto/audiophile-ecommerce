import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { MouseEventHandler } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import styles from '../../assets/styles/scss/main.module.scss';

const Bars = faBars as IconProp;

interface Props {
    clicked: MouseEventHandler<HTMLDivElement>;
}

const Hamburger = ({ clicked }: Props) => {
    return (
        <div className={styles.HamburgerIcon} onClick={clicked}>
            <FontAwesomeIcon icon={Bars} />
        </div>
    );
};

export default Hamburger;
