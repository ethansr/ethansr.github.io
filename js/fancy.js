document.querySelectorAll(':not(h1) > a')
    .forEach((node) => {
        window.setTimeout(
            () => { node.classList.add('fancy'); },
            Math.random() * 150000)
    });