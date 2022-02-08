import Link from 'next/link';

import styles from '../../assets/styles/scss/main.module.scss';

const Logo = () => {
    return (
        <div className={styles.Logo}>
            <Link href="/">
                <a>audiophile</a>
            </Link>
        </div>
    );
};

export default Logo;
