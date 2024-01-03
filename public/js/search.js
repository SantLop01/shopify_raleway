// Search filter 

const search = document.getElementById('search');

search.addEventListener('input', async () => {
    let filterWord = search.value;
    if (!filterWord.trim().length) {
        searchList.innerHTML = '';
        return;
    }
    try {
        const res = await fetch('/shop/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({filterWord})
        });
        const items = await res.json();
        renderSearch(items);
        console.log('Pruebaaaa', renderSearch)
        const response = {
            isError: false,
            console: console.log('Esto viene del backend:', items),
            items
        }
        return response;
    } catch (e) {
        const error = {
            isError: true,
            console: console.log('El error es este:', e)
        }
        return error;
    };
});

// Main container of the results of search filter
const searchList = document.getElementById('search__list');

function renderSearch(items) {
    if(!items.length) {
        return;
    }

    searchList.innerHTML = '';

    items.forEach(item => {
        const containerSearch = document.createElement('li');
        containerSearch.classList.add('search__item__text');
        containerSearch.innerHTML = `
        <a class="search__item__link" href="/shop/item/${item.product_id}">${item.product_name}</a>
    `
    searchList.append(containerSearch);
    });
}