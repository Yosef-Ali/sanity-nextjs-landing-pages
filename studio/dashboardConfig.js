export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5fe309ee7b936418ca3e4361',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-igi1pqpf',
                  apiId: '427d81d1-a034-451b-b576-32226aa304ca'
                },
                {
                  buildHookId: '5fe309ee6ef3754147be2418',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-7xt1e5xj',
                  apiId: 'e6f968ea-f336-4fa9-859e-fe827f3c93c4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Yosef-Ali/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-7xt1e5xj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
