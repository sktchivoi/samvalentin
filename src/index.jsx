import { useEffect } from "react"
import Header from "./header"
import { useNavigate } from "react-router-dom";
import Fondo1 from './img/Fondo1.jpg';
import Fondo2 from './img/Fondo2.jpg';

const styles = {
    boton: {
      backgroundColor: '#FFB6C1',
      borderColor: '#FFB6C1',
      color: '#FFFFFF',
      fontSize: '40px',
      marginInline: '50px',
    },
  };

function Index (props) {

    const navigate = useNavigate()

    useEffect(() => {
        const noButton = document.getElementById('noButton');
        if (noButton) {
            noButton.addEventListener('click', function() {
                var x = Math.floor(Math.random() * (window.innerWidth - this.offsetWidth - 50));
                var y = Math.floor(Math.random() * (window.innerHeight - this.offsetHeight - 50));
                this.style.position = 'absolute';
                this.style.left = x + 'px';
                this.style.top = y + 'px';
            });
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault()
        navigate('/acept')
        console.log("SUBMIT")
    }

    return (
        <>
            <style jsx>{`
                .background-container {
                    background-image: url(${Fondo1});
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    margin: 0;
                    padding: 0;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                }

                @media (max-width: 770px) {
                    .background-container {
                        background-image: url(${Fondo2});
                    }
                }
            `}</style>
            <div className="background-container">
                <Header/>
                <div className="d-flex justify-content-center mt-5">
                    <div className="bg-white p-3 rounded">
                        <h1>¿Quieres ser mi Sam Va Lentin?</h1>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-3">
                    <form onSubmit={handleSubmit}>
                        <button id="yesButton" className="btn btn-light rounded mr-2 boton" type="submit" style={styles.boton}>Sí</button>
                    </form>
                    <button id="noButton" className="btn btn-light rounded boton" style={styles.boton}>No</button>
                </div>
            </div>
        </>
    )
}

export default Index