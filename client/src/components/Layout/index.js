import NavBar from "../NavBar";
import Footer from "../Footer";
import { Card } from "@mui/material";

export default function Layout({ children }) {

    return (
        <div>
            <NavBar></NavBar>
            <Card sx={{
                minHeight: '85vh',
                display:'flex',
                justifyContent:'center',
                alignItems: 'center',
                backgroundColor: 'white',
                color: 'black'
            }}>
                {children}
            </Card>
            <Footer></Footer>
        </div>
    )
}