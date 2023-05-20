import slugify from 'slugify';

export const slugName = (name: string) => slugify(name).toLocaleLowerCase();
