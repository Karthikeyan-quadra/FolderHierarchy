// import * as React from 'react';
// import { useState, ChangeEvent } from 'react';
// import { FileUpload } from '../../../helpers/Service';
// import { IHierarchyProps } from './IHierarchyProps';

// export default function Hierarchy(props: IHierarchyProps) {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [selectedDepartment, setSelectedDepartment] = useState<string>("");
//   const [selectedFolder, setSelectedFolder] = useState<string>("");

//   const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const fileInput = event.target;
//     if (fileInput.files && fileInput.files.length > 0) {
//       const file = fileInput.files[0];
//       setSelectedFile(file);
//     }
//   };

//   const handleDepartmentChange = (event: ChangeEvent<HTMLSelectElement>) => {
//     const department = event.target.value;
//     setSelectedDepartment(department);

//     // Reset the selected folder when department changes
//     setSelectedFolder("");
//   };

//   const handleFolderChange = (event: ChangeEvent<HTMLSelectElement>) => {
//     setSelectedFolder(event.target.value);
//   };

//   const handleUpload = () => {
//     if (selectedFile) {
//       FileUpload(selectedFile, selectedDepartment, selectedFolder);
//     }
//   };

//   // Define folder options based on the selected department
//   const folderOptions = () => {
//     switch (selectedDepartment) {
//       case "HR":
//         return ["Payroll"];
//       case "Admin":
//         return ["Policy"];
//       case "Management":
//         return ["Project", "Employee", "Manager"];
//       case "Sales":
//         return ["Report"];
//       case "IT":
//         return ["IT"];
//         case "Food Management":
//           return ["Food", "Snacks"];
//           case "Travel Management":
//             return ["Cab", "flight"];
//       default:
//         return [];
//     }
//   };

//   return (
//     <>
//       <form action="listform">
//         <label htmlFor="Departmentlists">Choose Department</label>
//         <select id="Departmentlists" name="Departmentlist" form="listform" onChange={handleDepartmentChange} value={selectedDepartment}>
//           <option value="" disabled>Select your choice</option>
//           <option value="HR">HR</option>
//           <option value="Admin">Admin</option>
//           <option value="Management">Management</option>
//           <option value="Sales">Sales</option>
//           <option value="IT">IT</option>
//           <option value="Food Management">Food Management</option>
//           <option value="Travel Management">Travel Management</option>


//         </select>
//         <label htmlFor="Folderlists">Choose Folder</label>
//         <select id="Folderlists" name="Folderlist" form="listform" onChange={handleFolderChange} value={selectedFolder}>
//           <option value="" disabled>Select your choice</option>
//           {folderOptions().map((folderOption, index) => (
//             <option key={index} value={folderOption}>
//               {folderOption}
//             </option>
//           ))}
//         </select>
//         {/* Add an input element for file selection */}
//         <p>
//           <input type="file" onChange={handleFileChange} />
//           <button type="button" onClick={handleUpload}>
//             Upload
//           </button>
//         </p>
//       </form>
//     </>
//   );
// }


//CODE WORKED
// import * as React from 'react';
// import { useState, useEffect } from 'react';
// import { FileUpload } from '../../../helpers/Service';
// import { IHierarchyProps } from './IHierarchyProps';
// import { Select, Button, Upload, message } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';
// import "antd/dist/reset.css";

// const { Option } = Select;

// export default function Hierarchy(props: IHierarchyProps) {
//   const [selectedDepartment, setSelectedDepartment] = useState<string>("");
//   const [selectedFolder, setSelectedFolder] = useState<string>("");
//   const [fileList, setFileList] = useState<any>([]);

//   useEffect(() => {
//     setFileList([]);
//   }, [selectedDepartment, selectedFolder]);

//   const handleDepartmentChange = (value: string) => {
//     setSelectedDepartment(value);
//     setSelectedFolder("");
//   };

//   const handleFolderChange = (value: string) => {
//     setSelectedFolder(value);
//   };

//   const handleUpload = async (file: any) => {
//     try {
//       await FileUpload(file, selectedDepartment, selectedFolder);
//       message.success(`${file.name} file uploaded successfully`);
//       setSelectedDepartment("");
//       setSelectedFolder("");
//       setFileList([]);
//     } catch (error) {
//       message.error(`${file.name} file upload failed.`);
//     }
//   };
//   const handleRemove = (file: any) => {
//     // Handle file removal logic here
//     const newFileList = fileList.filter((item: any) => item.uid !== file.uid);
//     setFileList(newFileList);
//   };

//   const folderOptions = () => {
//     switch (selectedDepartment) {
//       case "HR":
//         return ["Payroll"];
//       case "Admin":
//         return ["Policy"];
//       case "Management":
//         return ["Project", "Employee", "Manager"];
//       case "Sales":
//         return ["Report"];
//       case "IT":
//         return ["IT"];
//       case "Food Management":
//         return ["Food", "Snacks"];
//       case "Travel Management":
//         return ["Cab", "Flight"];
//         case "Security Management":
//         return ["security"];
//       default:
//         return [];
//     }
//   };

//   return (
//     <div style={{textAlign:"center", margin:"0 auto", width:"50%"}}>
//       <div>
//       <p style={{fontSize:"20px", background:"black", color:"white"}}><b>Folder Hierarchy</b></p>
//       </div>
//       <div>
//       <form action="listform">
//       <p>
//         <label htmlFor="Departmentlists">Select the department</label>
//         <Select
//   id="Departmentlists"
//   onChange={handleDepartmentChange}
//   value={selectedDepartment}
//   style={{ width: 200, marginBottom: 16, marginLeft: "20px" }}
// >

