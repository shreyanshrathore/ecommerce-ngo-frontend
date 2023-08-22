import NavBar from "../features/navbar/Navbar";
import AdminProductList from '../features/admin/components/AdminProductList'
function Home() {
    return ( 
        <div>
            <NavBar>
                <AdminProductList/>
            </NavBar>
        </div>
     );
}

export default Home;