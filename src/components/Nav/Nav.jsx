import "./nav.scss";

const Nav = () => {
  return (
    <div className="smp-nav">
      <div className="smp-nav__tabs">
          <div className="smp-nav__tabs__tab"><button>Home</button></div>
          <div className="smp-nav__tabs__tab"><button>Socials</button></div>
          <div className="smp-nav__tabs__tab"><button>CV</button></div>
      </div>
    </div>
  );
};

export default Nav;
