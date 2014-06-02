### 0. Install Node.js and Ruby

### 1. Clone this repo

	git clone https://github.com/branneman/grunt-scss-lint-test.git
	cd grunt-scss-lint-test

### 2. Install global dependencies

    npm install -g grunt-cli
	gem install bundle

### 3. Install project-specific dependencies

	npm install
	bundle install

### 4. Validate that scss-lint is installed

	scss-lint -v

### 5. Run the linter via grunt

	grunt scsslint
