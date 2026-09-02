const products = {
    'signature-bun': { title: 'Signature buns', price: 'Made today', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=85', alt: 'Fresh golden cinnamon buns arranged on a tray' },
    'fresh-pastries': { title: 'Fresh pastries', price: 'Made today', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85', alt: 'Assortment of fresh pastries and bread' },
    'coffee-and-more': { title: 'Coffee & more', price: 'Daily', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85', alt: 'Coffee being poured beside fresh pastries' }
};
const dialog = document.getElementById('product-dialog');
const bagButton = document.querySelector('.bag-button');
let bagCount = 0;

document.querySelectorAll('.product-card').forEach((card) => {
    card.querySelector('.product-image').addEventListener('click', () => {
        const product = products[card.dataset.product];
        document.getElementById('dialog-image').src = product.image;
        document.getElementById('dialog-image').alt = product.alt;
        document.getElementById('dialog-title').textContent = product.title;
        document.getElementById('dialog-price').textContent = product.price;
        dialog.showModal();
    });
});

document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
document.getElementById('add-to-bag').addEventListener('click', () => {
    bagCount += 1;
    bagButton.innerHTML = `Bag <span>${bagCount}</span>`;
    bagButton.setAttribute('aria-label', `Shopping bag, ${bagCount} item${bagCount === 1 ? '' : 's'}`);
    dialog.close();
});

document.querySelectorAll('.site-nav a').forEach((link) => {
    link.addEventListener('click', () => {
        document.querySelectorAll('.site-nav a').forEach((item) => item.classList.remove('active'));
        link.classList.add('active');
    });
});
