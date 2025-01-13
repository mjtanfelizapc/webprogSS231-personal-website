document.addEventListener("DOMContentLoaded", () => {
    const app = Vue.createApp({
        data() {
            return {
                backgroundColor: '#f0f8ff', // Default background color
                comments: [],
                newComment: {
                    name: '',
                    comment: ''
                }
            };
        },
        methods: {
            addComment() {
                if (this.newComment.name && this.newComment.comment) {
                    this.comments.push({ ...this.newComment });
                    this.newComment.name = '';
                    this.newComment.comment = '';
                }
            },
            changeBackgroundColor() {
                // Array of background options (colors or image URLs)
                const colorsOrImages = [
                    '#f0f8ff', 
                    '#ffebcd', 
                    '#add8e6', 
                    "url('https://img.freepik.com/free-photo/japan-background-digital-art_23-2151546124.jpg')", // << HIGHLIGHTED LINE: Add your URL here
                    "url('https://img.freepik.com/free-photo/illustration-anime-city_23-2151779669.jpg')"
                ];
                // Randomly pick a color or image URL
                this.backgroundColor = colorsOrImages[Math.floor(Math.random() * colorsOrImages.length)];
            }
        }
    });

    app.component('image-gallery', {
        template: 
            `<div class="image-gallery">
                <img src="https://via.placeholder.com/300" alt="Image 1">
                <img src="https://via.placeholder.com/300" alt="Image 2">
                <img src="https://via.placeholder.com/300" alt="Image 3">
            </div>`
    });

    app.component('guestbook-form', {
        template: 
            `<div>
                <form @submit.prevent="submitComment">
                    <input v-model="name" type="text" placeholder="Your Name" required>
                    <textarea v-model="message" placeholder="Your Comment" required></textarea>
                    <button type="submit">Submit</button>
                </form>
                <ul>
                    <li v-for="comment in comments" :key="comment.id">
                        <strong>{{ comment.name }}</strong>: {{ comment.message }}
                    </li>
                </ul>
            </div>`,
        data() {
            return {
                name: '',
                message: '',
                comments: []
            };
        },
        methods: {
            submitComment() {
                this.comments.push({ name: this.name, message: this.message });
                this.name = '';
                this.message = '';
            }
        }
    });

    app.mount('#app');
});
