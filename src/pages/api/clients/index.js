export default function handler(req, res) {

    if(req.method === "GET") {
        handleGet(req, res)
    } else 
        res.status(405).send()
    
    //para não enviar nenhuma informação 
    // res.status(200).send()
}

function handleGet(req, res) {
    res.status(200).json({
        id: 2,
        name: 'Maria',
        age: 22
    })
}