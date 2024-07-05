import React, { useState } from 'react';
import { File as FileType } from '../types/types';
import { sortFiles, filterFiles } from '../utils/fileUtils';
import { files } from '../utils/mockData';
import FileList from './FileList';

const initialFiles: FileType[] = files;

const FileExplorer: React.FC = () => {
  const [currentFolder, setCurrentFolder] = useState<FileType | null>(null);
  const [sortBy, setSortBy] = useState<'name' | 'size' | 'date'>('name');
  const [filterQuery, setFilterQuery] = useState<string>('');

  const openFolder = (folder: FileType) => {
    setCurrentFolder(folder);
  };

  const sortedFiles = sortFiles(currentFolder ? currentFolder.files || [] : initialFiles, sortBy);
  const filteredFiles = filterFiles(sortedFiles, filterQuery);

  return (
    <div>
      <h1>Document Viewer</h1>
      <div>
        <label>
          Sort by:
          <select value={sortBy} onChange={e => setSortBy(e.target.value as 'name' | 'size' | 'date')}>
            <option value="name">Name</option>
            <option value="size">Size</option> {/*number of files*/}
            <option value="date">Date</option>
          </select>
        </label>
        <input
          type="text"
          placeholder="Filter by filename"
          value={filterQuery}
          onChange={e => setFilterQuery(e.target.value)}
        />
      </div>
      <FileList files={filteredFiles} onOpenFolder={openFolder} />
      {currentFolder && (
        <button onClick={() => setCurrentFolder(null)}>Back</button>
      )}
    </div>
  );
};

export default FileExplorer;
