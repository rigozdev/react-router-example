/*Componente de contacto/formulario */

const Contacto = () => {
    return (
        <div className="main-content">
            <h2>¿En qué podemos ayudarte? Contactanos!</h2>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Correo</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Descripción</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <button className="button-sub">Enviar</button>
            </div>
        </div>
    )
}

export default Contacto;