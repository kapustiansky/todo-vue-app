export const getApiAuth = async (username, pass) => {
	const fetch = new Promise((resolve, reject) => {
		setTimeout(
			resolve({
				data: { username: 'Admin', password: 12345 },
			}),
			Math.random() * 1000
		);
	});
	const res = await fetch;

	if (
		username === res.data.username &&
		Number(pass) === Number(res.data.password)
	) {
		return true;
	}

	return false;
};
