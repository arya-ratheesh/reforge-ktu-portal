
import { useState } from 'react'
import {
  ArrowLeft,
  BookOpen,
  Award,
  CalendarDays,
  FileText,
  Clock,
  Info,
} from 'lucide-react'
import './Exams.css'

const examCategories = [
  { id: 'minor', label: 'Minor', icon: BookOpen },
  { id: 'honours', label: 'Honours', icon: Award },
  { id: 'regular', label: 'Regular Examinations', icon: CalendarDays },
  { id: 'supplementary', label: 'Supplementary', icon: FileText },
]

export default function Exams({ onBack }) {
  const [selectedExam, setSelectedExam] = useState('minor')

  const selectedCategory = examCategories.find(
    (exam) => exam.id === selectedExam
  )

  return (
    <div className="exam-layout">
      <aside className="exam-sidebar">
<button
  type="button"
  className="exam-back-link"
  onClick={onBack}
>
  <ArrowLeft size={18} />
  Back to portal
</button>
        <div className="exam-brand">
          <div className="exam-brand-icon">
            <CalendarDays size={24} />
          </div>
          <div>
            <h2>Examinations</h2>
            <p>KTU Student Portal</p>
          </div>
        </div>

        <p className="exam-menu-label">EXAM CATEGORIES</p>

        <nav className="exam-category-list">
          {examCategories.map((exam) => {
            const Icon = exam.icon

            return (
              <button
                key={exam.id}
                type="button"
                className={`exam-category ${
                  selectedExam === exam.id ? 'selected' : ''
                }`}
                onClick={() => setSelectedExam(exam.id)}
              >
                <Icon size={19} />
                <span>{exam.label}</span>
              </button>
            )
          })}
        </nav>

        <div className="exam-sidebar-note">
          <Info size={19} />
          <p>Check official university notifications for confirmed dates.</p>
        </div>
      </aside>

      <main className="exam-content">
        <header className="exam-page-header">
          <div>
            <span className="exam-breadcrumb">
              STUDENT PORTAL / EXAMINATIONS
            </span>
            <h1>{selectedCategory.label}</h1>
            <p>Registration and examination information</p>
          </div>
          <div className="exam-header-icon">
            <CalendarDays size={27} />
          </div>
        </header>

        <section className="registration-panel">
          <div className="registration-panel-top">
            <div className="registration-icon">
              <Clock size={25} />
            </div>
            <span className="registration-status">
              No active registration
            </span>
          </div>

          <h2>Registration is not available right now</h2>

          <p className="registration-description">
            There are no registration details to display for{' '}
            {selectedCategory.label} at the moment. Check back later
            for updates.
          </p>

          <div className="registration-divider" />

          <div className="registration-info">
            <Info size={20} />
            <p>
              This is a demonstration portal. The registration status
              shown here is sample content and does not represent
              live KTU information.
            </p>
          </div>
        </section>

        <section className="exam-help-panel">
          <div className="exam-help-icon">
            <FileText size={22} />
          </div>
          <div>
            <h3>Before you register</h3>
            <p>
              Refer to official university notifications for
              eligibility, deadlines, and examination instructions.
            </p>
          </div>
        </section>

        <footer className="exam-page-footer">
          APJ Abdul Kalam Technological University
          <span> · </span>
          Student Portal Concept
        </footer>
      </main>
    </div>
  )
}