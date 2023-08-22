import getRecentPosts from "../(queries)/getRecentPosts";
import NavbarClient from "./NavbarClient";

const NavbarServer = async () => {
  const recentPosts: Post[] = await getRecentPosts();

  return <NavbarClient posts = {recentPosts}/>;
};

export default NavbarServer;
