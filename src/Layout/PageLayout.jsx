import NavBar from "../components/NavBar/NavBar";
import NavBarMobile from "../components/NavBar/NavBarMobile";
import useWidth from "../hooks/useWidth";

function PageLayout({ children }) {
  const { width } = useWidth();
  return (
    <>
      {width > 900 ? <NavBar /> : <NavBarMobile />}
      {children}
    </>
  );
}

export default PageLayout;
