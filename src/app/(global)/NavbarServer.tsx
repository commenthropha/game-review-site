import getRecentPosts from "../(queries)/getRecentPosts";
import NavbarClient from "./NavbarClient";

const NavbarServer = async () => {
  const recenPosts: Post[] = await getRecentPosts();

  return <NavbarClient />;
};

export default NavbarServer;
