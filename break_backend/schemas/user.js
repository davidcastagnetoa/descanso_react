import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'user',
  title: 'Asesores',
  type: 'document',
  fields: [
    {
      name: 'userName',
      title: 'Asesor',
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
