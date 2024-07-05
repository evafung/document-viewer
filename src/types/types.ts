export interface File {
    type: 'pdf' | 'doc' | 'csv' | 'mov' | 'folder';
    name: string;
    added?: string; // For type != 'folder'
    files?: File[]; // For type = 'folder'
  }