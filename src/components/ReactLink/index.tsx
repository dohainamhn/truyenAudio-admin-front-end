import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
interface Props {
  children: React.ReactNode;
  to: string;
}
export const ReactLink = ({ children, to }: Props) => {
  return (
    <Link to={to}>
      <div className='react-link'>{children}</div>
    </Link>
  );
};
