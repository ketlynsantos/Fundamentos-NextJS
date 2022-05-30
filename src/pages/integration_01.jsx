import { useState } from 'react'
import Layout from '../components/Layout'

export default function Integration01() {

    const [code, setCode] = useState(1)
    const [client, setClient] = useState({})

    //Forma original, usando diretamente proms
    // function getClient() {
    //     fetch(`http://localhost:3000/api/clients/${code}`)
    //         .then(resp => resp.json())
    //         .then(data => setClient(data))
    // }

    //De uma forma assincrona
    async function getClient() {
        const res = await fetch(`http://localhost:3000/api/clients/${code}`)
        const data = await res.json()
        setClient(data)
    }


    return (
        <Layout title="Integração com API ">
            <div>
                <input type="number" value={code} onChange={e => setCode(e.target.value)}/>
                <button onClick={getClient}>Obter Cliente</button>
            </div>
            <ul>
                <li>ID: { client.id }</li>
                <li>Nome: { client.name }</li>
                <li>Email: { client.email }</li>
            </ul>
        </Layout>
    )
}