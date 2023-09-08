module.exports = {
	endOfLine: 'lf',
	printWidth: 150,
	quoteProps: 'as-needed',
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'none',
	useTabs: true,
	overrides: [
		{
			files: '*.{yml, yaml}',
			options: {
				singleQuote: false,
				tabWidth: 2,
				useTabs: false
			}
		}
	]
};
