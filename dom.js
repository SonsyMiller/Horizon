// Código para Redis deve ser executado no servidor, não no navegador
const redis = require('redis');
const client = redis.createClient();

client.set('key', 'value', 'EX', 3600); // Cache por 1 hora
client.get('key', (err, reply) => {
    if (err) throw err;
    console.log(reply); // 'value'
});

document.getElementById('contactLink').addEventListener('click', function(e) {
    e.preventDefault();
    var contato = document.getElementById('contato');
    if (contato.classList.contains('hidden')) {
        contato.classList.remove('hidden');
        contato.classList.add('show');
    } else {
        contato.classList.remove('show');
        contato.classList.add('hidden');
    }
});
