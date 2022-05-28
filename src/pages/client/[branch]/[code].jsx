import Layout from '../../../components/Layout'
import { useRouter } from 'next/router'

export default function ClientByCode() {
    const router = useRouter()

    return (
        <Layout title="Navegação Dinâminca">
            <p>Código =  {router.query.code}</p>
            <span>Filial =  {router.query.branch}</span>
        </Layout>
    )
}

//Para obter uma navegação dinamica, é necessario envolver o nome do arquivp
//com colchetes [], assim dessa forma, será entendido que ele podera ter qualquer nome.
//Ex.: client/123 - no caso o arquivo se chama 123 agora