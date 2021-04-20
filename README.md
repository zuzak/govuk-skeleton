This is a simple-ish rewrite of the management UI, which hopefully:
* is less annoying to use
* is less annoying to update
* is resilient to not being maintained much

To achieve this it should:
* be accessible
* work without JS or CSS enabled
* work on a CPU-starved corporate laptop
* do the hard work on the server side
* allow a developer unused to the codebase to build a new basic feature
* depend on the (much better resourced) GOV.UK Design System wherever possible

## Installation
```console
$ npm install
$ npm start # will compile SASS and run
```

You need info-service running locally.

To run with sensible development-friendly defaults, use:

```console
NODE_ENV=development npm start
```

Sensible configuration defaults are defined in `config.js`.
If you need to override them locally, use the environment variables listed there.
For more complex environments, create a new JSON file inside `config` and change
the `NODE_ENV` to match.

In most cases the configurations should default to a sensible production value.
For development defaults, change the config/development.json file.

## Troubleshooting
This app was written for Node 15. Check your version of npm is up to date if you get an error like:
```
Skipping 'fsevents' build as platform linux is not supported
npm ERR! Cannot read property 'length' of undefined
```
