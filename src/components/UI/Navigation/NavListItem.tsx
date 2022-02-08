import Link from 'next/link';

interface Props {
    children: React.ReactNode;
    urlLink: string;
}

const NavListItem = ({ children, urlLink }: Props) => {
    return (
        <li>
            <Link href={urlLink}>{children}</Link>
        </li>
    );
};

export default NavListItem;
