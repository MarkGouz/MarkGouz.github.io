function Introduction() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}> <img src="/src/assets/Profile.jpg" alt="Profile" style={{ width: '200px', height: 'auto'}} className="image-bordered"/> </div>
      <h2 style={{ textAlign:'left' , fontSize:'3rem'}}>Introduction</h2>
      <hr />
      <p style={{ textAlign:'left', fontSize:'2rem'}}>I am Mark Gouzoulis. I graduated from the University of Maryland with a Bachelor's degree in Computer Science and a minor in Statistics. 
        I was in the Gemstones honor college where I worked with a team of undergraduates to research Quantum Systems and the applications of machine learning in that field. 
        I love working machine learning and learning more about software development.	I mainly choose to code in Python and C++.</p>
        <h3>Contact</h3>
        <div style={{ display:'flex', gap:'1rem', justifyContent:'center' }}>
        <a href="https://github.com/MarkGouz" target="_blank" rel="noopener noreferrer">
          <img src="/github-mark.svg"
          alt="Github"
          style={{ width: 32, height: 32 }}
          />
        </a>
        <a href="https://www.linkedin.com/in/mark-gouzoulis/" target="_blank" rel="noopener noreferrer">
          <img src="/LI-In-Bug.png"
          alt="Github"
          style={{ width: 32, height: 32 }}
          />
        </a>
        </div>
    </div>
  );
}
export default Introduction;