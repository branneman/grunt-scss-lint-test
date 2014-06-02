### 1. Clone this repo

	git clone https://github.com/branneman/grunt-scss-lint-test.git
	cd grunt-scss-lint-test

### 2. Install dependencies

	gem install sass scss-lint bundler
	npm install -g grunt-cli
	npm install

### 3. On Windows, install some more dependencies

	gem install windows-pr win32console

### 4. Validate that scss-lint is installed

	scss-lint -v

### 5. Run the linter via grunt

	grunt scsslint
