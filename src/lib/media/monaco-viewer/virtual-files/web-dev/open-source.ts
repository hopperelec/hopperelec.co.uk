function contributedTo(author: string, projectName: string) {
	const GITHUB_URL = `https://github.com/${author}/${projectName}`;
	console.log(
		`I have contributed to ${GITHUB_URL}; see my contributions here: ${GITHUB_URL}/commits?author=hopperelec`,
	);
}
contributedTo("mlomb", "chat-analytics");
contributedTo("premid", "presences");
contributedTo("ollama", "ollama-js");
