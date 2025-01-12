const { createApp } = Vue;

// Picture Gallery Component
const PictureGallery = {
    template: `
        <div class="image-gallery">
            <div v-for="image in images" :key="image.src" class="gallery-item">
                <img :src="image.src" :alt="image.alt" />
            </div>
        </div>
    `,
    data() {
        return {
            images: [
                { src: "https://scontent.fmnl16-1.fna.fbcdn.net/...jpg", alt: "Micharl" },
                { src: "https://guildjen.com/...jpg", alt: "Wuthering Waves" },
                { src: "https://img.olympics.com/...jpg", alt: "Basketball" }
            ]
        };
    }
};

// Guestbook Form Component
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

// Vue App Initialization
createApp({
    components: {
        'picture-gallery': PictureGallery,
        'guestbook-form': GuestbookForm
    }
}).mount('#app');