import Header from "./header"
import besitos from "./img/besitos.jpg"

function Acept (props) {
    return (
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
    )
}

export default Acept