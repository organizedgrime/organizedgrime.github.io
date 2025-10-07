import { defineField, defineType } from 'sanity'
import { common } from '../fields'

/**
 * Post schema.  Define and edit the fields for the 'post' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    common.title,
    common.slug,
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
    }),
    common.photo,
    common.body,
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'photo',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
