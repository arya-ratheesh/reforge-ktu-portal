
import { useState } from 'react'
import { LockKeyhole, UserRound, Eye, EyeOff } from 'lucide-react'
import './App.css'
import Home from './Home'
import Exams from './Exams'
import Student from './Student'
export default function App() {
const [showPassword, setShowPassword] = useState(false)
const [isLoggedIn, setIsLoggedIn] = useState(false)
const [currentPage, setCurrentPage] = useState('home')


if (isLoggedIn) {
  if (currentPage === 'exams') {
    return <Exams onBack={() => setCurrentPage('home')} />
  }

  if (currentPage === 'student') {
    return <Student onBack={() => setCurrentPage('home')} />
  }

  return (
    <Home
      onOpenExams={() => setCurrentPage('exams')}
      onOpenStudent={() => setCurrentPage('student')}
    />
  )
}
  return (
    <main className="login-page">
      <div className="login-decoration decoration-one" />
      <div className="login-decoration decoration-two" />

      <section className="login-card">
        <div className="university-logo">
          <img
            src="/ktu-logo.png"
            alt="KTU Logo"
            className="ktu-logo"
          />

          <p className="logo-title">KTU</p>

          <p className="university-name">
            APJ ABDUL KALAM TECHNOLOGICAL UNIVERSITY
          </p>
        </div>

        <div className="welcome-text">
          <span className="welcome-tag">STUDENT PORTAL</span>
          <h1>Welcome back</h1>
          <p>Sign in to access your academic world.</p>
        </div>

        <form
          onSubmit={(event) => {
  event.preventDefault()
  setIsLoggedIn(true)
}}
        >
          <label htmlFor="student-id">Student ID / Email</label>

          <div className="input-wrapper">
            <UserRound size={19} />

            <input
              id="student-id"
              type="text"
              placeholder="Enter your student ID"
              required
            />
          </div>

          <label htmlFor="password">Password</label>

          <div className="input-wrapper">
            <LockKeyhole size={19} />

            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              required
            />

            <button
              className="password-toggle"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={
                showPassword ? 'Hide password' : 'Show password'
              }
            >
              {showPassword ? (
                <EyeOff size={19} />
              ) : (
                <Eye size={19} />
              )}
            </button>
          </div>

          <div className="login-options">
            <label className="remember-option">
              <input type="checkbox" />
              Remember me
            </label>

            <button
              className="text-button"
              type="button"
              onClick={() =>
                alert(
                  'Demo portal: password recovery is not connected yet.'
                )
              }
            >
              Forgot password?
            </button>
          </div>

          <button className="login-button" type="submit">
            Sign In <span>→</span>
          </button>
        </form>

        <div className="login-footer">
          <span>LEARN</span>
          <span className="footer-dot">•</span>
          <span>INNOVATE</span>
          <span className="footer-dot">•</span>
          <span>ACHIEVE</span>
        </div>
      </section>

      <footer className="page-footer">
        APJ Abdul Kalam Technological University
        <span> • </span>
        Student Portal Concept
      </footer>
    </main>
  )
}