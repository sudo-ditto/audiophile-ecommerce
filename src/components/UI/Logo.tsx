import Image from 'next/image';
import Link from 'next/link';

import styles from '../../assets/styles/scss/main.module.scss';
import LogoImage from '../../assets/images/shared/logo.svg';

const Logo = () => {
    return (
        <div className={styles.Logo}>
            <Link href="/">
                <a>
                    <Image src={LogoImage} alt="Audiophile logo" width={143} height={25} />
                </a>
            </Link>
        </div>
    );
};

export default Logo;
