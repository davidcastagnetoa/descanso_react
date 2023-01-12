import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cones',
  title: 'Conos',
  type: 'document',
  fields: [
    {
      name: 'breakName',
      title: 'Nombre del Cono',
      type: 'string'
    },
    {
      name: 'breakStatus',
      title: 'Estado del Cono',
      type: 'boolean'
    },
  ],
})
