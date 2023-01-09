import React from 'react'

const Navlinks = (props) => {
  const {className} = props

  return (
    <ul className={className + ' font-semibold space-x-6 text-base'}>
      <li></li>
          <li>
            <a href="">Paytm for Consumer</a>
          </li>
          <li>
            <a href="">Paytm for Business</a>
          </li>
          <li>
            <a href="">Investor Relations</a>
          </li>
          <li>
            <a href="">Company</a>
          </li>
          <li>
            <a href="">Career</a>
          </li>
        </ul>
  )
}

export default Navlinks