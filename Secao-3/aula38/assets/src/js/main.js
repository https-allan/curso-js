const paragrafos = document.querySelector('.paragrafos');
const tagP = paragrafos.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

console.log(backgroundColorBody);

for (let p of tagP) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF';
}
