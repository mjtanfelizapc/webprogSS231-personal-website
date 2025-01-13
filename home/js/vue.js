document.addEventListener("DOMContentLoaded", () => {
    const app = Vue.createApp({
        data() {
            return {
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
