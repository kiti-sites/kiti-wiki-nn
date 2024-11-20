---
title: Instalação - KitiOS
description: Instalação da distro modificada
---
# Instalação - KitiOS
Se você veio por aqui, ótima escolha!

Baixe o .zip: https://github.com/kiti-sites/KitiOS/archive/refs/heads/main.zip  depois extraia. BAIXE (não use https://vscode.dev) o Visual Studio Code, instale a extensão Live Preview. Depois clique no botão direito em cima do index.html e pressione o botão "Show preview", verifique o url e abra esse url no seu navegador preferido. Pronto!


# Adicionar um app
Para adicionar um app, edite o apps.html adicionando:
`        <p></p>
        <a href="nome do arquivo.html">        <img height="50px" width="50px" src="foto do app.png" alt="todo"><p></p>Nome do app</a>`
Crie um arquivo chamado: "nome do app".html e siga o modelo:
`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Título da página</title><style>a{text-decoration: none;color: white;}.barra{background: #000;height: 20;width: 100%;}batata{cursor:pointer;}body{font-family:sans-serif;color: white;background: #000;overflow: hidden;}</style><script src="script.js" defer></script></head><body><div class="barra"><batata>
<a href="apps.html" style="text-decoration:none;background: #fff;border-radius: 5pc;color:#fff;cursor:pointer;">---------</a><a href="apps.html" style="text-decoration:none;background: #fff;border-radius:100px;color:#fff;cursor:pointer;">---</a></batata></div><p></p><a style="color: red;" href="index.html">Fechar app</a><p></p>Conteúdo da página</body></html>`
Agora basta editar a gosto!



# Papel de parede
Para colocar um papel de parede baixe um de 1920 x 1080 e salve-o na pasta do seu sistema (KitiOS) como kiti os.png
Pronto!