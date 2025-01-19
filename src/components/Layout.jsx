/* eslint-disable react/prop-types */
import NavBar from "./NavBar";

export default function Layout({children}){
    return (
        <div className="flex flex-col min-h-svh mx-auto -bg-background text-foreground" id="layout">
            <NavBar />
            <main className="flex-grow p-4 max-w-80ch" id="main-content">
                {children}
            </main>
        </div>
    );
}