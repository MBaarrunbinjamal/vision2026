import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";
import "./AdminLayout.css";

function AdminLayout({children}) {

    return (
        <div className="admin-layout"> 
 
            <Sidebar />
            <Nav/>
            {/* <Nav/> */}
           

                <div className="admin-content">
                    {children}
                </div>

            </div>

        
    )
}

export default AdminLayout;