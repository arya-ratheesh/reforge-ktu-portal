
import {
  GraduationCap,
  LayoutDashboard,
  UserRound,
  CalendarDays,
  FileText,
  Bell,
  BookOpen,
  ClipboardList,
  ArrowRight,
} from 'lucide-react'
import './Home.css'

export default function Home({ onOpenExams }) {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <GraduationCap size={30} />
          <div>
            <h2>KTU</h2>
            <span>STUDENT PORTAL</span>
          </div>
        </div>

        <p className="nav-heading">MENU</p>

        <nav className="sidebar-nav">
          <a href="#home" className="nav-link active">
            <LayoutDashboard size={19} />
            Dashboard
          </a>

          <a href="#student" className="nav-link">
            <UserRound size={19} />
            Student
          </a>

          <button
            type="button"
            className="nav-link"
            onClick={onOpenExams}
          >
            <CalendarDays size={19} />
            Exams
          </button>

          <a href="#results" className="nav-link">
            <FileText size={19} />
            Results
          </a>
        </nav>

        <div className="sidebar-bottom">
          <BookOpen size={20} />
          <div>
            <strong>Keep learning.</strong>
            <p>Your journey matters.</p>
          </div>
        </div>
      </aside>

      <main className="dashboard-main" id="home">
        <header className="dashboard-header">
          <div>
            <span className="breadcrumb">
              STUDENT PORTAL / DASHBOARD
            </span>
            <h1>Dashboard</h1>
          </div>

          <div className="header-actions">
            <button
              className="icon-button"
              aria-label="Notifications"
              type="button"
            >
              <Bell size={20} />
            </button>

            <div className="profile-avatar">S</div>
          </div>
        </header>

        <section className="dashboard-welcome">
          <div>
            <span className="welcome-tag">
              YOUR ACADEMIC SPACE
            </span>
            <h2>Welcome to your dashboard 👋</h2>
            <p>
              Everything you need for your academic journey,
              all in one place.
            </p>
          </div>

          <GraduationCap
            className="welcome-icon"
            size={100}
          />
        </section>

        <section className="quick-section">
          <div className="section-heading">
            <div>
              <h2>Quick access</h2>
              <p>Find what you need, faster.</p>
            </div>
          </div>

          <div className="quick-grid">
            <a href="#student" className="quick-card">
              <div className="quick-icon student-icon">
                <UserRound size={24} />
              </div>

              <h3>Student</h3>
              <p>
                Academic profile and student information.
              </p>

              <span className="card-arrow">
                <ArrowRight size={18} />
              </span>
            </a>

            <button
              type="button"
              className="quick-card"
              onClick={onOpenExams}
            >
              <div className="quick-icon exam-icon">
                <CalendarDays size={24} />
              </div>

              <h3>Examinations</h3>
              <p>
                Exam schedules and important updates.
              </p>

              <span className="card-arrow">
                <ArrowRight size={18} />
              </span>
            </button>

            <a href="#results" className="quick-card">
              <div className="quick-icon result-icon">
                <ClipboardList size={24} />
              </div>

              <h3>Results</h3>
              <p>
                Check semester results and grades.
              </p>

              <span className="card-arrow">
                <ArrowRight size={18} />
              </span>
            </a>
          </div>
        </section>

        <section className="lower-grid">
          <div
            className="content-panel"
            id="announcements"
          >
            <div className="panel-heading">
              <div className="panel-title">
                <Bell size={20} />
                <h2>Important announcements</h2>
              </div>

              <span className="demo-label">SAMPLE</span>
            </div>

            <div className="announcement-item">
              <span className="announcement-dot" />
              <div>
                <h3>Examination updates</h3>
                <p>
                  Check the official portal for examination
                  notifications.
                </p>
              </div>
            </div>

            <div className="announcement-item">
              <span className="announcement-dot teal-dot" />
              <div>
                <h3>Academic resources</h3>
                <p>
                  Keep your syllabus and study materials
                  accessible.
                </p>
              </div>
            </div>
          </div>

          <div className="content-panel resources-panel">
            <div className="panel-heading">
              <div className="panel-title">
                <BookOpen size={20} />
                <h2>Learning resources</h2>
              </div>
            </div>

            <a
              href="#syllabus"
              className="resource-link"
            >
              <div>
                <strong>University syllabus</strong>
                <p>Course and semester subjects</p>
              </div>
              <ArrowRight size={18} />
            </a>

            <a
              href="#handbook"
              className="resource-link"
            >
              <div>
                <strong>Activity handbook</strong>
                <p>Student activity information</p>
              </div>
              <ArrowRight size={18} />
            </a>
          </div>
        </section>

        <footer className="dashboard-footer">
          APJ Abdul Kalam Technological University
          <span> · </span>
          Student Portal Concept
        </footer>
      </main>
    </div>
  )
}