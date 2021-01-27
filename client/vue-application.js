const Home = window.httpVueLoader('./components/Home.vue')
const Contact = window.httpVueLoader('./components/Contact.vue')

const routes = [
	{ path: '/', component: Home },
	{ path: '/Contact', component: Contact }
]

const router = new VueRouter({
	routes
})

var app = new Vue({
	router,
	el: '#app',
	data: {

	},
	methods: {
		async sendEmail(message) {
			const fullname = message.fullname
			const email = message.email
			const subject = message.subject
			const text = message.text
			console.log(fullname + " " + email + " " + subject + " " + text)
			await axios.post('/api/email', 'fullname=' + fullname + '&email=' + email + '&subject=' + subject + '&text=' + text)
		}
	}
})