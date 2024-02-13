import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/components/ProductList";
import { selectLoggedInUser } from "../features/auth/authSlice";
import NgoList from "../features/owner/components/NgoList";
import { useSelector } from "react-redux";
import { selectUserInfo } from "../features/user/userSlice";

function Home() {
  const admins = useSelector(selectLoggedInUser);
  const user = useSelector(selectUserInfo)
  return (
    <div>
      {console.log(user)}
      {/* {console.log(admins)} */}
      <NavBar>
        <div>
          {user &&  user.role === "owner" ? (
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
