import React from 'react';

const FormDisplay = ({ form }) => {
    const renderFormFields = (data, level = 0) => {
      return Object.keys(data).map(key => {
        if (data[key] !== undefined) {
          if (typeof data[key] === 'object' && !Array.isArray(data[key]) && data[key] !== null && !(data[key] instanceof Date)) {
            return (
              <tr key={key} style={{ borderBottom: '1px solid black' }}>
                <td style={{ paddingLeft: `${level * 20}px` }}>
                  <strong>{key}</strong>
                </td>
                <td>
                  <table>
                    <tbody>
                      {renderFormFields(data[key], level + 1)}
                    </tbody>
                  </table>
                </td>
              </tr>
            );
          }
          return (
            <tr key={key} style={{ borderBottom: '1px solid black' }}>
              <td>
                <strong>{key}</strong>
              </td>
              <td>{data[key] instanceof Date ? data[key].toLocaleString() : data[key].toString()}</td>
            </tr>
          );
        }
        return null;
      });
    };
  
    return (
      <div>
        <h2 className='font-medium'>Form Details</h2>
        <hr className='my-4 bg-gray-500 text-gray-500 h-[1.5px]' />
        <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            {renderFormFields(form)}
          </tbody>
        </table>
      </div>
    );
  };
  
const form = {
  residentID: {
    businessName: 'Business Name',
    location: "Cacarong Matanda",
    natureOfBusiness: "Sari-sari Store",
    plateNumber: "ABC1234",
    new: true,
  },
  formType: "BC",
  formName: "Barangay Clearance",
  OTCNo: "OTC12345",
  ORNo: "OR12345",
  dateIssued: new Date("2024-12-31"),
  placeIssued: "Barangay Hall",
  purpose: "Barangay Clearance for job application",
  business: undefined,
  employment: undefined,
  indigency: {
    businessName: 'Business Name',
    location: "Cacarong Matanda",
    natureOfBusiness: "Sari-sari Store",
    plateNumber: "ABC1234",
    new: true,
  },
  building: {
    businessName: 'Business Name',
    location: "Cacarong Matanda",
    natureOfBusiness: "Sari-sari Store",
    plateNumber: "ABC1234",
    new: true,
  },
  electrical: undefined,
  fencing: undefined,
  TODA: undefined,
  reconstruction: undefined,
  PAO: undefined,
  zoning: undefined,
  lipatBahay: undefined,
  lateBC: undefined,
  coHabitation: undefined,
  calamity: undefined,
  formNumber: "FORM12345",
  expirationDate: new Date("2024-12-31"),
};

const ResidentFormModal = ({onClose}) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div className="inline-block align-bottom pb-4 bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <FormDisplay form={form} />
                        <div className='py-4 w-full flex items-center justify-end'>
                            <button onClick={onClose} className='bg-red-500 hover:bg-red-600 transition-all text-white p-2 w-1/6 rounded-md'>close</button>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  );
};

export default ResidentFormModal;
