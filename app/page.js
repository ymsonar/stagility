'use client'

import { useState } from 'react'
import { supabase } from './lib/supabase'
export default function Home() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email, name, company }])

      if (error) throw error

      setStatus('success')
      setEmail('')
      setName('')
      setCompany('')
    } catch (error) {
      setStatus('error')
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }
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
        
        <form className="email-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  className="email-input"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="text"
                  name="name"
                  className="email-input"
                  placeholder="Your name (optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  name="company"
                  className="email-input"
                  placeholder="Company name (optional)"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? 'Joining...' : 'Join Waitlist'}
                </button>

                {status === 'success' && (
                  <p style={{color: '#10b981', marginTop: '1rem'}}>
                    ✓ Thanks! You're on the waitlist.
                  </p>
                )}
                {status === 'error' && (
                  <p style={{color: '#ef4444', marginTop: '1rem'}}>
                    ✗ Something went wrong. Please try again.
                  </p>
                )}
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
          Built by HR leaders, for HR leaders. Launching Q1 2026.
        </p>
      </main>
    )
  }