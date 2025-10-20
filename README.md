# Document Viewer

## Overview
Document Viewer is a React-based web application that allows users to browse and manage files and folders. It provides functionalities to sort files by name, size, or date, and filter files by filename. The application is designed to be intuitive and user-friendly, enabling seamless navigation through a file system-like structure.

## Features
- **File Navigation**: Browse files and folders, with the ability to open folders and navigate back to the parent directory.
- **Sorting**: Sort files by name, size (number of files in a folder), or date.
- **Filtering**: Filter files by entering a search query to match filenames.
- **Responsive UI**: Clean and simple interface built with React.

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/username/document-viewer.git
   ```
2. Navigate to the project directory:
   ```bash
   cd document-viewer
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Running the Application
1. Start the development server:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```
2. Open your browser and navigate to `http://localhost:3000` to view the application.

### Deployment
The application is deployed and accessible at:  
[https://document-viewer-six.vercel.app/](https://document-viewer-six.vercel.app/)

## Usage
- **Sort Files**: Use the dropdown menu to sort files by name, size, or date.
- **Filter Files**: Enter a search query in the input field to filter files by their names.
- **Navigate Folders**: Click on a folder to view its contents, and use the "Back" button to return to the parent directory.

## Project Structure
```
document-viewer/
├── src/
│   ├── components/
│   │   ├── FileList.tsx       # Component to render the list of files/folders
│   ├── types/
│   │   ├── types.ts           # TypeScript type definitions
│   ├── utils/
│   │   ├── fileUtils.ts       # Utility functions for sorting and filtering files
│   │   ├── mockData.ts        # Mock data for files and folders
│   ├── App.tsx                # Main application component
│   ├── FileExplorer.tsx       # Core component for file exploration
│   ├── index.tsx              # Entry point for the React app
├── public/
│   ├── index.html             # HTML template
├── package.json               # Project metadata and dependencies
├── README.md                  # This file
```

## Technologies Used
- **React**: Frontend library for building the user interface.
- **TypeScript**: For type-safe development.
- **Vercel**: For deployment and hosting.

## Notes
- The application requires JavaScript to be enabled in the browser to function properly.
- The file data is currently mocked (see `mockData.ts`). To use real data, replace the mock data with an API or file system integration.
- Sorting by size refers to the number of files in a folder for folder-type items.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License.
