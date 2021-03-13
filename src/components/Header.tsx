import '../styles/header.scss'

import logoImg from '../../public/logo.svg';

export function Header() {
  return (
    <header className="header">
      <div>
        <img src={logoImg} alt="to.do"/>
      </div>
    </header>
  )
}