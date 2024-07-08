


let textNodes = [];
let body = document.querySelector("body");
body.normalize()
// console.log(body.childNodes);
cleanNode(body); 
getAllTextNodes(body);


function cleanNode(node) {
    var child;
    for (var i = node.childNodes.length; i--;) {
        child = node.childNodes[i];
        // If commentt/textNode and has no non-whitespace character in it, delete it.
        if (child.nodeType === 3 || child.nodeType === 8 && !/\S/.test(child.nodeValue)) {
            node.removeChild(child);
            n--;
        }
        else {
            cleanNode(child);
        }
    }
}

function getAllTextNodes(node) {
    if (node.nodeType === 3) {
        textNodes.push({ node: node, parent: node.parentNode });
        return;
    }

    let children = Array.from(node.childNodes);
    for (let i = 0; i < children.length; i++) {
        getAllTextNodes(children[i]);
    }
}

console.log("textNodes  ", textNodes);

const iconSrc = '../info.svg';
const iconAlt = 'Icon description';
const targetWords = ['crazy'];
let ct = 0;
// console.log(textNodes);


textNodes.forEach(text => {
    const textNode = text.node;
    const parentNode = text.parent;
    // console.log(text)
    targetWords.forEach(targetWord => {
        if (parentNode.innerHTML.includes(targetWord)) {
            const className = `icon-container-${targetWord}`;
            const parts = parentNode.innerHTML.split(targetWord);
            const replacedHTML = parts.join(`${targetWord}<span class="${className}">**</span>`);
            // console.log(replacedHTML)
            // parentNode.innerHTML = replacedHTML;
        }
    })
})