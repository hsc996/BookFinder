import '../styles/Footer.css'

export function Footer(){
    return(
        <footer>
            <div className="footer-content">
                <p>
                    &copy; {new Date().getFullYear()} Built & designed by {" "}
                    <a href="https://github.com/hsc996">Hannah Scaife</a>
                </p>
            </div>
        </footer>
    )
}