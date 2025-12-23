
        // Clothing Data
        const clothingData = {
            male: [
                { 
                    id: 1, 
                    name: "Classic Navy Suit", 
                    description: "Tailored wool suit with modern cut", 
                    price: "$450", 
                    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80" 
                },
                { 
                    id: 2, 
                    name: "Casual Linen Blazer", 
                    description: "Lightweight linen blazer for summer occasions", 
                    price: "$220", 
                    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                },
                { 
                    id: 3, 
                    name: "Leather Biker Jacket", 
                    description: "Premium genuine leather jacket with detailed stitching", 
                    price: "$380", 
                    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                },
                { 
                    id: 4, 
                    name: "Cashmere Sweater", 
                    description: "Luxurious 100% cashmere crew neck sweater", 
                    price: "$280", 
                    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80" 
                },
                { 
                    id: 5, 
                    name: "Formal Tuxedo", 
                    description: "Elegant black tuxedo for special occasions", 
                    price: "$550", 
                    image: "https://images.unsplash.com/photo-1592878940527-5ac3e01e15a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                },
                { 
                    id: 6, 
                    name: "Designer Denim Jeans", 
                    description: "Premium selvedge denim with custom fit", 
                    price: "$180", 
                    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                }
            ],
            female: [
                { 
                    id: 7, 
                    name: "Evening Silk Gown", 
                    description: "Flowing silk gown with hand-embellished details", 
                    price: "$680", 
                    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                },
                { 
                    id: 8, 
                    name: "Floral Summer Dress", 
                    description: "Lightweight cotton dress with unique floral print", 
                    price: "$190", 
                    image: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3=D&auto=format&fit=crop&w=1974&q=80" 
                },
                { 
                    id: 9, 
                    name: "Velvet Blazer Dress", 
                    description: "Sophisticated velvet dress with structured silhouette", 
                    price: "$320", 
                    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                },
                { 
                    id: 10, 
                    name: "Embroidered Cocktail Dress", 
                    description: "Intricately embroidered dress for cocktail parties", 
                    price: "$420", 
                    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80" 
                },
                { 
                    id: 11, 
                    name: "Lace Wedding Gown", 
                    description: "Exquisite handmade lace wedding dress", 
                    price: "$1200", 
                    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                },
                { 
                    id: 12, 
                    name: "Wool Cape Coat", 
                    description: "Warm wool cape coat with designer buttons", 
                    price: "$350", 
                    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                }
            ]
        };

        // Selected item storage
        let selectedItem = null;

        // DOM Elements
        const collectionItemsContainer = document.getElementById('collectionItems');
        const tabButtons = document.querySelectorAll('.tab-btn');
        const selectedItemText = document.getElementById('selectedItemText');
        const selectedItemDisplay = document.getElementById('selectedItemDisplay');
        const orderForm = document.getElementById('orderForm');
        const whatsappOrderBtn = document.getElementById('whatsappOrderBtn');
        const emailOrderBtn = document.getElementById('emailOrderBtn');
        const notification = document.getElementById('notification');
        const notificationText = document.getElementById('notificationText');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navLinks = document.getElementById('navLinks');
        const header = document.getElementById('header');

        // Initialize the page with male collection
        document.addEventListener('DOMContentLoaded', function() {
            loadCollection('male');
            setupEventListeners();
            setupScrollAnimations();
            
            // Set current year in footer
            document.querySelector('.copyright p').innerHTML = document.querySelector('.copyright p').innerHTML.replace('2023', new Date().getFullYear());
        });

        // Load collection based on selection
        function loadCollection(collectionType) {
            collectionItemsContainer.innerHTML = '';
            const items = clothingData[collectionType];
            
            items.forEach((item, index) => {
                const itemElement = document.createElement('div');
                itemElement.className = 'collection-item fade-in';
                itemElement.style.transitionDelay = `${index * 0.1}s`;
                itemElement.innerHTML = `
                    <div class="collection-img">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="collection-info">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <div class="price">${item.price}</div>
                        <button class="select-btn" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}">Select for Order</button>
                    </div>
                `;
                collectionItemsContainer.appendChild(itemElement);
                
                // Add click event to the select button
                const selectBtn = itemElement.querySelector('.select-btn');
                selectBtn.addEventListener('click', function() {
                    selectItem(item);
                });
            });
            
            // Trigger fade-in animations after items are loaded
            setTimeout(() => {
                document.querySelectorAll('.collection-item').forEach(item => {
                    item.classList.add('visible');
                });
            }, 100);
        }

        // Set up event listeners
        function setupEventListeners() {
            // Tab switching
            tabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const collectionType = this.getAttribute('data-collection');
                    
                    // Update active tab
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Load collection
                    loadCollection(collectionType);
                });
            });
            
            // Order buttons
            whatsappOrderBtn.addEventListener('click', function() {
                if (validateForm()) {
                    sendOrderViaWhatsApp();
                }
            });
            
            emailOrderBtn.addEventListener('click', function() {
                if (validateForm()) {
                    sendOrderViaEmail();
                }
            });
            
            // Mobile menu toggle
            mobileMenuBtn.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? 
                    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
            });
            
            // Close mobile menu when clicking on a link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', function() {
                    navLinks.classList.remove('active');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                });
            });
            
            // Header scroll effect
            window.addEventListener('scroll', function() {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        }

        // Select item from collection
        function selectItem(item) {
            selectedItem = item;
            selectedItemText.textContent = `${item.name} - ${item.price}`;
            selectedItemDisplay.style.display = 'block';
            
            // Show notification
            showNotification(`"${item.name}" added to order form!`);
            
            // Scroll to order section
            document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
        }

        // Validate form before sending order
        function validateForm() {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!name) {
                showNotification('Please enter your full name', 'error');
                return false;
            }
            
            if (!email || !emailRegex.test(email)) {
                showNotification('Please enter a valid email address', 'error');
                return false;
            }
            
            if (!selectedItem) {
                showNotification('Please select an item from the collections first', 'error');
                return false;
            }
            
            return true;
        }

        // Send order via WhatsApp
        function sendOrderViaWhatsApp() {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const size = document.getElementById('size').value;
            const message = document.getElementById('message').value.trim();
            
            // WhatsApp message content
            let whatsappMessage = `New Order from Faves Needles Website:%0A%0A`;
            whatsappMessage += `*Customer Details:*%0A`;
            whatsappMessage += `Name: ${name}%0A`;
            whatsappMessage += `Email: ${email}%0A`;
            if (phone) whatsappMessage += `Phone: ${phone}%0A`;
            whatsappMessage += `%0A*Selected Item:*%0A`;
            whatsappMessage += `${selectedItem.name}%0A`;
            whatsappMessage += `Price: ${selectedItem.price}%0A`;
            if (size) whatsappMessage += `Size: ${size}%0A`;
            if (message) whatsappMessage += `Additional Details: ${message}%0A`;
            
            // Open WhatsApp with the message (replace phone number with your actual WhatsApp number)
            const phoneNumber = "+234 8083020898"; // Replace with your WhatsApp number in international format
            window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
            
            showNotification('Opening WhatsApp to send your order...');
        }

        // Send order via Email
        function sendOrderViaEmail() {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const size = document.getElementById('size').value;
            const message = document.getElementById('message').value.trim();
            
            // Email content
            const subject = `New Order: ${selectedItem.name}`;
            let body = `New Order from Faves Needles Website:\n\n`;
            body += `CUSTOMER DETAILS:\n`;
            body += `Name: ${name}\n`;
            body += `Email: ${email}\n`;
            if (phone) body += `Phone: ${phone}\n`;
            body += `\nSELECTED ITEM:\n`;
            body += `Item: ${selectedItem.name}\n`;
            body += `Description: ${selectedItem.description}\n`;
            body += `Price: ${selectedItem.price}\n`;
            if (size) body += `Size: ${size}\n`;
            if (message) body += `Additional Details: ${message}\n`;
            
            // Open default email client
            const mailtoLink = `mailto:franklinelisha73@gmail?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink;
            
            showNotification('Opening email client to send your order...');
        }

        // Show notification
        function showNotification(text, type = 'success') {
            notificationText.textContent = text;
            
            if (type === 'error') {
                notification.style.background = '#EA4335';
            } else {
                notification.style.background = '#25D366';
            }
            
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 4000);
        }

        // Set up scroll animations
        function setupScrollAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);
            
            // Observe all elements with fade-in class
            document.querySelectorAll('.fade-in').forEach(element => {
                observer.observe(element);
            });
        }
  