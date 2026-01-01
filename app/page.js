export default function Home() {
    return (
      <main className="hero">
        <div className="logo">Stagility.ai</div>
        
        <span className="tagline">🚀 Coming Soon — Built for Manufacturing HR</span>
        
        <h1 className="headline">
          Where Workforce <span className="gradient">Stability</span><br />
          Meets Organizational <span className="gradient">Agility</span>
        </h1>
        
        <p className="subheadline">
          Transform workforce data into business impact. Predict attrition, 
          measure leadership effectiveness, and calculate the true cost of 
          every people decision.
        </p>
        
        <form className="email-form" action="https://formspree.io/f/your-form-id" method="POST">
          <input 
            type="email" 
            name="email"
            className="email-input" 
            placeholder="Enter your work email" 
            required 
          />
          <button type="submit" className="submit-btn">Join Waitlist</button>
        </form>
        
        <div className="features">
          <div className="feature">
            <div className="feature-icon">📊</div>
            <h3>Stagility Index</h3>
            <p>Measure workforce stability and organizational agility in one unified score.</p>
          </div>
          
          <div className="feature">
            <div className="feature-icon">👥</div>
            <h3>Leadership Effectiveness</h3>
            <p>Identify which leaders drive retention and which need support.</p>
          </div>
          
          <div className="feature">
            <div className="feature-icon">💰</div>
            <h3>Cost of Poor Hiring</h3>
            <p>Calculate the real rupee impact of every hiring decision.</p>
          </div>
        </div>
        
        <p className="footer-note">
          Built by HR leaders, for HR leaders. Launching Q2 2025.
        </p>
      </main>
    )
  }