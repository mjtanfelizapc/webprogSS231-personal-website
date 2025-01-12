const { createApp } = Vue;

const PictureGallery = {
    template: `
        <div class="image-gallery">
            <img v-for="image in images" :key="image.src" :src="image.src" :alt="image.alt" />
        </div>
    `,
    data() {
        return {
            images: [
                { src: "https://example.com/anime1.jpg", alt: "Anime 1" },
                { src: "https://example.com/anime2.jpg", alt: "Anime 2" },
                { src: "https://example.com/anime3.jpg", alt: "Anime 3" }
            ]
        };
    }
};

const GuestbookForm = {
    template: `
        <form @submit.prevent="addComment">
            <label for="name">Name:</label>
            <input v-model="name" type="text" id="name" required>

            <label for="comment">Comment:</label>
            <textarea v-model="comment" id="comment" required></textarea>

            <button type="submit">Submit</button>

            <div id="commentList">
                <div v-for="entry in comments" :key="entry.id">
                    <strong>{{ entry.name }}</strong>: {{ entry.comment }}
                </div>
            </div>
        </form>
    `,
    data() {
        return {
            name: '',
            comment: '',
            comments: []
        };
    },
    methods: {
        addComment() {
            if (this.name && this.comment) {
                this.comments.push({ id: Date.now(), name: this.name, comment: this.comment });
                this.name = '';
                this.comment = '';
            }
        }
    }
};

createApp({
    components: {
        'picture-gallery': PictureGallery,
        'guestbook-form': GuestbookForm
    }
}).mount('#app');