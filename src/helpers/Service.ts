//Without conditional statement
// import "@pnp/sp/webs";
// import "@pnp/sp/folders";
// import { addSP } from "../helpers/Pnpconfig";

// export async function FileUpload(file: File, departmentSelection: string, folderSelection: string) {
//   try {
//     const sp = addSP();

//     // Specify the document library name (Hierarchy) in the path
//     const documentLibraryName = "Hierarchy";
//     const folderPath = `${documentLibraryName}/${departmentSelection}/${folderSelection}`;

//     try {
//       // Attempt to get the folder to check its existence
//       await sp.web.getFolderByServerRelativePath(folderPath).getItem();
//     } catch (error) {
//       // If the folder doesn't exist, create it
//       await sp.web.folders.addUsingPath(folderPath);
//     }

//     // Upload the file to the specified folder
//     const result = await sp.web.getFolderByServerRelativePath(folderPath).files.addUsingPath(file.name, file, { Overwrite: true });
//     console.log(`Result of file upload: ${JSON.stringify(result)}`);
//   } catch (error) {
//     console.error("Error during file upload:", error);
//   }
// }

//With conditional statement
import "@pnp/sp/webs";
import "@pnp/sp/folders";
import { addSP } from "../helpers/Pnpconfig";

export async function FileUpload(file: File, departmentSelection: string, folderSelection: string) {
  try {
    const sp = addSP();

    // Specify the document library name (Hierarchy) in the path
    const documentLibraryName = "Hierarchy";
    const folderPath = `${documentLibraryName}/${departmentSelection}/${folderSelection}`;

    // Attempt to get the folder to check its existence
    let folderExists = true;

    try {
      await sp.web.getFolderByServerRelativePath(folderPath).getItem();
    } catch (error) {
      folderExists = false;
    }

    // If the folder doesn't exist, create it
    if (!folderExists) {
      await sp.web.folders.addUsingPath(folderPath);
    }

    // Upload the file to the specified folder
    const result = await sp.web.getFolderByServerRelativePath(folderPath).files.addUsingPath(file.name, file, { Overwrite: true });
    console.log(`Result of file upload: ${JSON.stringify(result)}`);
  } catch (error) {
    console.error("Error during file upload:", error);
  }
}


