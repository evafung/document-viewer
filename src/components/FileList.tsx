import React from 'react';
import { File as FileType } from '../types/types';
import File from './File';

interface FileListProps {
  files: FileType[];
  onOpenFolder: (folder: FileType) => void;
}

const FileList: React.FC<FileListProps> = ({ files, onOpenFolder }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th><th>File Name</th><th>Date</th>
          </tr>
        </thead>
        <tbody>
          {files.map(file => (
              <File key={file.name} file={file} onOpenFolder={onOpenFolder} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FileList;
