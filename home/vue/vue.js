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
                { src: "https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-1/450680922_483235831322405_1362339865127725349_n.jpg?stp=c0.16.1553.1553a_dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeHDGuUQ8Ja3XSPvYCaHcomneVmHhSqJuGB5WYeFKom4YDjk4oGUUTlltna9Vai1EN3ARnnUavoeCeZPo0AiImGr&_nc_ohc=O49esINq2JUQ7kNvgGrcpUd&_nc_zt=24&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=AsuYagROf8ZGaWzHHoxwO0i&oh=00_AYA2-f0qNGX-rE841jSb2i-Y8cZgeq-0myx-WGdwT_Zdsw&oe=678A3F1E", alt: "Anime 1" },
                { src: "https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/444137420_25416891654625273_5189314766478280952_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeExsPcpKGkpzYeNNMUBK6pnTilTBmQP-9tOKVMGZA_724UsVnpk4Xvc_r3Wug-Vw3bqRRE52MWN0v5-FRmgeiU1&_nc_ohc=EhkdkM75OzAQ7kNvgHFUp3_&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=AbQgMZL70Rhy0fXAInhTQhi&oh=00_AYBD_ivCC-pmgz0nKM1issCLTfx-DikoBQ2u6fKbNHoXEQ&oe=678A15E9", alt: "Anime 2" },
                { src: "https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/444152844_25416892257958546_8633119953261684371_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHMA2BjFAXQOQj9jOKrpOQOGnsTl0yhXpcaexOXTKFel6PXnefvVtAQwwGd6Xt-PlZ-AaBxIq8rXmqtoza07O2z&_nc_ohc=BXkKAjWrGOkQ7kNvgEuiBCU&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=AbXWCUsLtpi59iFlf-FJAPz&oh=00_AYCIMrh_eWdJg1VEJv7rwF6hYy86qwO9Qp0R3t9yInXN2Q&oe=678A3CA4", alt: "Anime 3" }
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