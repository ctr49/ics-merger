import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
	input: './src/server.js',
	output: {
		file: './dist/server.js',
		format: 'cjs'
	},
	plugins: [
		json(),
		commonjs({transformMixedEsModules: true}),
		resolve(),
		babel({
			exclude: 'node_modules/**',
		})
	],
	external: [
		'ical.js',
		'express',
		'node-fetch',
		'body-parser',
		'color-string',
		'moment',
		'moment-timezone',
		'url',
		'path'
	]
	//preferConst: true
};
