import cors from 'cors'
import express from 'express'
const app = express()
// const PORT = 3000;

app.use(cors())

export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', 'https://recent-activity.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');  
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');  
    
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