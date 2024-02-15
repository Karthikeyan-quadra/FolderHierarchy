import * as React from 'react';
import { useState, ChangeEvent } from 'react';
import { FileUpload } from '../../../helpers/Service';
import { IHierarchyProps } from './IHierarchyProps';

export default function Hierarchy(props: IHierarchyProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");
  const [selectedFolder, setSelectedFolder] = useState<string>("");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      setSelectedFile(file);
    }
  };

  const handleDepartmentChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const department = event.target.value;
    setSelectedDepartment(department);

    // Reset the selected folder when department changes
    setSelectedFolder("");
  };

  const handleFolderChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedFolder(event.target.value);
  };

  const handleUpload = () => {
    if (selectedFile) {
      FileUpload(selectedFile, selectedDepartment, selectedFolder);
    }
  };

  // Define folder options based on the selected department
  const folderOptions = () => {
    switch (selectedDepartment) {
      case "HR":
        return ["Payroll"];
      case "Admin":
        return ["Policy"];
      case "Management":
        return ["Project", "Employee", "Manager"];
      case "Sales":
        return ["Report"];
      case "IT":
        return ["IT"];
      default:
        return [];
    }
  };

  return (
    <>
      <form action="listform">
        <label htmlFor="Departmentlists">Choose Department</label>
        <select id="Departmentlists" name="Departmentlist" form="listform" onChange={handleDepartmentChange} value={selectedDepartment}>
          <option value="" disabled>Select your choice</option>
          <option value="HR">HR</option>
          <option value="Admin">Admin</option>
          <option value="Management">Management</option>
          <option value="Sales">Sales</option>
          <option value="IT">IT</option>
        </select>
        <label htmlFor="Folderlists">Choose Folder</label>
        <select id="Folderlists" name="Folderlist" form="listform" onChange={handleFolderChange} value={selectedFolder}>
          <option value="" disabled>Select your choice</option>
          {folderOptions().map((folderOption, index) => (
            <option key={index} value={folderOption}>
              {folderOption}
            </option>
          ))}
        </select>
        {/* Add an input element for file selection */}
        <p>
          <input type="file" onChange={handleFileChange} />
          <button type="button" onClick={handleUpload}>
            Upload
          </button>
        </p>
      </form>
    </>
  );
}
