// src/pages/Introduction.jsx
const Resume: React.FC = () => {
  return (
    <div style={{
      paddingTop: '60px',      // space for navbar
      width: '100vw',
      height: 'calc(100vh - 60px)',  // fill remaining viewport height
      boxSizing: 'border-box',  // include padding in height calc
    }}>
      <iframe
        src="/Mark_Gouzoulis_Resume_v8.pdf" // put your PDF in the public folder
        title="Resume"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      />
    </div>
  );
}
export default Resume;
