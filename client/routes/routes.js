import React from 'react';
import { mount } from 'react-mounter';
import MainLayout from '../index.jsx';
import Home from '../views/Home/index.jsx';
import Articles from '../views/Articles/index.jsx';

// Home page

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      tab: 'home',
      crumbs: {
        title: 'sQuinto',
        content: [],
      },
      content(props) {
        return <Home {...props} />;
      },
    });
  },

  name: 'Home',
});

FlowRouter.route('/home', {
  action() {
    FlowRouter.go('Home');
  },
});

// Articles

FlowRouter.route('/artigos', {
  action() {
    mount(MainLayout, {
      crumbs: {
        title: 'Artigos',
        content: [{ label: 'sQuinto', path: FlowRouter.path('Home') }],
      },
      content(props) {
        return <Articles {...props} />;
      },
    });
  },

  name: 'Articles',
});
