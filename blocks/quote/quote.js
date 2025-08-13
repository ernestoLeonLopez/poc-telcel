export default function decorate(block) {

     // Leer el valor de classes desde el dataset
    const classes = block.dataset.classes || '';
    if (classes) {
        block.classList.add(...classes.split(' '));
    }

    const [quoteWrapper] = block.children;

    const blockquote = document.createElement('blockquote');
    blockquote.textContent = quoteWrapper.textContent.trim();
    quoteWrapper.replaceChildren(blockquote);
}