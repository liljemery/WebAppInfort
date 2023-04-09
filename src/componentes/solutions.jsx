function solutions({}){

    return(
        <>
        <div className="text-center mt-1 mb-1">
        <p className='display-5'>Soluciones.</p>
        <p className="fw-light">Estas son las soluciones, que podemos aportar a tu negocio.</p>
        </div>
        <div id="carouselExampleSlidesOnly" class="carousel slide container-fluid carousel-fade" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="0" class="active bg-secondary px-2" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="1" class="bg-secondary px-2" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide-to="2" class="bg-secondary px-2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="1000">
                    {/* Cambiar email y subject y body*/}
                    <a href="mailto:hello@hello.com? &subject=Proceso 1 Solicitud de informacion &body=Hola, %0d%0dte contacto por el proceso 1 en tu pagina.">
                        <img src="/process1.png" class="d-block img-fluid mx-auto rounded-lg" alt="..."/>
                    </a>

                    <div class="carousel-caption d-none d-md-block text-dark bg" >
                            <h1>First slide label</h1>
                            <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="1000">
                    {/* Cambiar email y subject y body*/}
                    <a href="mailto:hello@hello.com? &subject=Proceso 2 Solicitud de informacion &body=Hola, %0d%0dte contacto por el proceso 2">
                        <img src="/process2.png" class="d-block img-fluid mx-auto rounded-lg" alt="..."/>
                    </a>

                    <div class="carousel-caption d-none d-md-block">
                        <h1>Second slide label</h1>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="1000">
                    {/* Cambiar email subject y body*/}
                    <a href="mailto:hello@hello.com? &subject=Proceso 3 Solicitud de informacion &body=Hola, %0d%0dte contacto por el proceso 3">
                    <img src="/process3.png" class="d-block img-fluid mx-auto rounded-lg" alt="..."/>
                    </a>
                    <div class="carousel-caption d-none d-md-block">
                        <h1>Third slide label</h1>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next p-1" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        </>
    )
}

export default solutions;