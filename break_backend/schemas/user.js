import {defineField, defineType} from 'sanity'

export default defineType(
  {
  name: 'user',
  title: 'Asesores',
  type: 'document',
  fields: [
    {
      name: 'userName',
      title: 'Asesor',
      type: 'string',
    },
    {
      name: "userRol",
      type: "string",
      title: "Rol de usuario",
      options: {
        list: [
          "Asesor",
          "Administrador"
        ]
      }
    },
    {
      name: 'userid',
      title: 'Matricula',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
})
