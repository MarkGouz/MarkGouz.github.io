function Introduction() {
  return (
    <div>
      {/*
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}> 
        <picture>
          <source srcSet="/Profile.webp" type="image/webp" />
          <source srcSet="/Profile-optimized.jpg" type="image/jpeg" />
          <img 
            src="/Profile-optimized.jpg" 
            alt="Profile" 
            style={{ 
              width: '200px', 
              height: 'auto',
              maxWidth: '100%',
              borderRadius: '8px'
            }} 
            className="image-bordered"
            loading="eager"
          />
        </picture>
      </div>
      */}
      <h2 style={{ textAlign:'left' , fontSize:'3rem'}}>Introduction</h2>
      <hr />
      <p style={{ textAlign:'left', fontSize:'2rem'}}>I am Mark Gouzoulis, a recent graduate from the University of Maryland with a Bachelor’s degree in Computer Science 
        and a minor in Statistics. During my time in the Gemstone Honors College, I collaborated with a team of undergraduates to research 
        quantum systems and explore applications of machine learning in that field. My academic and research experiences have fueled my passion 
        for machine learning and software development. I primarily program in Python and C++, and I was recently admitted to Georgia Tech’s 
        OMSCS program, where I look forward to deepening my knowledge and advancing my skills.</p>
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