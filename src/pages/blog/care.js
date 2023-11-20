import React from 'react';
import * as styles from './sample.module.css';

import Blog from '../../components/Blog';
import Container from '../../components/Container';
import Layout from '../../components/Layout/Layout';

const SamplePage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Container>
          <div className={styles.blogContainer}>
            <Blog
              category={'información'}
              title={'Cuidados de la Poinsettia'}
              image={'/blogFeatured.png'}
              alt={''}
            >
              <div className={styles.content}>
                <p className={styles.excerpt}>
                  La belleza de la poinsettia esta en su vida, y para que esta
                  belleza se preserve, debemos velar por su bienestar.
                </p>
                <br />
                <h2 className={styles.blogSubHeader}>1. Ubicación</h2>
                <p className={styles.blogParagraph}>
                  La poinsettia es una planta de interior, requiere buena luz,
                  pero el sol directo puede quemar sus brácteas (hojas rojas).
                  Tampoco permitas que la moje la lluvia.
                </p>
                <br />
                <h2 className={styles.blogSubHeader}>2. Riego</h2>
                <p className={styles.blogParagraph}>
                  Esta planta requirede un riego diligente. Una de las quejas
                  mas comunes que recibimos es que la planta se ve decaida, y sus
                  hojas parecen desgonzadas. Esta es una señal inequivoda de
                  deshidratacion.

                  La cantidad de agua cada planta depende de su tamaño.
                </p>

                <ul style={{listStyleType: 'disc'}}>
                  <li>Pequeñas y medianas: 1 pocillo tintero de agua, día de por medio</li>
                  <li>Grandes: 1 mug de agua cada dia</li>
                  <li>Extra Grandes: 1 litro de agua una vez a la semana</li>
                </ul>

                <p>
                  El sustrato de nuestras plantas está diseñado para retener
                  la cantidad indicada de agua. Es preferible regar con un
                  exceso, que no con suficiente agua. El exceso
                  siempre va a salir por los agujeros de la matera.
                  Si decides poner un plato debajo de la matera para capturar
                  este exceso, asegúrate de vaciar el pláto unos minutos después
                  del riego, pues esta agua acumulada propicia la pudrición
                  de las raíces.
                </p>
                <br />
                <h2 className={styles.blogSubHeader}>3. Fin de Temporada</h2>
                <p className={styles.blogParagraph}>
                  La floración para la poinsettia es une estado energéticamente
                  costoso. Imagina que es un embarazo, si este fuera permanente
                  sería insostenible. Si quieres prolongar la vida de tu planta
                  más allá del las fiestas de fin de año, corta las puntas de
                  las ramas que contienen flores hojas rojas. Una vez que la
                  planta solo tenga hojas verdes, esta lista para entrar en
                  estado vegetativo y continuar creciendo. Ubícala en un lugar
                  con buena luz y fertilízala.
                </p>
              </div>
            </Blog>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default SamplePage;
