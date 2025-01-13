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
            <div class="image-gallery">
                <img src="blob:https://www.facebook.com/1ae3bf3f-e0d3-409c-afdf-0da68ba5b2cf" alt="Image 1">
                <img src="https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/444151246_25416888527958919_6702975813948719261_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH99sOp7Cut3nuJrgPdSuXBrnSHMuEy1PWudIcy4TLU9V3eMXBA9ulFbe8-GuqRijt_7NO27ubq-0aZhWfGkXR3&_nc_ohc=PK6sXsyf3MUQ7kNvgHn_D6Y&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=AyAt52GiNmC_VEIv299vOUf&oh=00_AYD0j7ko1trhQewCCoyAW2gcpc7FDKOwIRoBtN7wEFBszA&oe=678B04D7" alt="Image 2">
                <img src="https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/436404769_25302485046065935_7458906254374629587_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGOkD1yERwQlsOa4UPaj0MytZB_k3nAg7u1kH-TecCDu6AjBGPDI1WsIVW2h_X7nAWZmS2gXjCFHNPMqhUuGrYM&_nc_ohc=8ksA1P0xYHUQ7kNvgHkMQ4K&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=AZVxs_RKsF9AxXg2_jWrAvk&oh=00_AYBA_ezRT9ebF7qjLX-BPIF-vI2EvCOFxz-dAHZQ9lt-fg&oe=678B193F" alt="Image 3">
            </div>
    });

    app.component('guestbook-form', {
        template: 
            <div>
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
            </div>,
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
