import React from 'react';
import { mount } from 'react-mounter';
import MainLayout from '../index.jsx';
import WelcomeComponent from '../views/home.jsx';

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
      content: <WelcomeComponent name="Arunoda" />,
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
