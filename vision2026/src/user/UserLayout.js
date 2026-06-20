import Navbar from "./components/Navbar";
import Bg from "./components/Bg";
import "./UserLayout.css";


function UserLayout({children}) {


return (

<div className="user-layout">


<Navbar/>
<Bg />

<div className="user-page">

{children}

</div>


</div> 


)

}


export default UserLayout;