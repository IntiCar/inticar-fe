module.exports = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Explore',
    path: '/explore',
  },
  {
    label: 'Blog',
    subMenu: [
      {
        label: 'Blog Grid',
        path: '/blog-grid',
      },
      {
        label: 'Blog List',
        path: '/blog-list',
      },
      {
        label: 'Blog Single',
        path: '/blog-single',
      },
    ],
  },
];
