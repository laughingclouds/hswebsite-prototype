import Image from 'next/image';
import Anchor from './Anchor';
import headerLogo from '../public/hsheader.png';
import htsLogo32 from '../public/htslogo-32x32.png';


function NavLink({ href, children, className = "" }) {
  const classes = "link-hover " + className;
  return (
    <Anchor href={href} className={classes}>
      {children}
    </Anchor>
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
              <a href='https://fest.hackoverflow.in/' target="_blank" rel='noreferrer' className='link link-hover'>
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

      <div className="navbar bg-base-100">
        <div className="navbar-start">
        <div className='hidden lg:block'>
          <NavLink href="/">
            <Image src={headerLogo} />
          </NavLink>
        </div>
        
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <Image src={htsLogo32} />
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><NavLink href="">Item 1</NavLink></li>
              <li tabIndex={0}>
                <NavLink href="." className='justify-between'>Parent<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg></NavLink>
                <ul className="p-2 bg-base-100">
                  <li><NavLink href="">Submenu 1</NavLink></li>
                  <li><NavLink href="">Submenu 2</NavLink></li>
                </ul>
              </li>
              <li><NavLink href="">Item 3</NavLink></li>
            </ul>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li><NavLink href="">Item 1</NavLink></li>
            <li tabIndex={0}>
              <NavLink href="." className='justify-between'>Parent<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg></NavLink>
              <ul className="p-2 bg-base-100">
                <li><NavLink href="">Submenu 1</NavLink></li>
                <li><NavLink href="">Submenu 2</NavLink></li>
              </ul>
            </li>
            <li><NavLink href="">Item 3</NavLink></li>
          </ul>
        </div>
      </div>
    </header>
  );
}