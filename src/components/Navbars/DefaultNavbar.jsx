import React from "react";
import classNames from "classnames/bind";
import { Link } from 'react-scroll'

// reactstrap components
import { Nav, Container } from "reactstrap";

class DefaultNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navbarExpanded: false
    };

    this.navbar = React.createRef();

    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState(prevState => ({
      navbarExpanded: !prevState.navbarExpanded
    }));
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const navigation = this.navbar.current;
    const navTop = navigation.offsetTop + navigation.offsetHeight;

    if (window.scrollY >= navTop) {
      navigation.classList.add("navbar-sticky");
    } else {
      navigation.classList.remove("navbar-sticky");
    }
  };

  render() {
    return (
      <nav
        ref={this.navbar}
        className={classNames(
          "navbar navbar-expand-md main-nav navigation fixed-top sidebar-left",
          { "navbar-expanded": this.state.navbarExpanded }
        )}
      >
        <Container>
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.toggleNavbar}
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>





          <Link to="hero" smooth={true}>
            <img
              src={require("assets/img/logo.png")}
              alt="Ryyber"
              className="logo logo-sticky d-block d-md-none"
            />
            <img
              src={require("assets/img/logo-light.png")}
              alt="Ryyber"
              className="logo d-none d-md-block"
            />
          </Link>
          <div className="collapse navbar-collapse">
            <div className="sidebar-brand">
              <img
                src={require("assets/img/logo.png")}
                alt="Ryyber logo"
                className="logo"
              />
            </div>

            <Nav className="nav navbar-nav ml-auto" navbar>
              <Link onClick={this.toggleNavbar} className="nav-link" to="what" smooth>Mikä</Link>
              <Link onClick={this.toggleNavbar} className="nav-link" to="app" smooth>Sovellus</Link>
              <Link onClick={this.toggleNavbar} className="nav-link" to="about" smooth>Meistä</Link>
              <Link onClick={this.toggleNavbar} className="nav-link" to="roadmap" smooth>Suunnitelma</Link>
              <Link onClick={this.toggleNavbar} className="nav-link" to="faq" smooth>kysyttyä</Link>
            </Nav>
          </div>
        </Container>
      </nav>
    );
  }
}

export default DefaultNavbar;
