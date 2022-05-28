import styles from '../styles/Stylish.module.css'
import Link from 'next/link'
import Layout from '../components/layout'

export default function Stylish() {
    return (
        <Layout title="Exemplo de CSS Modularizado">
            <div className={styles.purple}>
                <h1>Estilo usando CSS Módulos</h1>
            </div>
        </Layout>
    )
}