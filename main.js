const Integrante = ({ author, foto }) => {
    return (
        <div className="integrante">
            <div className="image">
                <img src={foto} alt={author} />
            </div>
            <h3>{author}</h3>
        </div>
    )
}

const Demostracion = ({ title, href, author, dist }) => {
    return (
        <div className="demo">
            <a href={href}>
            <div className="image">
                <img src={dist} alt={title} />
            </div>
            <h3>{title}</h3>
            </a>
        </div>
    )
}

const Home = () => {
    const data = [
        {
            title: 'Distribución hipergeométrica',
            href: './distribucion-hipergeometrica/dh.html',
            author: 'Basurto Martinez Alan Rodrigo',
            foto: './assets/alan.jpg',
            dist: './assets/d_hiper.jpg'
        },
        {
            title: 'Distribución binomial',
            href: './',
            author: 'Juarez Alcantara Katia Fernanda',
            foto: './assets/kat.jpg',
            dist: './assets/d_bin.png'
        },
        {
            title: 'Distribución normal',
            href: './distribucion-normal/dn.html',
            author: 'Resendiz Chavez Luis Fernando',
            foto: './assets/luis.jpg',
            dist: './assets/d_normal.png'
        },
        {
            title: 'Distribución binomial negativa',
            href: './distribucion-binomialN/binomialn.html',
            author: 'Rivera Perez Ricardo',
            foto: './assets/ricardo.jpeg',
            dist: './assets/d_binneg.jpg'
        },
        {
            title: 'Distribución de Poisson',
            href: './',
            author: 'Valdovinos Castellanos Jesus Neftali',
            foto: './assets/neftali.jpg',
            dist: './assets/d_poison.jpg'
        }
    ]
    return (
        <div className="container">
            <h1>Distribuciones de probabilidad</h1>
            <h3 className="sub">Proyecto de Probabilidad y estadística</h3>

            <h2>Integrantes</h2>
            <div className="integrantes">
            {data.map(integrante => <Integrante key={integrante.href} {...integrante} />)}
            </div>
            <h2>Demostraciones</h2>
            <div className="demos">
                {data.map(demo => <Demostracion key={demo.href} {...demo} />)}
            </div>
        </div>
    )
}
ReactDOM.render(<Home />, document.getElementById("root"));