import { Link } from "react-router-dom";


const Navigation = () => {
  const links = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about-us" },
    { label: "Listings", path: "/listing-v1" },
    { label: "Blog", path: "/blog" },
    { label: "User", path: "/user-profile" },
    { label: "Service", path: "/service" },
  ];

  return (
    <>
      {links.map((link, index) => (
        <li className="list-inline-item" key={index}>
          <Link to={link.path}>{link.label}</Link>
        </li>
      ))}
    </>
  );
};

export default Navigation;
