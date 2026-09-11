const products = {
    'saudi-coffee': { title: 'قهوة عربية سعودية', price: '1 kg / 10 JD', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85', alt: 'Traditional Saudi Arabic coffee being prepared', description: 'Traditional Saudi Arabic coffee, freshly roasted with a rich aroma and smooth taste.' },
    'turkish-coffee': { title: 'قهوة تركية', price: 'Fresh', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=85', alt: 'Turkish coffee in a small cup', description: 'Rich Turkish coffee prepared with a deep roast and a smooth, intense flavor.' },
    'french-coffee': { title: 'قهوة فرنسية', price: 'Fresh', image: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=900&q=85', alt: 'French coffee served beside a book', description: 'Smooth French coffee with a gentle roast and a refined, comforting aroma.' },
    'mixed-spices': { title: 'بهار مشكل', price: 'Fresh', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=85', alt: 'A selection of mixed spices', description: 'A fragrant blend of carefully selected spices for everyday cooking.' },
    'black-pepper': { title: 'فلفل أسود', price: 'Fresh', image: 'https://images.unsplash.com/photo-1599909533604-7e5d7d2b5a1b?auto=format&fit=crop&w=900&q=85', alt: 'Black pepper spices', description: 'A bold, aromatic black pepper to add warmth and depth to every dish.' },
    'white-pepper': { title: 'فلفل أبيض', price: 'Fresh', image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=900&q=85', alt: 'White pepper spices', description: 'Delicate white pepper with a warm flavor for savory recipes.' },
    'kabsa-spice': { title: 'بهار كبسة', price: 'Fresh', image: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=900&q=85', alt: 'Kabsa spice blend', description: 'A traditional spice blend prepared to bring rich flavor to kabsa dishes.' },
    'curry': { title: 'كاري', price: 'Fresh', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=85', alt: 'Curry spices', description: 'A warm, fragrant curry blend for flavorful home cooking.' },
    'cinnamon': { title: 'قرفة', price: 'Fresh', image: 'https://images.unsplash.com/photo-1601379760883-1bb497c558c9?auto=format&fit=crop&w=900&q=85', alt: 'Cinnamon sticks and ground cinnamon', description: 'Sweet and aromatic cinnamon for drinks, desserts, and savory recipes.' },
    'baharat': { title: 'البهارات', price: 'Fresh', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=85', alt: 'A selection of colorful spices', description: 'A fragrant selection of carefully chosen spices to bring warmth and flavor to every dish.' },
    'chocolate': { title: 'شوكولاتة', price: 'Fresh', image: '', alt: '', description: 'Rich, smooth chocolate made for a sweet moment any time of day.' },
    'dates': { title: 'تمور', price: 'Fresh', image: 'https://upload.wikimedia.org/wikipedia/commons/2/26/2019_Dates_%2848608157288%29.jpg', alt: 'A fresh assortment of dates', description: 'Premium, soft dates selected for their naturally rich sweetness.' },
    'nuts': { title: 'مكسرات', price: 'Fresh', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Walnuts_pistachios_cashew_almonds.jpg', alt: 'Almonds, cashews, pistachios, and mixed nuts', description: 'A crunchy selection of almonds, cashews, Aleppo pistachios, and other fresh roasted nuts.' },
    'beauty': { title: 'تجميل', price: 'Fresh', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=85', alt: 'Beauty and skincare products', description: 'Carefully selected beauty and self-care essentials.' },
    'matcha': { title: 'ماتشا', price: 'Fresh', image: 'https://images.unsplash.com/photo-1582793988951-9aed5509eb97?auto=format&fit=crop&w=900&q=85', alt: 'A cup of matcha tea', description: 'A vibrant matcha drink with a rich taste and naturally refreshing finish.' },
    'green-tea': { title: 'شاي أخضر', price: 'Fresh', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=85', alt: 'A cup of green tea with tea leaves', description: 'Light, naturally refreshing green tea for a calm everyday moment.' }
};
const coffeeChoices = ['saudi-coffee', 'turkish-coffee', 'french-coffee', 'matcha', 'green-tea'];
const spiceChoices = ['mixed-spices', 'black-pepper', 'white-pepper', 'kabsa-spice', 'curry', 'cinnamon'];
const dialog = document.getElementById('product-dialog');
const bagButton = document.querySelector('.bag-button');
const bagDialog = document.getElementById('bag-dialog');
const dialogOptions = document.getElementById('dialog-options');
const addToBagButton = document.getElementById('add-to-bag');
const orderNoteField = document.getElementById('order-note-field');
const orderNote = document.getElementById('order-note');
const bagItemsElement = document.getElementById('bag-items');
let bagCount = 0;
const bagItems = [];
let selectedProduct = null;

function renderBag() {
    bagItemsElement.replaceChildren();
    if (bagItems.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.className = 'bag-empty';
        emptyMessage.textContent = 'Your bag is empty.';
        bagItemsElement.append(emptyMessage);
        return;
    }
    bagItems.forEach((item, index) => {
        const product = products[item.product];
        const itemElement = document.createElement('div');
        itemElement.className = 'bag-item';
        const title = document.createElement('strong');
        title.textContent = `${index + 1}. ${product.title}`;
        const price = document.createElement('strong');
        price.textContent = product.price;
        itemElement.append(title, price);
        if (item.note) {
            const note = document.createElement('p');
            note.textContent = `Note: ${item.note}`;
            itemElement.append(note);
        }
        bagItemsElement.append(itemElement);
    });
}

function showProduct(productKey) {
    const product = products[productKey];
    selectedProduct = productKey;
    dialog.classList.toggle('no-image', !product.image);
    document.getElementById('dialog-image').src = product.image;
    document.getElementById('dialog-image').alt = product.alt;
    document.getElementById('dialog-title').textContent = product.title;
    document.getElementById('dialog-price').textContent = product.price;
    document.getElementById('dialog-description').textContent = product.description;
    orderNoteField.hidden = !coffeeChoices.includes(productKey);
    addToBagButton.hidden = false;
    dialogOptions.querySelectorAll('button').forEach((button) => {
        button.classList.toggle('selected', button.dataset.product === productKey);
    });
}

document.querySelectorAll('.product-card').forEach((card) => {
    card.querySelector('.product-image').addEventListener('click', () => {
        const productKey = card.dataset.product;
        dialog.classList.remove('no-image');
        dialogOptions.replaceChildren();
        if (productKey === 'coffee' || productKey === 'baharat') {
            const choices = productKey === 'coffee' ? coffeeChoices : spiceChoices;
            document.getElementById('dialog-title').textContent = productKey === 'coffee' ? 'القهوة' : 'البهارات';
            document.getElementById('dialog-description').textContent = productKey === 'coffee' ? 'اختر نوع القهوة الذي تريده.' : 'اختر نوع البهار الذي تريده.';
            dialogOptions.setAttribute('aria-label', productKey === 'coffee' ? 'Coffee choices' : 'Spice choices');
            document.getElementById('dialog-price').textContent = '';
            orderNoteField.hidden = true;
            orderNote.value = '';
            addToBagButton.hidden = true;
            choices.forEach((choiceKey) => {
                const optionButton = document.createElement('button');
                optionButton.type = 'button';
                optionButton.textContent = products[choiceKey].title;
                optionButton.dataset.product = choiceKey;
                optionButton.addEventListener('click', () => showProduct(choiceKey));
                dialogOptions.append(optionButton);
            });
            document.getElementById('dialog-image').src = products['saudi-coffee'].image;
            document.getElementById('dialog-image').alt = products['saudi-coffee'].alt;
            selectedProduct = null;
        } else {
            showProduct(productKey);
        }
        dialog.showModal();
    });
});

const closeDialogButton = dialog.querySelector('.dialog-close');
const closeDialog = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dialog.close();
};
closeDialogButton.addEventListener('click', closeDialog);
dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
});
bagButton.addEventListener('click', () => {
    renderBag();
    bagDialog.showModal();
});
bagDialog.querySelector('.dialog-close').addEventListener('click', () => bagDialog.close());
bagDialog.addEventListener('click', (event) => {
    if (event.target === bagDialog) bagDialog.close();
});
addToBagButton.addEventListener('click', () => {
    if (!selectedProduct) return;
    bagItems.push({ product: selectedProduct, note: orderNote.value.trim() });
    bagCount += 1;
    bagButton.innerHTML = `Bag <span>${bagCount}</span>`;
    bagButton.setAttribute('aria-label', `Shopping bag, ${bagCount} item${bagCount === 1 ? '' : 's'}`);
    orderNote.value = '';
    dialog.close();
});

document.querySelectorAll('.site-nav a').forEach((link) => {
    link.addEventListener('click', () => {
        document.querySelectorAll('.site-nav a').forEach((item) => item.classList.remove('active'));
        link.classList.add('active');
    });
});
