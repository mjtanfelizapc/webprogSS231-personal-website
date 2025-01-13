
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
                        <img src="https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/450680922_483235831322405_1362339865127725349_n.jpg?stp=c0.163.1553.1553a_dst-jpg_s600x600_tt6&_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHDGuUQ8Ja3XSPvYCaHcomneVmHhSqJuGB5WYeFKom4YDjk4oGUUTlltna9Vai1EN3ARnnUavoeCeZPo0AiImGr&_nc_ohc=O49esINq2JUQ7kNvgGrcpUd&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=AeXRT9zlw-zdX7P6bnJaJBb&oh=00_AYBhcXoL9QHonY8Zer63a3FB68TgB5FZgSYdJ92u-hVrWw&oe=678A41DC" alt="Micharl">
                        <img src="https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-6/444151246_25416888527958919_6702975813948719261_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH99sOp7Cut3nuJrgPdSuXBrnSHMuEy1PWudIcy4TLU9V3eMXBA9ulFbe8-GuqRijt_7NO27ubq-0aZhWfGkXR3&_nc_ohc=BmZJY8XFq-QQ7kNvgE73sp-&_nc_zt=23&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=ATTjeFaQITaa353fSYmBj6i&oh=00_AYAQcrNKpTWR-CqqdpzsalTfgpn-0rQg8nic4Q7hWYQ0sQ&oe=678A23D7" alt="Family">
                        <img src="https://scontent.fmnl16-1.fna.fbcdn.net/v/t39.30808-1/459554123_7965014073597244_6729477571658569932_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEXerW6EVhSKkjLjjlPjqJSq8uDyCS1SI2ry4PIJLVIjafjGVeG_zzx4P-XO2AMM20tZZT3W8yIwEkHI8QIaPRS&_nc_ohc=-fHIbfo9NpgQ7kNvgG23St0&_nc_zt=24&_nc_ht=scontent.fmnl16-1.fna&_nc_gid=A0ESeqztlf-4IgReQO1R9HA&oh=00_AYBkZsZz4Jgx1YnJdg3o7j1OUwbLIMumpC-1slVqQLNsOQ&oe=678A1EDD" alt="Love">
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
 