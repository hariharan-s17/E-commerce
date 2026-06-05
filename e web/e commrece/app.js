/**
 * AURA Store Front State Controller Module
 * Handles dynamic products indexing data data, user cart contexts,
 * notifications runtime and layout conditions.
 */
function shopContext() {
    return {
        isCartOpen: false,
        isMobileMenuOpen: false,
        activeCategory: 'All',
        toasts: [],
        cart: [],
        products: [
            {
                id: 1,
                name: "Obsidian Techwear Parka V4",
                category: "Jackets",
                tag: "Best Seller",
                price: 189.00,
                description: "Waterproof outer membrane shell with modular magnetic harness straps and thermal lining.",
                image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=600"
            },
            {
                id: 2,
                name: "Xenon Grid Stealth Cargo",
                category: "Cargo",
                tag: "New Drop",
                price: 124.50,
                description: "Reinforced relaxed-fit streetwear joggers featuring dynamic tactical zip compartments.",
                image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=600"
            },
            {
                id: 3,
                name: "AeroPulse Cybernetic Boots",
                category: "Footwear",
                tag: "Limited Stock",
                price: 240.00,
                description: "High-top cyberpunk inspired footwear with responsive cushioning soles and futuristic lace-free look.",
                image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=600"
            },
            {
                id: 4,
                name: "Neon-Overdrive Alpha Bomber",
                category: "Jackets",
                tag: "Trending",
                price: 155.00,
                description: "Lightweight weather-resistant layer featuring clean geometric stitch lines and internal carry strap.",
                image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=600"
            },
            {
                id: 5,
                name: "Phantom Kinetic Utility Pants",
                category: "Cargo",
                tag: "Standard Pack",
                price: 110.00,
                description: "Ergonomic fit with high stretch fabric perfect for responsive everyday urban motion profiles.",
                image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=600"
            },
            {
                id: 6,
                name: "Quantum Flux Matrix Runner",
                category: "Footwear",
                tag: "Hot Release",
                price: 198.00,
                description: "Engineered mesh knit body featuring responsive energy-returning midsoles for street endurance.",
                image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600"
            }
        ],

        get filteredProducts() {
            if (this.activeCategory === 'All') return this.products;
            return this.products.filter(p => p.category === this.activeCategory);
        },

        triggerToast(msg) {
            const id = Date.now();
            this.toasts.push({ id, message: msg });
            setTimeout(() => {
                this.toasts = this.toasts.filter(t => t.id !== id);
            }, 3500);
        },

        addToCart(product) {
            const existingItem = this.cart.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                this.cart.push({ ...product, quantity: 1 });
            }
            this.triggerToast(`"${product.name}" successfully added to your cart!`);
        },

        buyNow(product) {
            const existingItem = this.cart.find(item => item.id === product.id);
            if (!existingItem) {
                this.cart.push({ ...product, quantity: 1 });
            }
            this.isCartOpen = true;
        },

        updateQty(id, delta) {
            const item = this.cart.find(item => item.id === id);
            if (item) {
                item.quantity += delta;
                if (item.quantity <= 0) this.removeFromCart(id);
            }
        },

        removeFromCart(id) {
            this.cart = this.cart.filter(item => item.id !== id);
        },

        getCartTotal() {
            return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        },

        checkoutProcess() {
            alert(`ORDER PROCESSED! Thank you for purchasing. Total Charged: $${this.getCartTotal().toFixed(2)}`);
            this.cart = [];
            this.isCartOpen = false;
        }
    };
}