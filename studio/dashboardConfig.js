export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60bed46c08a380926b2a8cd2',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-oqqdj3c5',
                  apiId: 'c8d19157-b5af-4623-86e4-681515ca9826'
                },
                {
                  buildHookId: '60bed46ceac8f492fb6d06d8',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-o3bxq27h',
                  apiId: '1a4a2e00-4963-4901-856d-591f9bf60ce6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Shannon-Abco/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-o3bxq27h.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
