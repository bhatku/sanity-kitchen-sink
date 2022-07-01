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
                  buildHookId: '62bea73c11735627f2ffc94e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-cg2oyfra',
                  apiId: '731a1389-df26-496d-9964-86e1532f17dd'
                },
                {
                  buildHookId: '62bea73c7cb06a2ad601a465',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-9icqgk6n',
                  apiId: 'fc92bd2b-a65d-4555-bbbe-7cf4958ca8c9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bhatku/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-9icqgk6n.netlify.app', category: 'apps'}
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
