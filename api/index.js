import express from 'express'
const app = express()
// const PORT = 3000;

const informacoesDeAcesso = {
    sistemaOperacional: 'Kali NetHunter',
    local: 'Chengdu, China',
    navegador: 'Safari', 
}

app.get('/api/falso-acesso', (req, res) => {
    res.send(informacoesDeAcesso)
})

// app.listen(PORT, () => {
//     console.log(`Servidor rodando em http://localhost:${PORT}`);
// });