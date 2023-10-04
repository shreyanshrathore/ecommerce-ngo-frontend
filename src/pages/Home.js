import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/components/ProductList";
import { selectLoggedInUser } from "../features/auth/authSlice";
import NgoList from "../features/auth/compponents/NgoList";
import { useSelector } from "react-redux";

function Home() {
  const admins = useSelector(selectLoggedInUser);
  return (
    <div>
      {console.log(admins)}
      <NavBar>
        <div>
          {admins.role === "owner" ? (
            <div>
              <NgoList />
            </div>
          ) : (
            <ProductList></ProductList>
          )}
        </div>
      </NavBar>
    </div>
  );
}

export default Home;
