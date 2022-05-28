import Layout from "../components/Layout"

export default function Jsx() {
    const title = <h1>Jsx é um conceito central</h1> 

    function subtitle() {
        return <h2>{ "Muitpo legal".toUpperCase() }</h2>
    }

    return (
        <Layout title="Entendendo o JSx">
            <div>
                { title }
                { subtitle() }
                <p>{ JSON.stringify({ name: 'João', age: 30}) }</p>
            </div>
        </Layout>
    )
}