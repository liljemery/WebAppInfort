import background from '/resources.jpg'



function contactUs({}){

    const handleSubmit =(e) =>{
        e.preventDefault()
    }

    return(
        <>
        <p className='text-center display-5 mt-2 mb-2'>Solicita un contacto.</p>
        <div className="my-4 p-5 bg-white text-white rounded-lg text-end w-75 mx-auto"
        style={{backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
        }}>
            <div class="my-5 mt-5 mb-1 py-5">
                <br/>
                <br className='py-5'/>
                <br/>
            </div>
        </div>
        <form className="d-block my-2 pe-5 ms-3 my-auto w-75 mx-auto" onSubmit={handleSubmit} >
            <div class="form-group mt-2">
                <label for="exampleFormControlInput1" className="display-6">Dirección de email.</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1" className="display-6">Número de telefono.</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect1" className="display-6">Tipo de contacto deseado.</label>
                <select class="form-control" id="exampleFormControlSelect1">
                <option>Llamada</option>
                <option>Email</option>
                <option>Visita</option>
                </select>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1" className="display-6">Dejanos un mensaje.</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Escribe un mensaje.'></textarea>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-light px-5">Enviar</button>
            </div>
        </form>
        </>
    )
}

export default contactUs;