import React from 'react';
import { mount } from 'react-mounter';
import MainLayout from '../index.jsx';
import Home from '../views/Home/index.jsx';
import Blog from '../views/Blog/index.jsx';
import Process from '../views/Process/index.jsx';
import Contact from '../views/Contact/index.jsx';

// Home page

FlowRouter.route('/', {
  action() {
    FlowRouter.go('Home');
  },
});

FlowRouter.route('/home', {
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

// Blog

FlowRouter.route('/artigos', {
  action() {
    mount(MainLayout, {
      tab: 'blog',
      content: <Blog />,
    });
  },

  name: 'Blog',
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
