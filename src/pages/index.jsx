import Navigator from '../components/Navigator'

export default function Home() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navigator text="Estiloso" destiny="/stylish"/>
            <Navigator text="Exemplo" destiny="/example" color="#5a9eb3"/>
            <Navigator text="JSX" destiny="/jsx" color="#b35a66"/>
            <Navigator text="Navegação #01" destiny="/navigation" color="green"/>
            <Navigator text="Navegação #02" destiny="/client/sp/123" color="blue"/>
            <Navigator text="Component c/ Estado" destiny="/state" color="purple"/>
            <Navigator text="Integração c/ API #01" destiny="/integration_01" color="red"/>
            <Navigator text="Conteúdo Estático" destiny="/static" color="brown"/>
        </div>
    )
}