//           <Option value="" disabled>Select your choice</Option>
//           <Option value="HR">HR</Option>
//           <Option value="Admin">Admin</Option>
//           <Option value="Management">Management</Option>
//           <Option value="Sales">Sales</Option>
//           <Option value="IT">IT</Option>
//           <Option value="Food Management">Food Management</Option>
//           <Option value="Travel Management">Travel Management</Option>
//          <Option value="Security Management">Security Management</Option>

//         </Select>
//         </p>
//         <p>
//           <label htmlFor="">Select your section</label>
//         <Select
//           id="Folderlists"
//           onChange={handleFolderChange}
//           value={selectedFolder}
//           style={{ width: 200, marginBottom: 16, marginLeft: "42px" }}
//         >
//           <Option value="" disabled>Select your choice</Option>
//           {folderOptions().map((folderOption: string, index: number) => (
//             <Option key={index} value={folderOption}>
//               {folderOption}
//             </Option>
//           ))}
//         </Select>
//         </p>
//         <Upload
//           fileList={fileList}
//           beforeUpload={() => false}
//           onChange={({ file }) => setFileList([file])}
//           onRemove={handleRemove} // Added onRemove prop for file removal

//         >
          
//           <Button icon={<UploadOutlined rev={undefined} />} style={{ marginLeft: 1 }}>
//             Select File
//           </Button>
//         </Upload>
//         <Button type="primary" onClick={() => handleUpload(fileList[0])} style={{ marginLeft: 1 }}>
//           Upload
//         </Button>
//       </form>
//       </div>
//     </div>
//   );
// }

import * as React from 'react';
import { useState, useEffect } from 'react';
import { FileUpload } from '../../../helpers/Service';
import { IHierarchyProps } from './IHierarchyProps';
import { Select, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";

const { Option } = Select;

export default function Hierarchy(props: IHierarchyProps) {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");
  const [selectedFolder, setSelectedFolder] = useState<string>("");
  const [fileList, setFileList] = useState<any>([]);

  useEffect(() => {
    setFileList([]);
  }, [selectedDepartment, selectedFolder]);

  const handleDepartmentChange = (value: string) => {
    setSelectedDepartment(value);
    setSelectedFolder("");
  };

  const handleFolderChange = (value: string) => {
    setSelectedFolder(value);
  };

  const handleUpload = async (file: any) => {
    if (!selectedDepartment || !selectedFolder) {
      message.error("Please select both department and folder before uploading.");
      return;
    }
    try {
      await FileUpload(file, selectedDepartment, selectedFolder);
      message.success(`${file.name} file uploaded successfully`);
      setSelectedDepartment("");
      setSelectedFolder("");
      setFileList([]);
    } catch (error) {
      message.error(`${file.name} file upload failed.`);
    }
  };
  const handleRemove = (file: any) => {
    // Handle file removal logic here
    const newFileList = fileList.filter((item: any) => item.uid !== file.uid);
    setFileList(newFileList);
  };

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
      case "Food Management":
        return ["Food", "Snacks"];
      case "Travel Management":
        return ["Cab", "Flight"];
        case "Security Management":
        return ["security"];
      default:
        return [];
    }
  };

  return (
    <div style={{textAlign:"center", margin:"0 auto", width:"50%"}}>
      <div>
      <p style={{fontSize:"20px", background:"black", color:"white"}}><b>Folder Hierarchy</b></p>
      </div>
      <div>
      <form action="listform">
      <p>
        <label htmlFor="Departmentlists">Select the department</label>
        <Select
  id="Departmentlists"
  onChange={handleDepartmentChange}
  value={selectedDepartment}
  style={{ width: 200, marginBottom: 16, marginLeft: "20px" }}
>

          <Option value="" disabled>Select your choice</Option>
          <Option value="HR">HR</Option>
          <Option value="Admin">Admin</Option>
          <Option value="Management">Management</Option>
          <Option value="Sales">Sales</Option>
          <Option value="IT">IT</Option>
          <Option value="Food Management">Food Management</Option>
          <Option value="Travel Management">Travel Management</Option>
         <Option value="Security Management">Security Management</Option>

        </Select>
        </p>
        <p>
          <label htmlFor="">Select your section</label>
        <Select
          id="Folderlists"
          onChange={handleFolderChange}
          value={selectedFolder}
          style={{ width: 200, marginBottom: 16, marginLeft: "42px" }}
        >
          <Option value="" disabled>Select your choice</Option>
          {folderOptions().map((folderOption: string, index: number) => (
            <Option key={index} value={folderOption}>
              {folderOption}
            </Option>
          ))}
        </Select>
        </p>
        <Upload
  fileList={fileList}
  beforeUpload={() => false}
  onChange={({ file, fileList: newFileList }) => setFileList(newFileList)}
  onRemove={handleRemove}
>
  <Button icon={<UploadOutlined rev={undefined} />} style={{ marginLeft: 1 }}>
    Select File
  </Button>
</Upload>

        <Button type="primary" onClick={() => handleUpload(fileList[0])} style={{ marginLeft: 1 }}>
          Upload
        </Button>
      </form>
      </div>
    </div>
  );
}

