import Header from "./header"
import besitos from "./img/besitos.jpg"
import Fondo1 from './img/Fondo1.jpg';
import Fondo2 from './img/Fondo2.jpg';

const styles = {
    backgroundContainer: {
      backgroundImage: `url(${Fondo1})`,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      padding: 0,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }
};

function Acept (props) {

    const isMobile = window.innerWidth <= 770;

    if (isMobile) {
        styles.backgroundContainer.backgroundImage = `url(${Fondo2})`;
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
                        <h5>Enhorabuena por aceptar la oferta <i>(obviamente sin cohacción ninguna)</i>.</h5>
                        <p>
                            Has obtenido la suerte de quedar a tomar un batido en covaresa el día 14 de febrero :)<br/>
                            <i>(Además, coincide con el aniversario de dos chicos muy guapos)</i>
                        </p>
                    </div>
                </div>

                <div className="d-flex justify-content-center mt-5">
                    <div className="bg-white p-3 rounded">
                        <img src={besitos}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Acept