import React from 'react';

const Header = (props) => {
  return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src="https://acm-assets.eco.astro.com.my/images/astro-logo-white.svg" alt="" height="24" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://promotions.astro.com.my/">Promotions</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://support.astro.com.my/">Support</a>
        </li>
      </ul>
    </div>
  </div>
</nav>)
}


export default Header;
