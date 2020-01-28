module.exports = {
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
	testMatch: ['<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',  "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"],
	moduleNameMapper: {
		'@app/(.*)':  ["<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}", '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}'],
		'@env/(.*)': '<rootDir>/src/environments/$1',
	},
	moduleFileExtensions: ['js', 'jsx', 'json'],
	transform: {
	  '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
		'jest-transform-stub',
	  '^.+\\.(js|jsx)?$': 'babel-jest'
	},
	moduleNameMapper: {
	  '^@/(.*)$': '<rootDir>/src/$1'
	},
	transformIgnorePatterns: ['<rootDir>/node_modules/']
};