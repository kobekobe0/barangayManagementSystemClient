import { useState, useEffect } from 'react';
import * as FileSaver from 'file-saver';
import * as JSZipUtils from 'jszip-utils';
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import axios from 'axios';
import API_URL from '../constants/api';


const Temp = () => {
    const [data, setData] = useState({ 
        businessName: 'Cosmetix',
        location: '114 Castro, Cacarong Matanda, Pandi, Bulacan',
        owner: 'Kobe Brian Santos',
        nature: 'ECommerce',
        ownerAddress: "114 Castro, Cacarong Matanda, Pandi, Bulacan OWNER",
        dateOfBirth: new Date('1999-12-31').toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        placeOfBirth: 'QC, Manila',
        dateIssued: new Date('2024-01-31').toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
        placeIssued: 'Brgy Hall, Cacarong Matanda, Pandi, Bulacan',
        CTCNo: 'CTC12345',
        ORNo: 'OR12345',
        year: new Date().getFullYear(),
        new: "Renewal",
     });
    const [file, setFile] = useState(null);


    const generateDocument = async () => {
        try {
          const fileContent = await loadFile();
          const zip = new PizZip(fileContent);
          const doc = new Docxtemplater(zip, { paragraphLoop: true, linebreaks: true });
      
          doc.render(data);
      
          const blob = doc.getZip().generate({
            type: 'blob',
            mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
          });
      
          FileSaver.saveAs(blob, 'generated_document.docx');
        } catch (error) {
          console.error(error);
        }
      };
      
      const loadFile = async () => {
        const response = await fetch(`${API_URL}business/template`);
        const fileContent = await response.arrayBuffer();
        return fileContent;
      };

    return (
    <div className="ml-64">
        <div>
            <button onClick={generateDocument}>Generate Document</button>
        </div>
    </div>
    )
}

export default Temp;