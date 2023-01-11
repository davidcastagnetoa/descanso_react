import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'userAdmin',
  title: 'Administradores',
  type: 'document',
  fields: [
    {
      name: 'userName',
      title: 'Coordinador',
      type: 'string'
    },
    {
      name: 'userid',
      title: 'Matricula',
      type: 'string'
    },
    {
      name: 'usermail',
      title: 'Email Corporativo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Imagen',
      type: 'string'
    }
  ],
})