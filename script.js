document.addEventListener("DOMContentLoaded", function() {

    const form = document.querySelector(".contact-form");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault(); 

            if (form.name.value.trim() === "") {
                alert("Please enter your name.");
                form.name.focus();
                return;
            }

            if (!validateEmail(form.email.value)) {
                alert("Please enter a valid email address.");
                form.email.focus();
                return;
            }

            if (form.message.value.trim() === "") {
                alert("Please enter your message.");
                form.message.focus();
                return;
            }

     
            alert("Thank you for your message, " + form.name.value + "! We'll get back to you soon.");
            form.reset(); 
        });
    }


    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

  
    const buyButtons = document.querySelectorAll('.buy-now');

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            const price = button.getAttribute('data-price');
            showPurchaseModal(product, price);
        });
    });

 
    function showPurchaseModal(product, price) {
        const modal = document.getElementById('purchase-modal');
        const form = document.getElementById('purchase-form');
        
        form.querySelector('h2').innerText = `Purchase ${product}`;
        form.querySelector('.product-price').innerText = `Price: NRS ${price}`;
        form.querySelector('input[name="product"]').value = product;

        modal.style.display = 'block';
    }


    const closeModalBtn = document.querySelector('.close-modal');
    const modal = document.getElementById('purchase-modal');

    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

  
    const purchaseForm = document.getElementById('purchase-form');

    if (purchaseForm) {
        purchaseForm.addEventListener('submit', function(event) {
            event.preventDefault();

        
            const firstName = purchaseForm.firstName.value.trim();
            const lastName = purchaseForm.lastName.value.trim();
            const email = purchaseForm.email.value.trim();
            const contact = purchaseForm.contact.value.trim();
            const address = purchaseForm.address.value.trim();
            const city = purchaseForm.city.value.trim();
            const quantity = purchaseForm.quantity.value.trim();

            if (firstName === "" || lastName === "" || email === "" || contact === "" || address === "" || city === "" || quantity === "") {
                alert("Please fill in all fields.");
                return;
            }

            if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
                purchaseForm.email.focus();
                return;
            }

            alert(`Thank you, ${firstName}! Your order for ${quantity} x ${purchaseForm.product.value} has been placed.`);
            purchaseForm.reset();
            modal.style.display = 'none';
        });
    }
});
