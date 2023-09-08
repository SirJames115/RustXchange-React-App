import React from "react";
import Logo from "../moralis-logo.svg";
import RustLogo from "../RustXchange (DEX)_Logo.png";
import Eth from "../eth.svg";
import { Link } from "react-router-dom";

function Header(props) {
  const { address, isConnected, connect } = props;

  return (
    <>
      {/* <div className="rust-logo">
        <Link to="/" className="link">
          <img src={RustLogo} alt="logo" className="logo" />
        </Link>
      </div> */}
      <header>
        <div className="leftH">
          {/* <img src={Logo} alt="logo" className="logo" /> */}
          <Link to="/" className="link">
            <div className="headerItem">Swap</div>
          </Link>
          <Link to="/tokens" className="link">
            <div className="headerItem">Tokens</div>
          </Link>
          <Link to="/products" className="link">
            <div className="headerItem">Products</div>
          </Link>
          <a href="https://bscscan.com/tokens" target="_blank">
            <div className="headerItem">Charts</div>
          </a>
          <Link to="/about" className="link">
            <div className="headerItem">About</div>
          </Link>
        </div>
        <div className="rightH">
          <div className="headerItem">
            <img src={Eth} alt="eth" className="eth text-light" />
            Etherium
          </div>
          <div className="connectButton" onClick={connect}>
            {isConnected
              ? address.slice(0, 4) + "..." + address.slice(38)
              : "Connect Wallet"}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
