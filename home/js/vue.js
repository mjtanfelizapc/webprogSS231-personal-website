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
                <img src="https://www.facebook.com/1ae3bf3f-e0d3-409c-afdf-0da68ba5b2cf" alt="Image 1">
                <img src="https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/444151246_25416888527958919_6702975813948719261_n.jpg" alt="Image 2">
                <img src="https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/436404769_25302485046065935_7458906254374629587_n.jpg" alt="Image 3">
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
