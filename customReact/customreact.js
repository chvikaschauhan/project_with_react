function customRender(container, element) {
    /*
    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.children;
    domElement.setAttribute("href", element.props.href);
    domElement.setAttribute("target", element.props.target);
    container.appendChild(domElement);

    */

    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children;
    for (const prop in element.props) {
       if (prop === 'chidren') continue;
       domElement.setAttribute(prop,element.props[prop]);
    }
    container.appendChild(domElement);
}


const reactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'

    },
    children : 'You can Visit google from here !'
}

const mainContainer = document.querySelector('#root')

 customRender(mainContainer, reactElement)