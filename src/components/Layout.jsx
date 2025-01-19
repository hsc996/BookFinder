/* eslint-disable react/prop-types */
import NavBar from "./NavBar";

export default function Layout({children}){
    return (
        <div className="content-container" id="layout">
            <NavBar />
            <main className="main-content" id="main-content">
                {children}
            </main>
        </div>
    );
}