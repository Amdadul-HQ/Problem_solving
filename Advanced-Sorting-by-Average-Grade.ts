type Student = {
  name: string;
  grades: number[];
};

const sortStudentsByAverage =(students: Student[]) : Student[]=> {
  return students.sort((a, b) => {
    const avgA = a.grades.reduce((sum, g) => sum + g, 0) / a.grades.length;
    const avgB = b.grades.reduce((sum, g) => sum + g, 0) / b.grades.length;
    return avgB - avgA;
  });
}

