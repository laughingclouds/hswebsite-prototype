import Image from 'next/image';
import Link from 'next/link';
import headerLogo from '../public/hsheader.png'

function NavLink({ href, children }) {
  return (
    <Link href={href} passHref>
      <a className='link link-hover'>
        {children}
      </a>
    </Link>
  );
}

export default function Header() {
  return (
    <header>
      <nav className='navbar justify-between'>

        <div className='flex-none'>
          <NavLink href="/">
            <Image src={headerLogo} />
          </NavLink>
        </div>

        <div className='flex-none'>
          <ul className='menu menu-horizontal p-0'>
            <li>
              <a href='https://fest.hackoverflow.in/' target="_blank" className='link link-hover'>
                Hack The Fest
              </a>
            </li>
            <li><NavLink href="/">Home</NavLink></li>
            <li><NavLink href="/events">Events</NavLink></li>
            <li><NavLink href="/about">About</NavLink></li>
            <li><NavLink href="/initiatives">Initiatives</NavLink></li>
            <li><NavLink href="/team">Team</NavLink></li>
            <li><NavLink href="/contact">Contact</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}