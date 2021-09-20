import * as React from "react"
import { Link } from 'gatsby'
import Company from '../../content/company.yaml'
import Logo from '../images/logos/black.svg'

const Header = () => {
  return (
    <header>
      <h1><img id="logoHeader" src={Logo} alt={Company.name}/></h1>
      <nav>
        <ul>
          <li><Link to='/'>Accueil</Link></li>
          <li><Link to='/services'>Services</Link></li>
          <li><Link to='/blogue'>Blogue</Link></li>
          <li><Link to='/a-propos-de-nous'>À propos de nous</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
