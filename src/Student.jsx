
import {
  ArrowLeft,
  UserRound,
  Wallet,
  FileCheck,
  GraduationCap,
  CalendarDays,
  Droplets,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'
import './Student.css'

const student = {
  name: 'Student Name',
  id: 'KTU2026XXXX',
  course: 'B.Tech Electronics & Communication Engineering',
  semester: 'Semester 3',
  college: 'Your College Name',
  bloodGroup: 'Not provided',
  dateOfBirth: 'DD/MM/YYYY',
  gender: 'Not provided',
  email: 'student@example.com',
  phone: 'Not provided',
  address: 'Not provided',
}

export default function Student({ onBack }) {
  return (
    <div className="student-layout">
      <aside className="student-sidebar">
        <button
          className="student-back"
          onClick={onBack}
          type="button"
        >
          <ArrowLeft size={18} />
          Back to portal
        </button>

        <div className="student-brand">
          <GraduationCap size={28} />
          <div>
            <h2>KTU</h2>
            <p>STUDENT PORTAL</p>
          </div>
        </div>

        <p className="student-menu-label">STUDENT MENU</p>

        <a className="student-menu-item active" href="#profile">
          <UserRound size={19} /> Profile
        </a>
        <a className="student-menu-item" href="#fees">
          <Wallet size={19} /> Fee Details
        </a>
        <a className="student-menu-item" href="#certificates">
          <FileCheck size={19} /> Certificates
        </a>
        <a className="student-menu-item" href="#academic">
          <GraduationCap size={19} /> Academic Details
        </a>
      </aside>

      <main className="student-main" id="profile">
        <header className="student-header">
          <div>
            <span>STUDENT PORTAL / STUDENT</span>
            <h1>Student Profile</h1>
            <p>View your personal and academic information.</p>
          </div>
          <div className="student-header-icon">
            <UserRound size={25} />
          </div>
        </header>

        <section className="student-profile-card">
          <div className="student-photo">
            <UserRound size={55} />
          </div>
          <div className="student-basic-info">
            <span className="student-active-badge">Active Student</span>
            <h2>{student.name}</h2>
            <p>{student.id}</p>
            <p>{student.course}</p>
            <span className="student-semester">
              {student.semester}
            </span>
          </div>
        </section>

        <section className="student-info-card">
          <h2><UserRound size={20} /> Personal Details</h2>
          <div className="student-details-grid">
            <div><span>Full Name</span><strong>{student.name}</strong></div>
            <div><span>Student ID</span><strong>{student.id}</strong></div>
            <div><span>Date of Birth</span><strong>{student.dateOfBirth}</strong></div>
            <div><span>Gender</span><strong>{student.gender}</strong></div>
            <div><span>Blood Group</span><strong><Droplets size={15} /> {student.bloodGroup}</strong></div>
            <div><span>Email</span><strong><Mail size={15} /> {student.email}</strong></div>
            <div><span>Phone</span><strong><Phone size={15} /> {student.phone}</strong></div>
            <div><span>Address</span><strong><MapPin size={15} /> {student.address}</strong></div>
          </div>
        </section>

        <section className="student-info-card" id="academic">
          <h2><GraduationCap size={20} /> Academic Details</h2>
          <div className="student-details-grid">
            <div><span>Programme</span><strong>B.Tech</strong></div>
            <div><span>Branch</span><strong>Electronics & Communication</strong></div>
            <div><span>Semester</span><strong>{student.semester}</strong></div>
            <div><span>College</span><strong>{student.college}</strong></div>
          </div>
        </section>

        <section className="student-info-card" id="fees">
          <h2><Wallet size={20} /> Fee Details</h2>
          <div className="student-empty-state">
            <Wallet size={28} />
            <strong>No fee records available</strong>
            <p>Sample portal: fee information has not been connected.</p>
          </div>
        </section>

        <section className="student-info-card" id="certificates">
          <h2><FileCheck size={20} /> Certificates</h2>
          <div className="student-empty-state">
            <FileCheck size={28} />
            <strong>No certificates available</strong>
            <p>Documents will appear here when records are added.</p>
          </div>
        </section>

        <footer className="student-footer">
          APJ Abdul Kalam Technological University · Student Portal Concept
        </footer>
      </main>
    </div>
  )
}