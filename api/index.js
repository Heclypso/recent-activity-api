// import cors from 'cors'
// import express from 'express'
// const app = express()
// const PORT = 3000;

// app.use(cors())

export default function handler(req, res) {
    const informacoesDeAcesso = {
        sistemaOperacional: 'Kali NetHunter',
        local: 'Chengdu, China',
        navegador: 'Safari', 
    }

    res.status(200).json(informacoesDeAcesso)
}

// app.get('/api/falso-acesso', (req, res) => {
//     res.send(informacoesDeAcesso)
// })

// app.listen(PORT, () => {
//     console.log(`Servidor rodando em http://localhost:${PORT}/api/falso-acesso`);
// });