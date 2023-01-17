import { Link } from "react-router-dom";
import OffcanvasMenu from "react-offcanvas-menu-component";

// name you menu component and pass the location parameter
// that will be drilled from withRouter
function Menu({ location }) {
  return (
    <OffcanvasMenu
      Link={Link} // react-router-dom Link
      location={location} // location parameter passed from Router
      config={{
        width: 300, // you can modify default width
        push: true, // if you want to enable push feature
      }}
      // this is where you create your menu items
      menu={[
        // basic menu item
        { text: "Users", link: "/users" },

        // menu item with submenu
        {
          text: "Cats",
          link: "/cats",
        },
        {
          text: "Dogs",
          link: "/dogs",
        },
        {
          text: "Clients",
          link: "/clients",
        },
      ]}
      /*       header={
        // you can add logo to the header for example
        //<img className="menu-logo" alt="logo" width="250" height="100" />
      } */
      footer={<Footer />} // if you want content in footer
    />
  );
}

// some quick markup for the footer section of offcanvas menu
const Footer = () => {
  /*   return (
    <div className="social-wrap">
      <h4>Socia Networks Footer</h4>
      <ul className="social">
        <li>
          <a href="facebook">Facebook</a>
        </li>
        <li>
          <a href="twitter">Twitter</a>
        </li>
      </ul>
    </div>
  ); */
};

// You need to wrap export with withRouter
// so you can access the location prop in your component
// and pass it to the react-offcanvas-menu
export default Menu;
