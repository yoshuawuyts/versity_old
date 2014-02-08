.PHONY : all default clean
.DEFAULT_GOAL : all default

all default : \
  build/scripts/application.js \
  build/scripts/vendor/backbone-1.1.0-min.js \
  build/scripts/vendor/jquery-2.1.0-min.js \
  build/scripts/vendor/lodash.underscore-2.4.1-min.js \
  build/scripts/vendor/react-0.8.0-min.js

build/scripts build/scripts/vendor:
	mkdir -p $@

build/scripts/application.js : client/index.js | build/scripts
	browserify -d $< > $@

build/scripts/vendor/backbone-1.1.0-min.js : | build/scripts/vendor
	curl -s https://github.com/jashkenas/backbone/blob/1.1.0/backbone-min.js -o $@

build/scripts/vendor/jquery-2.1.0-min.js : | build/scripts/vendor
	curl -s https://github.com/components/jquery/blob/2.1.0/jquery.min.js -o $@

build/scripts/vendor/lodash.underscore-2.4.1-min.js : | build/scripts/vendor
	curl -s https://github.com/lodash/lodash/blob/2.4.1/dist/lodash.underscore.min.js -o $@

build/scripts/vendor/react-0.8.0-min.js : | build/scripts/vendor
	curl -s https://github.com/facebook/react-bower/blob/v0.8.0/react.min.js -o $@

clean :
	rm -r build
