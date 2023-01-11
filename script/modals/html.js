export const htmlTemplate = `
<div class="content">
    <h3 tabindex="0" class="text">HTML básico</h3>
    <a class="text" target="_blank" href="https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/HTML_basics">
        🧑‍💻 MDN Web Docs
    </a>
    <a class="text" target="_blank" href="https://www.w3schools.com/html/">
        🧑‍💻 W3Schools
    </a>
    <a class="text" target="_blank" href="https://web.dev/learn/html/">
        📖 Web.dev
    </a>
    <a class="text" target="_blank" href="https://www.w3schools.com/html/">
        📖 Fundação Bradesco
    </a>
    <pre class="code">
        <code class="text"> &lt!<span class="brilliantRose">DOCTYPE</span> <span class="pastelGreen">html</span>&gt</code>
        <code class="text"> &lt<span class="brilliantRose">html</span>&gt</code>
        <code class="text"> &lt<span class="brilliantRose">head</span>&gt</code>
        <code class="text"> &lt<span class="brilliantRose">meta</span> <span class="pastelGreen">charset</span><span class="brilliantRose">=</span><span class="arylideYellow">"UTF-8"</span>/&gt</code>
        <code class="text"> &lt<span class="brilliantRose">title</span>&gt Título &lt/<span class="brilliantRose">title</span>&gt</code>
        <code class="text"> &lt/<span class="brilliantRose">head</span>&gt</code>
        <code class="text"> &lt<span class="brilliantRose">body</span>&gt</code>
        <code class="text"> <span class="purpleNavy">&lt!-- Conteúdo --&gt</span></code>
        <code class="text"> &lt/<span class="brilliantRose">body</span>&gt</code>
        <code class="text"> &lt/<span class="brilliantRose">html</span>&gt</code>
    </pre>
    <p tabindex="0" class="text"><strong class="text">Linha 1:</strong> a instrução <span class="badge">DOCTYPE</span> deve ser sempre a primeira a aparecer em uma página HTML para indicar ao browser qual versão da linguagem usada. Nesse caso, estamos trabalhando com a HTML5, versão na qual a declaração do DOCTYPE é bastante simples, como podemos ver na listagem;</p>
    <br>
    <p tabindex="0" class="text"><strong class="text">Linhas 2 e 10:</strong> abertura e fechamento da tag <span class="badge">html</span>, que delimita o documento. Sendo assim, todas as demais tags da página devem estar nesse espaço; </p>
    <br>
    <p tabindex="0" class="text"><strong class="text">Linhas 3 e 6:</strong> abertura e fechamento da tag <span class="badge">head</span>, que define o cabeçalho do documento. O conteúdo nesse espaço não é visível no browser, mas contém instruções sobre seu conteúdo e comportamento. Dentro dessa tag, por exemplo, podem ser inseridas folhas de estilo e scripts; </p>
    <br>
    <p tabindex="0" class="text"><strong class="text">Linha 4:</strong> a tag <span class="badge">meta</span>, nesse caso, especifica qual conjunto de caracteres (character set ou charset) será usado para renderizar o texto da página. O UTF-8 contém todos os caracteres dos padrões Unicode e ASCII, sendo, portanto, o mais utilizado em páginas web. A mesma tag meta, porém com outros atributos, pode ser utilizada para outros fins, como na SEO (Search Engine Optimization); </p>
    <br>
    <p tabindex="0" class="text"><strong class="text">Linha 5:</strong> a tag <span class="badge">title</span> define o título da página, aquele que aparece na janela/aba do navegador; </p>
    <br>
    <p tabindex="0" class="text"><strong class="text">Linhas 7 e 9:</strong> abertura e fechamento da tag <span class="badge">body</span>, marcando o espaço no qual deve estar contido o conteúdo visual da página. As demais tags que representam texto, botões etc. devem ser adicionadas nesse intervalo; </p>
    <br>
    <p tabindex="0" class="text"><strong class="text">Linha 8:</strong> nessa linha podemos observar a sintaxe para adição de comentários em HTML. Esse trecho não é renderizado pelo browser. </p>
</div>
`;

