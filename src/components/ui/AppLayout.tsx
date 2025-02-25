import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import Footer from "./Footer";

function Applayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      {isLoading && <Loader />}
      <main className="mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Applayout;
