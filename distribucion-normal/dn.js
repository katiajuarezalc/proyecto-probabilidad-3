const Problema = () => {
    return (
        <>
            <h1>El problema de ...</h1>
            <h2>Descripcion</h2>
            <p>Descripcion del problema here</p>
            <h2>Solucion</h2>
            <p>Solucion de problema here</p>
        </>
    )
};

const DistribucionNormal = () => {
    return (
        <>
            <h1>Distribucion normal </h1>
            <h2>Descripcion</h2>
            <p>La curva normal, representa una distribución de frecuencia de una variable continua, en la cual la variable es cada vez menos frecuente a medida que nos distanciamos de su centro y viceversa más frecuente cuando nos acercamos a su centro. La curva es totalmente simétrica, con un eje central de simetría (asimetría = 0). En su centro coinciden las medidas de tendencia central: media, mediana y moda. Posee dos colas una a la derecha y otra a la izquierda. Tiene forma acampanada y es asintótica hacia los extremos, del centro hacia los extremos se va aplanando y acercándose cada vez más hacia el eje de las abscisas, aunque nunca la toca. Como se dijo, en su centro se encuentra la media (parámetro µ) y en los dos puntos de inflexión de la curva (lugar donde la curva pasa de cóncava a convexa o viceversa) coincide  una desviación estándar (parámetro σ; distancia desde µ  al punto de inflexión).</p>
            <div className="image">
                <img src="img/normal.png" />
            </div>
            <p>Como puede observar en la figura 1, el área comprendida entre la curva, el eje de las abscisas y líneas perpendiculares a ese eje en puntos específicos, delimita lo que se conoce como áreas bajo la curva (AUC, del inglés area under the curve). Algunos de los puntos importantes a recordar son las AUC comprendidas entre los puntos: “µ-1σ a µ+1σ”,  “µ-1,96σ a µ+1,96σ” y “µ-2,58σ a µ+2,58σ” que determinan AUC de 0,68 (68%), 0,95 (95%) y 0,99 (99%) respectivamente.</p>
            <p>Cualquier curva normal, puede ser caracterizada los parámetros señalados, o sea µ y σ, y es escrita como N(µ,σ).</p>
            <p>Al utilizar la curva normal como una distribución de frecuencia, las áreas bajo la curva pueden ser entendida como una proporción del área total de la misma y la frecuencia  (eje de las ordenadas) representada en número absolutos o con mayor frecuencia en porcentajes y en estos casos las áreas bajo la curva representan la frecuencia con que aparece una variable particular. La curva normal puede interpretarse también como una distribución de probabilidades, en cuyo caso las unidades del eje de ordenadas no está representado en frecuencias, sino en probabilidades, en este caso el área total bajo la curva es igual 1 (suceso seguro) y las áreas parciales bajo la curva representan la probabilidad de ocurrencia de la variable.</p>
        </>
    )
};

const App = () => {
    return (
        <div className="container">
            <div className="section">
                <DistribucionNormal />
            </div>
            <div className="section">
                <Problema />
            </div>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById("root"));