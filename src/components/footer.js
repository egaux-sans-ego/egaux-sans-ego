import * as React from "react"
import Company from '../../content/company/company.yaml'

const year = new Date().getFullYear()

const Footer = () => {
  return (
    <footer>
      <p>© {Company.name} {Company.founding_year} {year!==Company.founding_year?`- ${year}`:''}</p>
    </footer>
  )
}

export default Footer;
