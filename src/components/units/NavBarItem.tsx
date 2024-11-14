import { Link } from '@chakra-ui/react';

export type NavBarItemProps = {
  href: string;
  text: string;
};

export const NavBarItem = ({ href, text }: NavBarItemProps) => {
  return (
    <Link
      href={href}
      color="white"
      fontSize="20px"
      fontWeight="semibold"
    >
      {text}
    </Link>
  );
};
