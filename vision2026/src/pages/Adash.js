import "../Admindash/Admin.css";
// import Bg from "../Admindash/Bg";
import Sidebar from "../Admindash/Sidebar";
import Topbar from "../Admindash/Topbar";
import Pgheader from "../Admindash/Pgheader";
import Stat from "../Admindash/Stat";
import ChrtActivity from "../Admindash/ChrtActivity";
import Tablestatus from "../Admindash/Tablestatus";
import Erm from "../Admindash/Erm";
import Footer from "../Admindash/Footer";

import useAdminDashboard from "../hooks/useAdminDashboard";
import NeuralCanvas from "../Admindash/NeuralCanvas";



function Adash  (){

     // Start all dashboard JavaScript effects
  useAdminDashboard();

    return(
        <main className="main">

        {/* <Bg /> */}
        <NeuralCanvas />
        <Sidebar />
        <Topbar />
        <Pgheader />
        <Stat />
        <ChrtActivity />
        <Tablestatus />
        <Erm />
        <Footer />

        </main>
    );
}
export default Adash;