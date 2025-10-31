# 💱 Conversor de Moedas — Projeto de Estudo

Um conversor de moedas simples e funcional feito com **HTML**, **CSS** e **JavaScript puro**, que utiliza uma **API real de câmbio** para obter as taxas atualizadas em tempo real.

---

## 🌐 Deploy no GitHub Pages

👉 **[Acesse o projeto online aqui](https://nokkxn.github.io/Conversor-moedas/)**  

*(Substitua o link acima pelo seu real do GitHub Pages após publicar.)*

---

## 📁 Estrutura de Pastas

```
Conversor-de-Moedas/
│
├── index.html      # Estrutura principal da página
├── css/
│   └── style.css   # Estilos visuais do conversor
└── js/
    └── script.js   # Lógica e integração com a API
```

---

## ⚙️ Funcionalidades

✅ Converte entre **Dólar (USD)**, **Real (BRL)** e **Euro (EUR)**  
✅ Busca **taxas de câmbio em tempo real** via API  
✅ Validação de entrada (impede valores inválidos)  
✅ Interface moderna e responsiva  
✅ Mensagens de erro para problemas de rede ou API  

---

## 🧠 Como funciona

1. O usuário digita um valor, escolhe as moedas (de → para) e clica em **Converter**.  
2. O JavaScript faz uma **requisição à API**:  
   ```js
   const resposta = await fetch(`https://open.er-api.com/v6/latest/${de}`);
   const data = await resposta.json();
   ```
3. A resposta contém todas as taxas de câmbio da moeda selecionada.  
4. O script faz o cálculo:
   ```js
   const convertido = (valor * data.rates[para]).toFixed(2);
   ```
5. O resultado é exibido na tela:
   ```js
   document.getElementById("resultado").textContent = `${valor} ${de} = ${convertido} ${para}`;
   ```

---

## 🎨 Estilo (CSS)

- Fundo com **gradiente escuro moderno**  
- Caixa centralizada com **borda arredondada e sombra suave**  
- **Botões e inputs estilizados** com brilho e contraste  
- Design limpo e minimalista, com fonte **Poppins**

---

## 🧩 Tecnologias usadas

| Tecnologia | Função |
|-------------|--------|
| **HTML5** | Estrutura do conversor |
| **CSS3** | Estilo e responsividade |
| **JavaScript (ES6)** | Lógica e integração com a API |
| **Fetch API** | Comunicação com o servidor de câmbio |
| **Open Exchange API** | Fonte das taxas de conversão |

---

## 🧰 Como rodar o projeto localmente

1. Baixe a pasta completa (`index.html`, `css/`, `js/`);  
2. Abra o arquivo `index.html` no navegador;  
3. Digite um valor, escolha as moedas e clique em **Converter**;  
4. Veja o resultado aparecer instantaneamente.

---

## 🚀 Melhorias futuras

- Adicionar **mais moedas (JPY, GBP, etc)**  
- Exibir **gráficos de variação** da moeda  
- Permitir **converter várias moedas de uma vez**  
- Salvar histórico de conversões no **localStorage**  
- Criar **tema escuro/claro**  

---

## 👨‍💻 Autor

**Vinicius Lourenço Silva dos Santos**  
💼 Projeto criado como parte dos estudos de **Desenvolvimento Web (JavaScript)**  
📍 *Guarujá - SP, Brasil*
