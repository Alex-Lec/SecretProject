<template>
<div class="contact">
	<h1 class="titles">Me contacter</h1>
	<form @submit.prevent="sendEmail()" class="contact-form">
		<div class="form-row">
			<label for="fullname" class="contact-label">Nom complet</label>
			<input type="text" v-model="message.fullname" name="fullname" id="fullname" class="form-input" required>
		</div>
		<div class="form-row">
			<label for="email" class="contact-label">Email</label>
			<input type="email" v-model="message.email" name="email" id="email" class="form-input" required>
		</div>
		<div class="form-row">
			<label for="subject" class="contact-label">Objet</label>
			<input type="text" v-model="message.subject" name="subject" id="subject" class="form-input" required>
		</div>
		<div class="form-row">
			<label for="text" class="contact-label">Message</label>
			<textarea v-model="message.text" name="text" id="text" class="form-textarea" required></textarea>
		</div>
		<div class="form-btn">
			<button type="submit" class="btn">Envoyer</button>
		</div>
	</form>
</div>
</template>
<script>
module.exports = {
	data () {
		return {
			message: {
				fullname: '',
				email: '',
				subject: '',
				text: ''
			}
		}
	},
	methods: {
		sendEmail() {
			this.$emit('send-email', this.message)
			this.message = {
				fullname: '',
				email: '',
				subject: '',
				text: ''
			}
		}
	}
}
</script>