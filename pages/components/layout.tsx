import { ReactNode } from 'react';
import Header from './header';

interface Props {
  children: ReactNode | ReactNode[]
 }

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}