const Element = () => {
    const body = document.querySelector('body');

    const header = document.createElement('header');
    header.classList.add('header');
    body.appendChild(header);

    const main = document.createElement('main');
    main.classList.add('main');
    body.appendChild(main);

    const footer = document.createElement('footer');
    footer.classList.add('footer');
    body.appendChild(footer);

    const container = document.createElement('section');
    container.classList.add('container');
    main.appendChild(container);

    const h1 = document.createElement('h1');
    h1.textContent = 'Ma todo list';
    container.appendChild(h1);

    const form = document.createElement('form');
    container.appendChild(form);

    const label = document.createElement('label');
    label.textContent = 'Ajouter une tâche';
    form.appendChild(label);

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    form.appendChild(input);

    const button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.textContent = 'add';
    form.appendChild(button);  
}

export default Element;