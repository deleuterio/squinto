import React from 'react';
import { mount } from 'react-mounter';
import MainLayout from '../index.jsx';
import WelcomeComponent from '../views/home.jsx';
import Blog from '../views/Blog/index.jsx';
import Process from '../views/Process/index.jsx';

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
      content: <WelcomeComponent name="Arunoda" />,
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

FlowRouter.route('/localizacao', {
  action() {
    mount(MainLayout, {
      tab: 'location',
      content: <WelcomeComponent name="Arunoda" />,
    });
  },

  name: 'Location',
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
