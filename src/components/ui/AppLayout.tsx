import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function Applayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      {isLoading && <Loader />}
      <main className="mx-auto h-full">
        <Outlet />
      </main>
    </>
  );
}

export default Applayout;
