// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ 
    title: 'Teste API',
    method: req.method,
    params: JSON.stringify(req.query),
    name: req.query.nome,
    age: + req.query.idade })
}
 