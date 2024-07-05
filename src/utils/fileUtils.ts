import { File } from '../types/types';

export const sortFiles = (files: File[], sortBy: 'name' | 'size' | 'date') => {
  return [...files].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'date') {
      if (a.added && b.added)
        return new Date(a.added).getTime() - new Date(b.added).getTime();
    } else if (sortBy === 'size') {
      if (a.files && b.files)
        return a.files.length - b.files.length;
      else if (a.files) return a.files.length - 1;
      else if (b.files) return 1 - b.files.length;
    }
    return 0;
  });
};

export const filterFiles = (files: File[], query: string) => {
  if (!query) return files;
  return files.filter(file => file.name.toLowerCase().includes(query.toLowerCase()));
};
