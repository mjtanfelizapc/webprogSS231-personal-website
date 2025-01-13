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
        template: `
            <div class="image-gallery">
                <img src="https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/450680922_483235831322405_1362339865127725349_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHDGuUQ8Ja3XSPvYCaHcomneVmHhSqJuGB5WYeFKom4YDjk4oGUUTlltna9Vai1EN3ARnnUavoeCeZPo0AiImGr&_nc_ohc=O49esINq2JUQ7kNvgGrcpUd&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=AeUePgdcmfjim_yOVqu0JXC&oh=00_AYCKWb6vxsoWgsBtIlTDNtmaMcKyZWaP38LZ3BJJAOWjNA&oe=678B22DC" alt="Placeholder Image 1">
                <img src="https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/444151246_25416888527958919_6702975813948719261_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH99sOp7Cut3nuJrgPdSuXBrnSHMuEy1PWudIcy4TLU9V3eMXBA9ulFbe8-GuqRijt_7NO27ubq-0aZhWfGkXR3&_nc_ohc=PK6sXsyf3MUQ7kNvgHn_D6Y&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=AyAt52GiNmC_VEIv299vOUf&oh=00_AYD0j7ko1trhQewCCoyAW2gcpc7FDKOwIRoBtN7wEFBszA&oe=678B04D7" alt="Placeholder Image 2">
                <img src="https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/444137420_25416891654625273_5189314766478280952_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeExsPcpKGkpzYeNNMUBK6pnTilTBmQP-9tOKVMGZA_724UsVnpk4Xvc_r3Wug-Vw3bqRRE52MWN0v5-FRmgeiU1&_nc_ohc=EhkdkM75OzAQ7kNvgHFUp3_&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=AavaV3a1xOfk4_ErKY75DIj&oh=00_AYD7QKSHzu3r6BlcKDSKT-dZ8jJ-3KGBdQVPji-YhY7ezA&oe=678AF6E9" alt="Placeholder Image 3">
            </div>
        `
    });

    app.component('guestbook-form', {
        template: `
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
            </div>
        `,
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
