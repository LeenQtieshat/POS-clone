import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PageRoutes from "../components/PageRoutes";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/header";
import { useLocation } from "react-router-dom";
import styles from "./styles.module.scss";

const {
  appContainer,
  mainContent,
  appContent,
  appContentWithoutSidebar,
  sidebarContainer,
} = styles;

const AppContainer = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const location = useLocation();

  const hideSidebar = location.pathname === "/confirmation";
  const checkUserAuthenticated = () => {
    if (!isAuthenticated) {
      navigate("/", { replace: true });
    }
  };

  useEffect(() => {
    checkUserAuthenticated();
    /* eslint-disable-next-line */
  }, []);

  return (
    <div className="App">
      {/* <Modal /> */}
      {isAuthenticated ? (
        <div className={appContainer}>
          <div className={hideSidebar ? appContentWithoutSidebar : appContent}>
            <TopBar />
            <main className={mainContent}>
              <PageRoutes />
            </main>
          </div>
          {!hideSidebar && (
            <div className={sidebarContainer}>
              <Sidebar />
            </div>
          )}
        </div>
      ) : (
        <PageRoutes />
      )}
    </div>
  );
};

export default AppContainer;
