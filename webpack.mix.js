const mix = require('laravel-mix');

mix
  .js('app/javascript/application.js', 'app/assets/builds')
  .sass('app/javascript/sass/application.scss', 'app/assets/builds')
  .react()
  .alias({
    '@': 'app/javascript',
  });

mix.webpackConfig({
  stats: {
    children: true,
  },
});

if (mix.inProduction()) {
  mix.version();
}
