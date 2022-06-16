import resolver from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import scss from 'rollup-plugin-scss';
import postcss from 'rollup-plugin-postcss';

const packageJson = require('./package.json');

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true,
            }
        ],
        plugins: [
            scss({
                output: 'dist/css/style.css',
                failOnError: true,
                runtime: require('sass'),
            }),
            postcss(),
            resolver(),
            commonjs(),
            typescript({
                tsconfig: './tsconfig.json',
            }),
        ]
    },
    {
        input: 'dist/esm/types/index.d.ts',
        output: [{
            file: 'dist/index.d.ts',
            format: 'esm',
        }],
        external: [/\.css$/, /\.scss/],
        plugins: [dts()]
    }
]
