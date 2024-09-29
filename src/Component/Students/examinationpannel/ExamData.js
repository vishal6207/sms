// src/components/ExamData.js
const ExamData = () => {
  return {
    name: 'Aman yadav',
    motherName: 'Jane Doe',
    fatherName: 'Richard Doe',
    address: '123 Main Street, Springfield',
    tests: [
      {
        year: 2024,
        category: 'Annual Exams',
        totalMarks: 200,
        obtainedMarks: 160,
        subjects: [
          { name: 'Math Exam', totalMarks: 100, obtainedMarks: 80, grade: 'A', status: 'Pass', date: '2024-05-15' },
          { name: 'Science Exam', totalMarks: 100, obtainedMarks: 80, grade: 'B+', status: 'Pass', date: '2024-05-20' },
          { name: 'Science Exam', totalMarks: 100, obtainedMarks: 80, grade: 'B+', status: 'Pass', date: '2024-05-20' },
          { name: 'Science Exam', totalMarks: 100, obtainedMarks: 80, grade: 'B+', status: 'Pass', date: '2024-05-20' },
        ],
        className: 'annual-exams'
      },
      {
        year: 2024,
        category: 'Midterm Exams',
        totalMarks: 200,
        obtainedMarks: 140,
        subjects: [
          { name: 'English Midterm', totalMarks: 100, obtainedMarks: 70, grade: 'A-', status: 'Pass', date: '2024-03-10' },
          { name: 'History Midterm', totalMarks: 100, obtainedMarks: 70, grade: 'B', status: 'Pass', date: '2024-03-15' },
        ],
        className: 'midterm-exams'
      },
      {
        year: 2024,
        category: 'Quarterly Exams',
        totalMarks: 200,
        obtainedMarks: 130,
        subjects: [
          { name: 'Biology Quarterly', totalMarks: 100, obtainedMarks: 65, grade: 'B+', status: 'Pass', date: '2024-01-12' },
          { name: 'Geography Quarterly', totalMarks: 100, obtainedMarks: 65, grade: 'B', status: 'Pass', date: '2024-01-18' },
        ],
        className: 'quarterly-exams'
      },
      // Previous Years
      {
        year: 2023,
        category: 'Annual Exams',
        totalMarks: 200,
        obtainedMarks: 150,
        subjects: [
          { name: 'Math Exam', totalMarks: 100, obtainedMarks: 75, grade: 'B+', status: 'Pass', date: '2023-05-15' },
          { name: 'Science Exam', totalMarks: 100, obtainedMarks: 75, grade: 'B', status: 'Pass', date: '2023-05-20' },
        ],
        className: 'annual-exams'
      },
      {
        year: 2023,
        category: 'Quarterly Exams',
        totalMarks: 200,
        obtainedMarks: 140,
        subjects: [
          { name: 'Physics Quarterly', totalMarks: 100, obtainedMarks: 70, grade: 'A-', status: 'Pass', date: '2023-01-10' },
          { name: 'Chemistry Quarterly', totalMarks: 100, obtainedMarks: 70, grade: 'B+', status: 'Pass', date: '2023-01-20' },
        ],
        className: 'quarterly-exams'
      },
      {
        year: 2022,
        category: 'Annual Exams',
        totalMarks: 200,
        obtainedMarks: 140,
        subjects: [
          { name: 'Math Exam', totalMarks: 100, obtainedMarks: 70, grade: 'B', status: 'Pass', date: '2022-05-15' },
          { name: 'Science Exam', totalMarks: 100, obtainedMarks: 70, grade: 'B-', status: 'Pass', date: '2022-05-20' },
        ],
        className: 'annual-exams'
      },
      {
        year: 2022,
        category: 'Quarterly Exams',
        totalMarks: 200,
        obtainedMarks: 120,
        subjects: [
          { name: 'Biology Quarterly', totalMarks: 100, obtainedMarks: 60, grade: 'C+', status: 'Pass', date: '2022-01-15' },
          { name: 'Geography Quarterly', totalMarks: 100, obtainedMarks: 60, grade: 'C', status: 'Pass', date: '2022-01-20' },
        ],
        className: 'quarterly-exams'
      },
      {
        year: 2021,
        category: 'Annual Exams',
        totalMarks: 200,
        obtainedMarks: 130,
        subjects: [
          { name: 'Math Exam', totalMarks: 100, obtainedMarks: 65, grade: 'C+', status: 'Pass', date: '2021-05-15' },
          { name: 'Science Exam', totalMarks: 100, obtainedMarks: 65, grade: 'C', status: 'Pass', date: '2021-05-20' },
        ],
        className: 'annual-exams'
      },
      {
        year: 2021,
        category: 'Quarterly Exams',
        totalMarks: 200,
        obtainedMarks: 110,
        subjects: [
          { name: 'Physics Quarterly', totalMarks: 100, obtainedMarks: 55, grade: 'C', status: 'Pass', date: '2021-01-10' },
          { name: 'Chemistry Quarterly', totalMarks: 100, obtainedMarks: 55, grade: 'D+', status: 'Pass', date: '2021-01-15' },
        ],
        className: 'quarterly-exams'
      },
      {
        year: 2020,
        category: 'Annual Exams',
        totalMarks: 200,
        obtainedMarks: 120,
        subjects: [
          { name: 'Math Exam', totalMarks: 100, obtainedMarks: 60, grade: 'D', status: 'Pass', date: '2020-05-15' },
          { name: 'Science Exam', totalMarks: 100, obtainedMarks: 60, grade: 'D+', status: 'Pass', date: '2020-05-20' },
        ],
        className: 'annual-exams'
      },
      {
        year: 2020,
        category: 'Quarterly Exams',
        totalMarks: 200,
        obtainedMarks: 100,
        subjects: [
          { name: 'Biology Quarterly', totalMarks: 100, obtainedMarks: 50, grade: 'D+', status: 'Pass', date: '2020-01-10' },
          { name: 'Geography Quarterly', totalMarks: 100, obtainedMarks: 50, grade: 'E', status: 'Pass', date: '2020-01-15' },
        ],
        className: 'quarterly-exams'
      },
      {
        year: 2025,
        category: 'Annual Exams',
        totalMarks: 200,
        obtainedMarks: 155,
        subjects: [
          { name: 'Math Exam', totalMarks: 100, obtainedMarks: 80, grade: 'A+', status: 'Pass', date: '2025-05-15' },
          { name: 'Science Exam', totalMarks: 100, obtainedMarks: 75, grade: 'A', status: 'Pass', date: '2025-05-20' },
        ],
        className: 'annual-exams'
      },
      {
        year: 2025,
        category: 'Quarterly Exams',
        totalMarks: 200,
        obtainedMarks: 140,
        subjects: [
          { name: 'Physics Quarterly', totalMarks: 100, obtainedMarks: 70, grade: 'A-', status: 'Pass', date: '2025-01-10' },
          { name: 'Chemistry Quarterly', totalMarks: 100, obtainedMarks: 70, grade: 'B+', status: 'Pass', date: '2025-01-20' },
        ],
        className: 'quarterly-exams'
      },
      {
        year: 2026,
        category: 'Annual Exams',
        totalMarks: 200,
        obtainedMarks: 165,
        subjects: [
          { name: 'Math Exam', totalMarks: 100, obtainedMarks: 85, grade: 'A+', status: 'Pass', date: '2026-05-15' },
          { name: 'Science Exam', totalMarks: 100, obtainedMarks: 80, grade: 'A+', status: 'Pass', date: '2026-05-20' },
        ],
        className: 'annual-exams'
      },
      {
        year: 2026,
        category: 'Quarterly Exams',
        totalMarks: 200,
        obtainedMarks: 150,
        subjects: [
          { name: 'Biology Quarterly', totalMarks: 100, obtainedMarks: 75, grade: 'A-', status: 'Pass', date: '2026-01-12' },
          { name: 'Geography Quarterly', totalMarks: 100, obtainedMarks: 75, grade: 'A-', status: 'Pass', date: '2026-01-18' },
        ],
        className: 'quarterly-exams'
      }
    ],
  };
};

export default ExamData;
