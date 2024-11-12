import NavBar from "./Navbar";
import './CSS/Home.css';

function Home() {
    return (
        <>
            <body className="body">
                <h1> Mai Portfolio </h1>
                <NavBar />
                <div className="photo-container">
                    <img
                        src='/Mai.jpg'
                        alt="A femme-presenting Asian-American person, wearing hoop earrings with bright pink hair smiling against the background of a forest"
                    />
                </div>
            </body>
        </>
    );
}

export default Home;
