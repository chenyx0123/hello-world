install:
	git submodule update --init --recursive --force --remote
	+ npm i
	+ cd webapp-ssr-engine && npm i --omit=peer
	+ cd infra-next-ssr-engine-updater/engine-updater && npm i --omit=dev
	npm run lint:format
	npm run lint