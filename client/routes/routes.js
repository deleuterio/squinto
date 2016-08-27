import React from 'react';
import { mount } from 'react-mounter';
import MainLayout from '../index.jsx';
import Home from '../views/Home/index.jsx';
import Articles from '../views/Articles/index.jsx';
import Process from '../views/Process/index.jsx';
import Contact from '../views/Contact/index.jsx';

// Home page

FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      tab: 'home',
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
      crumbs: [{ label: 'Artigos', path: FlowRouter.path('Articles') }],
      content(props) {
        return <Articles {...props} />;
      },
    });
  },

  name: 'Articles',
});

// Location

FlowRouter.route('/Contato', {
  action() {
    mount(MainLayout, {
      tab: 'contact',
      content: <Contact />,
    });
  },

  name: 'Contact',
});

// Process

FlowRouter.route('/processos', {
  action() {
    mount(MainLayout, {
      tab: 'process',
      content: <Process />,
    });
  },

  name: 'Process',
});
