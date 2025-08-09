import React from 'react'
import FormNav from './FormNav'
import {useState} from 'react'

import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Form = () => {
const navigate = useNavigate(); 

  const [personalDetails,setPersonalDetails] = useState({
    fullname:'',
    email:'',
    phone:'',
    url:''
  });

  const [educationalDetails,setEducationalDetails]=useState([{
    degree:'',
    institute:'',
    passingYear:''
  }]);

  const [skills,setSkills]=useState([]);

const[internship,setInternship]=useState([{
  iname:'',
  company:'',
  sduration:'',
  eduration:'',
  description:''
}]);

const[certification , setCertification]=useState([{
  cname:'',
  cplatform:'',
  cduration:''
}]);

const handlePersonalChanges=(e)=>{
  const {name, value} = e.target;
  setPersonalDetails((pervDetails) => ({
    ...pervDetails,
    [name]:value,
  }));
};

const handleEducationDetails=(index,e)=>{
  const {name, value} = e.target;
  const updated=[...educationalDetails];
  updated[index][name]=value;
  setEducationalDetails(updated);
};

const handleInternshipChanges=(index,e)=>{
const {name , value} = e.target;
const updated = [...internship];
updated[index][name]=value;
setInternship(updated);
};

const handleCertificateChanges=(index,e)=>{
const {name , value} = e.target;
const updated=[...certification];
updated[index][name]=value;
setCertification(updated);
};


const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = {
    personalDetails,
    educationalDetails,
    internship,
    certification,
    skills,
  };

  try {
  const response = await axios.post('http://localhost:5000/generate-resume', formData);
  const resumeText = response.data.resume;

  // Navigate to Resume page and send resumeText
  navigate('/resume', { state: { resumeText } });
} catch (error) {
  console.error("Error generating resume:", error);
}
};


  return (
    <>
  <FormNav />
  <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
    <div className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-md">
      <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center">Resume Form</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Details */}
        <div>
          <h2 className="text-xl font-semibold text-purple-600 mb-4">Personal Details</h2>
          <div className="space-y-4">
            <input className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Full Name" name="fullname" type="text" value={personalDetails.fullname} onChange={handlePersonalChanges} required />
            <input className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Email" name="email" type="email" value={personalDetails.email} onChange={handlePersonalChanges} required />
            <input className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Phone Number" name="phone" type="tel" value={personalDetails.phone} onChange={handlePersonalChanges} required />
            <input className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="LinkedIn / GitHub" name="url" type="url" value={personalDetails.url} onChange={handlePersonalChanges} required />
          </div>
        </div>

        {/* Educational Details */}
        <div>
          <h2 className="text-xl font-semibold text-purple-600 mb-4">Educational Details</h2>
          {educationalDetails.map((item, index) => (
            <div key={index} className="space-y-4 mb-4">
              <input className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Degree" name="degree" type="text" value={item.degree} onChange={(e) => handleEducationDetails(index, e)} required />
              <input className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Institution" name="institute" type="text" value={item.institute} onChange={(e) => handleEducationDetails(index, e)} required />
              <input className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Year of Passing" name="passingYear" type="number" value={item.passingYear} onChange={(e) => handleEducationDetails(index, e)} required />
            </div>
          ))}
          <button type="button" className="text-purple-600 hover:text-purple-800 text-sm mt-2" onClick={() => setEducationalDetails([...educationalDetails, { degree: '', institute: '', passingYear: '' }])}>+ Add More</button>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-xl font-semibold text-purple-600 mb-4">Skills</h2>
          <input className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="HTML, CSS, JS, React..." name="skills" type="text" value={skills} onChange={(e) => setSkills(e.target.value)} required />
        </div>

        {/* Internships */}
        <div>
          <h2 className="text-xl font-semibold text-purple-600 mb-4">Internships</h2>
          {internship.map((item, index) => (
            <div key={index} className="space-y-4 mb-4">
              <input className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Title" name="iname" type="text" value={item.iname} onChange={(e) => handleInternshipChanges(index, e)} required />
              <input className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Company" name="company" type="text" value={item.company} onChange={(e) => handleInternshipChanges(index, e)} required />
              <input className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Start Date" name="sduration" type="date" value={item.sduration} onChange={(e) => handleInternshipChanges(index, e)} required />
              <input className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="End Date" name="eduration" type="date" value={item.eduration} onChange={(e) => handleInternshipChanges(index, e)} required />
              <input className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Description" name="description" type="text" value={item.description} onChange={(e) => handleInternshipChanges(index, e)} required />
            </div>
          ))}
          <button type="button" className="text-purple-600 hover:text-purple-800 text-sm mt-2" onClick={() => setInternship([...internship, { iname: '', company: '', sduration: '', eduration: '', description: '' }])}>+ Add More</button>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-xl font-semibold text-purple-600 mb-4">Certifications</h2>
          {certification.map((item, index) => (
            <div key={index} className="space-y-4 mb-4">
              <input className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Certificate Name" name="cname" type="text" value={item.cname} onChange={(e) => handleCertificateChanges(index, e)} required />
              <input className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Platform / Organization" name="cplatform" type="text" value={item.cplatform} onChange={(e) => handleCertificateChanges(index, e)} required />
              <input className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Duration (e.g., Jan 2024 - Mar 2024)" name="cduration" type="text" value={item.cduration} onChange={(e) => handleCertificateChanges(index, e)} required />
            </div>
          ))}
          <button type="button" className="text-purple-600 hover:text-purple-800 text-sm mt-2" onClick={() => setCertification([...certification, { cname: '', cplatform: '', cduration: '' }])}>+ Add More</button>
        </div>

        {/* Suggestions */}
        <div>
          <h2 className="text-xl font-semibold text-purple-600 mb-4">Suggestions</h2>
          <textarea className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="(Optional)" rows="4"></textarea>
        </div>

        {/* Submit */}
        <div className="flex justify-center pt-4">
          <button type="submit" className="bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700 transition">
            Prepare Resume
          </button>
        </div>
      </form>
    </div>
  </div>
</>
    
  )
}

export default Form