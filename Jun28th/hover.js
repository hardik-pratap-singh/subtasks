// const targetWords = ['crazy', 'stupid', 'mad'];

targetWords.forEach(targetWord => {
    let className = `icon-container-${targetWord}`;

    let getAllElements = Array.from(document.querySelectorAll(`.${className}`))
    console.log(targetWord, " ", getAllElements);

    getAllElements.forEach(slur => {
        slur.addEventListener('mouseover', () => {
            let tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.innerText = `Hovered over ${targetWord}`;
            document.body.appendChild(tooltip);

            // const positionTooltip = (e) => {
            //     tooltip.style.left = `${e.pageX + 5}px`;
            //     tooltip.style.top = `${e.pageY + 5}px`;
            // };

            // positionTooltip(event);
            tooltip.classList.add('show');

            element.addEventListener('mousemove', positionTooltip);

            element.addEventListener('mouseleave', () => {
                tooltip.classList.remove('show');
                document.body.removeChild(tooltip);
                element.removeEventListener('mousemove', positionTooltip);
            }, { once: true });
        })
    })
})