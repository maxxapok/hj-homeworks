'use strict';

function createElement(content) {
    if (typeof content === 'string') {
        return document.createTextNode(content);
    }
    const element = document.createElement(content.name);
    if (content.props && typeof content.props === 'object') {
        Object.keys(content.props).forEach(i => element.setAttribute(i, content.props[i]));
    }
    if (typeof content.childs === 'string') {
        element.innerText = content.childs;
    } else if (content.childs instanceof Array) {
        content.childs.forEach(child => element.appendChild(createElement(child)));
    }
    return element;
}

const e = (name, props, ...childs) => ({ name, props, childs });

const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
};

const content = e(
    'div', { 'class': 'main-content' },
    e('h2', null, item.brand),
    e('h1', null, item.title),
    e('h3', null, item.description),
    e('div', { 'class': 'description' }, item.descriptionFull),
    e(
        'div', { 'class': 'highlight-window  mobile' },
        e('div', { 'class': 'highlight-overlay' })
    ),
    e('div', { 'class': 'divider' }),
    e(
        'div', { 'class': 'purchase-info' },
        e(
            'div', { 'class': 'price' },
            item.currency,
            item.price.toFixed(2)
        ),
        e('button', null, 'Добавить в корзину')
    )
);

const wrapper = document.getElementById('root');
wrapper.appendChild(createElement(content));