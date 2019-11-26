import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default [
    {
        input: 'src/index.ts',
        output: {
            dir: './dist/cjs',
            format: 'cjs'
        },
        plugins: [
            typescript(),
            resolve(),
            commonjs()
        ]
    },
    {
        input: 'src/index.ts',
        output: {
            dir: './dist/esm',
            format: 'esm'
        },
        plugins: [
            typescript(),
            resolve(),
            commonjs()
        ]
    }
];