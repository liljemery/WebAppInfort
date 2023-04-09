import background from '/consulting.jpg'

function Home({}){
    return(
        <>
        <p className='text-center display-4 mt-4 mb-2'>Infort International.</p>
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
        <div className='w-75 mx-auto border-top my-5'>
        <p className='display-6 mt-5'>Soluciones para tu negocio, a una reunion de ti.</p>
        <p className='fw-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores unde laboriosam cupiditate quibusdam deserunt facere ipsam a, ullam optio architecto recusandae minus qui distinctio consequatur impedit doloremque sit ratione perferendis odit delectus at natus, quos temporibus! Debitis iusto maxime quo sint molestias voluptas, enim, laboriosam aperiam beatae obcaecati dolorem aliquam!</p>
        <a href="#" className='btn btn-light'>Nuestros procesos</a>
        </div>
        <div className='w-75 mx-auto border-top my-5 text-end'>
        <p className='display-6 mt-5'>Comprometidos con la excelencia en nuestra área.</p>
        <p className='fw-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores unde laboriosam cupiditate quibusdam deserunt facere ipsam a, ullam optio architecto recusandae minus qui distinctio consequatur impedit doloremque sit ratione perferendis odit delectus at natus, quos temporibus! Debitis iusto maxime quo sint molestias voluptas, enim, laboriosam aperiam beatae obcaecati dolorem aliquam!</p>
        <a href="#" className='btn btn-light'>Agenda una cita virtual</a>
        </div>
        <div className='w-75 mx-auto border-top my-5'>
        <p className='display-6 mt-5'>Una solución, a un click de distancia.</p>
        <p className='fw-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores unde laboriosam cupiditate quibusdam deserunt facere ipsam a, ullam optio architecto recusandae minus qui distinctio consequatur impedit doloremque sit ratione perferendis odit delectus at natus, quos temporibus! Debitis iusto maxime quo sint molestias voluptas, enim, laboriosam aperiam beatae obcaecati dolorem aliquam!</p>
        <a href="#" className='btn btn-light'>Contáctanos</a>
        </div>
        </>
    )
}

export default Home