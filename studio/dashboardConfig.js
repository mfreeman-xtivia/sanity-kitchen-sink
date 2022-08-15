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
                  buildHookId: '62fa43d386c9c25772291507',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-51vmao8e',
                  apiId: '7169d005-75b4-41da-8b9d-01e8ff94de7d'
                },
                {
                  buildHookId: '62fa43d4e60e504b3f5de7c0',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-spjkbsrs',
                  apiId: 'f4c26227-2b49-4665-a7fe-b7eedec7139f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mfreeman-xtivia/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-spjkbsrs.netlify.app', category: 'apps'}
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
