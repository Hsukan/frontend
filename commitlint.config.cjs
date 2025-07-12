module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [
			2,
			'always',
			['feat', 'fix', 'chore', 'docs', 'refactor'],
		],
		// 'subject-case': [2, 'never', ['start-case', 'pascal-case']],
	},
}
