<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
	<footer>
		<div class="container">
			<div class="footer-top">
				<div class="footer-logo">
					<img src="@/assets/icons/logo.svg" alt="" />
				</div>
				<nav class="footer-nav">
					<ul>
						<li>
							<RouterLink to="/terms">Terms & Conditions</RouterLink>
						</li>
						<li>
							<RouterLink to="/privacy">Privacy</RouterLink>
						</li>
						<li>
							<RouterLink to="/notice">Notice at Collection</RouterLink>
						</li>
						<li>
							<RouterLink to="/ca">CA Privacy Hub</RouterLink>
						</li>
						<li>
							<RouterLink to="/contact">Contact Us</RouterLink>
						</li>
						<li>
							<RouterLink to="/sitemap">Sitemap</RouterLink>
						</li>
					</ul>
				</nav>
			</div>
			<div class="footer-bottom">
				<p>
					Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal
					Opportunity Lender.
				</p>
			</div>
		</div>
	</footer>
</template>
