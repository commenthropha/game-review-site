import getRecentPosts from "../(queries)/getRecentPosts";
import NavbarClient from "./NavbarClient";

/*
 * Need this component to serve the Navbar,
 * since we require a parent component that
 * is a server component to get query data
 */
const NavbarServer = async () => {
  const recentPosts: Post[] = await getRecentPosts();

  return <NavbarClient posts={recentPosts} />;
};

export default NavbarServer;
