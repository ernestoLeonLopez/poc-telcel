export default function decorate(block) {

    const [navLinkWrapper] = block.children;

    const blockquote = document.createElement('navLink');
    blockquote.textContent = navLinkWrapper.textContent.trim();
    navLinkWrapper.replaceChildren(blockquote);
}