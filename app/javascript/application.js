// Entry point for the build script in your package.json
// import "@hotwired/turbo-rails"
// import "./controllers"

import React from 'react';
import { render } from 'react-dom';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

// import axios from 'axios';
// axios.defaults.xsrfHeaderName = 'X-CSRF-Token';

createInertiaApp({
  resolve: (name) => require(`./Pages/${name}`),
  setup({ el, App, props }) {
    render(<App {...props} />, el);
  },
});

InertiaProgress.init();
