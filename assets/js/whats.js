// Converte melhor em B2B: além do e-mail do formulário, oferece o mesmo
// conteúdo já montado no WhatsApp (o comprador industrial prefere conversar).
document.addEventListener('DOMContentLoaded', function () {
  var f = document.getElementById('formOrc');
  if (!f) return;
  var b = document.createElement('button');
  b.type = 'button';
  b.className = 'btn btn-p';
  b.style.width = '100%';
  b.style.marginTop = '10px';
  b.textContent = 'Prefiro enviar pelo WhatsApp';
  b.addEventListener('click', function () {
    var d = new FormData(f);
    var g = function (k) { return (d.get(k) || '').toString().trim(); };
    var txt = 'Olá! Quero orçamento do desmoldante Master EcoDesmold.\n'
      + 'Empresa: ' + g('empresa') + '\n'
      + 'Contato: ' + g('nome') + (g('cargo') ? ' (' + g('cargo') + ')' : '') + '\n'
      + 'Cidade/UF: ' + g('cidade') + '\n'
      + 'Fabricação: ' + g('fabricacao') + '\n'
      + 'Tipo de fôrma: ' + g('forma') + '\n'
      + 'Consumo atual: ' + g('consumo') + '\n'
      + 'Mensagem: ' + g('mensagem');
    window.open('https://wa.me/5511967859631?text=' + encodeURIComponent(txt), '_blank');
  });
  f.appendChild(b);
});
