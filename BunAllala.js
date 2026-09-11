const products = {
    'saudi-coffee': { title: 'قهوة عربية سعودية', price: '1 كجم / 10 د.أ', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85', alt: 'تحضير قهوة عربية سعودية', description: 'قهوة عربية سعودية محمصة حديثًا، برائحة غنية ومذاق ناعم.' },
    'turkish-coffee': { title: 'قهوة تركية', price: 'طازج', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=85', alt: 'قهوة تركية في فنجان صغير', description: 'قهوة تركية غنية بتحميص عميق ومذاق قوي وناعم.' },
    'french-coffee': { title: 'قهوة فرنسية', price: 'طازج', image: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=900&q=85', alt: 'قهوة فرنسية بجانب كتاب', description: 'قهوة فرنسية ناعمة بتحميص خفيف ورائحة مريحة.' },
    'mixed-spices': { title: 'بهار مشكل', price: 'طازج', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=85', alt: 'تشكيلة من البهارات المشكلة', description: 'خلطة عطرية من البهارات المختارة بعناية للطبخ اليومي.' },
    'black-pepper': { title: 'فلفل أسود', price: 'طازج', image: 'https://images.unsplash.com/photo-1599909533604-7e5d7d2b5a1b?auto=format&fit=crop&w=900&q=85', alt: 'بهارات الفلفل الأسود', description: 'فلفل أسود عطري يضيف الدفء والعمق إلى كل طبق.' },
    'white-pepper': { title: 'فلفل أبيض', price: 'طازج', image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&w=900&q=85', alt: 'بهارات الفلفل الأبيض', description: 'فلفل أبيض ناعم بمذاق دافئ للوصفات المالحة.' },
    'kabsa-spice': { title: 'بهار كبسة', price: 'طازج', image: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=900&q=85', alt: 'خلطة بهارات الكبسة', description: 'خلطة بهارات تقليدية تضيف نكهة غنية لأطباق الكبسة.' },
    'curry': { title: 'كاري', price: 'طازج', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=85', alt: 'بهارات الكاري', description: 'خلطة كاري دافئة وعطرية للطبخ المنزلي اللذيذ.' },
    'cinnamon': { title: 'قرفة', price: 'طازج', image: 'https://images.unsplash.com/photo-1601379760883-1bb497c558c9?auto=format&fit=crop&w=900&q=85', alt: 'أعواد وقرفة مطحونة', description: 'قرفة حلوة وعطرية للمشروبات والحلويات والوصفات المالحة.' },
    'baharat': { title: 'البهارات', price: 'طازج', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=85', alt: 'تشكيلة من البهارات الملونة', description: 'تشكيلة عطرية من البهارات المختارة بعناية لإضافة الدفء والنكهة لكل طبق.' },
    'chocolate': { title: 'شوكولاتة', price: 'طازج', image: '', alt: '', description: 'شوكولاتة غنية وناعمة للحظات الحلوة في أي وقت.' },
    'dates': { title: 'تمور', price: 'طازج', image: 'https://upload.wikimedia.org/wikipedia/commons/2/26/2019_Dates_%2848608157288%29.jpg', alt: 'تشكيلة من التمور الطازجة', description: 'تمور فاخرة وطرية مختارة لحلاوتها الطبيعية الغنية.' },
    'nuts': { title: 'مكسرات', price: 'طازج', image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Walnuts_pistachios_cashew_almonds.jpg', alt: 'لوز وكاجو وفستق ومكسرات مشكلة', description: 'تشكيلة مقرمشة من اللوز والكاجو والفستق والمكسرات المحمصة.' },
    'beauty': { title: 'تجميل', price: 'طازج', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=85', alt: 'منتجات العناية والجمال', description: 'منتجات مختارة بعناية للجمال والعناية اليومية.' },
    'matcha': { title: 'ماتشا', price: 'طازج', image: 'https://images.unsplash.com/photo-1582793988951-9aed5509eb97?auto=format&fit=crop&w=900&q=85', alt: 'كوب ماتشا', description: 'ماتشا بلون زاهٍ ومذاق غني ونهاية منعشة.' },
    'green-tea': { title: 'شاي أخضر', price: 'طازج', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=900&q=85', alt: 'كوب شاي أخضر مع أوراق الشاي', description: 'شاي أخضر خفيف ومنعش للحظات الهادئة.' }
};
const coffeeChoices = ['saudi-coffee', 'turkish-coffee', 'french-coffee', 'matcha', 'green-tea'];
const spiceChoices = ['mixed-spices', 'black-pepper', 'white-pepper', 'kabsa-spice', 'curry', 'cinnamon'];
const trendingSets = [
    ['matcha', 'green-tea', 'dates'],
    ['saudi-coffee', 'baharat', 'nuts'],
    ['beauty', 'dates', 'green-tea']
];
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

const trendingProducts = document.querySelectorAll('.trending-product');
let trendingSetIndex = 0;

function renderTrendingSet() {
    const trendingContainer = document.querySelector('.trending-products');
    trendingContainer.classList.add('is-swapping');
    window.setTimeout(() => {
        trendingSets[trendingSetIndex].forEach((productKey, index) => {
            const product = products[productKey];
            const card = trendingProducts[index];
            card.dataset.product = productKey;
            card.querySelector('img').src = product.image;
            card.querySelector('img').alt = product.alt;
            card.querySelector('span').textContent = `0${index + 1}`;
            card.querySelector('strong').textContent = product.title;
        });
        trendingContainer.classList.remove('is-swapping');
    }, 450);
}

window.setInterval(() => {
    trendingSetIndex = (trendingSetIndex + 1) % trendingSets.length;
    renderTrendingSet();
}, 5000);

function renderBag() {
    bagItemsElement.replaceChildren();
    if (bagItems.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.className = 'bag-empty';
        emptyMessage.textContent = 'سلة التسوق فارغة.';
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
            note.textContent = `ملاحظة: ${item.note}`;
            itemElement.append(note);
        }
        bagItemsElement.append(itemElement);
    });
}

function showProduct(productKey) {
    const product = products[productKey];
    selectedProduct = productKey;
    dialogOptions.setAttribute('aria-label', 'خيارات المنتج');
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

function openProductDialog(productKey) {
    dialog.classList.remove('no-image');
    dialogOptions.replaceChildren();
    if (productKey === 'coffee' || productKey === 'baharat') {
        const choices = productKey === 'coffee' ? coffeeChoices : spiceChoices;
        document.getElementById('dialog-title').textContent = productKey === 'coffee' ? 'القهوة' : 'البهارات';
        document.getElementById('dialog-description').textContent = productKey === 'coffee' ? 'اختر نوع القهوة الذي تريده.' : 'اختر نوع البهار الذي تريده.';
        dialogOptions.setAttribute('aria-label', productKey === 'coffee' ? 'خيارات القهوة' : 'خيارات البهارات');
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
}

document.querySelectorAll('.product-card').forEach((card) => {
    card.querySelector('.product-image').addEventListener('click', () => openProductDialog(card.dataset.product));
});

trendingProducts.forEach((card, index) => {
    card.dataset.product = trendingSets[0][index];
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.addEventListener('click', () => openProductDialog(card.dataset.product));
    card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openProductDialog(card.dataset.product);
        }
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
    bagButton.innerHTML = `السلة <span>${bagCount}</span>`;
    bagButton.setAttribute('aria-label', `سلة التسوق، ${bagCount} منتجات`);
    orderNote.value = '';
    dialog.close();
});

document.querySelectorAll('.site-nav a').forEach((link) => {
    link.addEventListener('click', () => {
        document.querySelectorAll('.site-nav a').forEach((item) => item.classList.remove('active'));
        link.classList.add('active');
    });
});
