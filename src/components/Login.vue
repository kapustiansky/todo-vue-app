<script setup>
import LoginForm from '@/components/LoginForm.vue';
</script>

<template>
	<section class="welcome-block">
		<div class="welcome-img">
			<img src="@/assets/image/login-image.png" alt="" />
		</div>
		<div class="container">
			<div class="welcome-title">
				<h1>Welcome to Business&nbsp;Analytics&nbsp;Online</h1>
			</div>
		</div>
	</section>
	<section class="login-block">
		<div class="container">
			<div class="info">
				<p>
					<strong>Business Analytics</strong> — a new, convenient tool for
					managing and forecasting your business performance, which will help
					analyze your own finances and cash flows, visualize your reporting,
					business processes, KPI's
				</p>
				<ul>
					<li>
						<div class="info-item">
							<p class="info-item__title">Interactive Reporting</p>
							<p class="info-item__text">
								In just a few clicks, you can connect your data from 1C, CRM
								(Bitrix24, AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka,
								ebay), Logistic (Nova Poshta), Google Analytics and many more
								systems that reflect different aspects of business activities.
							</p>
						</div>
					</li>
					<li>
						<div class="info-item">
							<p class="info-item__title">Automated data updates</p>
							<p class="info-item__text">
								The application automatically updates and structures the data in
								just 60 seconds, saving you time and money.
							</p>
						</div>
					</li>
					<li>
						<div class="info-item">
							<p class="info-item__title">Data Security</p>
							<p class="info-item__text">
								The Bank guarantees the safety of your personal data, ensuring
								their integrity and confidentiality.
							</p>
						</div>
					</li>
				</ul>
			</div>
			<div class="form">
				<LoginForm />
			</div>
		</div>
	</section>
</template>

<style scoped>
.welcome-block {
	position: relative;
	height: 457px;
}

@media screen and (max-width: 640px) {
	.welcome-block {
		height: 140px;
	}
}

.welcome-block > .container {
	height: 100%;
}

.welcome-title {
	height: 100%;
	z-index: 1;
	max-width: 662px;
	display: flex;
	align-items: flex-end;
	padding-bottom: 70px;
}

@media screen and (max-width: 1210px) {
	.welcome-title {
		max-width: 600px;
		align-items: flex-start;
		padding-top: 40px;
	}
}

.welcome-title h1 {
	color: var(--white);
	font-size: 3.438rem;
}

@media screen and (max-width: 1210px) {
	.welcome-title h1 {
		font-size: 2.813rem;
	}
}

@media screen and (max-width: 640px) {
	.welcome-title h1 {
		font-size: 1.5rem;
	}
}

.welcome-img {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	pointer-events: none;
}

.welcome-img > img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.login-block {
	padding: 40px 0;
}

.login-block > .container {
	display: flex;
	justify-content: space-between;
}

@media screen and (max-width: 1210px) {
	.login-block > .container {
		flex-direction: column;
		align-items: center;
	}
}

.info {
	margin-right: 23px;
}

@media screen and (max-width: 1210px) {
	.info {
		margin-right: 0;
		order: 1;
		padding-top: 40px;
	}
}

.info > p {
	padding-bottom: 15px;
}

@media screen and (max-width: 640px) {
	.info > p {
		font-size: 0.875rem;
		padding-bottom: 5px;
	}
}

.info ul {
	list-style: none;
}

.info li {
	display: flex;
}

@media screen and (max-width: 640px) {
	.info li {
		font-size: 0.875rem;
	}
}

.info li:not(:last-child) {
	padding-bottom: 15px;
}

.info li::before {
	content: url('@/assets/icons/check.svg');
	margin-right: 15px;
	margin-top: 2px;
}

.info-item__title {
	font-family: 'Roboto-Medium';
	padding-bottom: 10px;
}

@media screen and (max-width: 640px) {
	.info-item__title {
		padding-bottom: 0;
	}
}

.info-item__text {
	font-size: 0.875rem;
}

@media screen and (max-width: 640px) {
	.info-item__text {
		font-size: 0.813rem;
	}
}

.form {
	box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.1);
	margin-top: -220px;
	background: var(--white);
	height: max-content;
	z-index: 2;
	width: max-content;
}

@media screen and (max-width: 640px) {
	.form {
		margin-top: 0;
		width: 100%;
	}
}
</style>
