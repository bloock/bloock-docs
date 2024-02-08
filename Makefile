
generate-example:
	mkdir -p examples/$(service)/$(name)
	touch examples/$(service)/$(name)/$(name).go
	touch examples/$(service)/$(name)/$(name).java
	touch examples/$(service)/$(name)/$(name).js
	touch examples/$(service)/$(name)/$(name).php
	touch examples/$(service)/$(name)/$(name).py
