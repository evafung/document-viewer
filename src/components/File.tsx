import React from 'react';
import { File as FileType } from '../types/types';

interface FileProps {
  file: FileType;
  onOpenFolder: (folder: FileType) => void;
}

const FileItem: React.FC<FileProps> = ({ file, onOpenFolder }) => {
  return (
    <tr onClick={() => file.type === 'folder' && onOpenFolder(file)}>
      <td>{file.type === 'folder' ? '📁' : '📄'}</td><td>{file.name}{file.type === 'folder' ? '' : `.${file.type}`}</td><td>{file.type === 'folder' ? '' : file.added}</td>
    </tr>
  );
};

export default FileItem;
