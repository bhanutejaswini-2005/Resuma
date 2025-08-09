import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';

const Resume = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const resumeText = location.state?.resumeText || 'No resume data found.';

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    const lines = doc.splitTextToSize(resumeText, 180);
    doc.text(lines, 10, 10);
    doc.save('resume.pdf');
  };

  return (
    <div style={{ maxWidth: 800, margin: 'auto', padding: 20 }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: 20 }}>
        Back
      </button>

      <h1>Generated Resume</h1>

      <pre
        style={{
          background: '#f0f0f0',
          padding: 20,
          whiteSpace: 'pre-wrap',
          borderRadius: 8,
          minHeight: 300,
        }}
      >
        {resumeText}
      </pre>

      <button
        onClick={handleDownloadPDF}
        style={{
          background: '#6200ee',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: 6,
          cursor: 'pointer',
          marginTop: 20,
        }}
      >
        Download PDF
      </button>
    </div>
  );
};

export default Resume;
