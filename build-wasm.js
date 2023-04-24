const spawn = require('child_process').spawn;
const clang = spawn('clang', [
    '-I./c/',
    '-Os',
    '-fno-builtin',
    '--target=wasm32',
    '--no-standard-libraries',
    '-Wl,--no-entry',
    '-Wl,--export=stbi_load_from_memory',
    '-Wl,--export=malloc',
    '-Wl,--export=heap_reset',
    '-Wl,--allow-undefined',
    '-o', 'wasm/stb_image.wasm',
    'c/stb_image.c'
]);

clang.stdout.on('data', (chunk) => {
    process.stdout.write(chunk.toString());
});

clang.stderr.on('data', (chunk) => {
    process.stderr.write(chunk.toString());
});
