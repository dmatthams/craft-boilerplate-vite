.PHONY: install

install:
	nitro craft install
	nitro craft plugin/install vite
	nitro craft autocomplete/generate
	nitro npm install
