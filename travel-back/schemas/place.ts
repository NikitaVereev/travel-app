export default {
  name: 'place',
  type: 'document',
  title: 'Place',
  fields: [
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'location.city',
        slugify: (input: any) => input.toLowerCase().replace(/\s+/g, '-'),
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'imagePath',
      type: 'image',
      options: {
        hotspot: true,
      },
      title: 'ImagePath',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'duration',
      type: 'string',
      title: 'Duration',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'distance',
      type: 'number',
      title: 'Distance',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'bigImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      title: 'Big Image',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        {name: 'city', type: 'string', title: 'City'},
        {name: 'country', type: 'string', title: 'Country'},
        {
          name: 'coordinates',
          title: 'Coordinates',
          type: 'object',
          fields: [
            {name: 'x', type: 'number', title: 'X'},
            {name: 'y', type: 'number', title: 'Y'},
          ],
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'location.city',
      media: 'imagePath',
    },
  },
}
