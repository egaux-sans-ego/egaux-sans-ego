import * as React from "react"
import Company from '../../content/company.yaml'

const year = new Date().getFullYear()

const Footer = () => {
  return (
    <footer>
      © {Company.name} {Company.founding_year} {year!==Company.founding_year?`- ${year}`:''}
    </footer>
  )
}

export default Footer;
