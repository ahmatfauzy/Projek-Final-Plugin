function calculateAverageAndGrade(
  webProgramming: number,
  computerProgramming: number,
  statistics: number,
  databaseSystems: number
): void {
  // Validasi
  if (
    webProgramming === undefined ||
    computerProgramming === undefined ||
    statistics === undefined ||
    databaseSystems === undefined
  ) {
    console.error("Semua nilai harus diisi.");
    return;
  }

  const total =
    webProgramming + computerProgramming + statistics + databaseSystems;
  const average = total / 4;

  let grade: string;
  if (average >= 90 && average <= 100) {
    grade = "A";
  } else if (average >= 80 && average < 90) {
    grade = "B";
  } else if (average >= 70 && average < 80) {
    grade = "C";
  } else if (average >= 60 && average < 70) {
    grade = "D";
  } else if (average >= 0 && average < 60) {
    grade = "E";
  } else {
    console.error("Nilai tidak valid.");
    return;
  }

  // hasil
  console.log(`Rata-rata: ${average}`);
  console.log(`Grade: ${grade}`);
}

const webProgramming = 85;
const computerProgramming = 90;
const statistics = 78;
const databaseSystems = 88;

calculateAverageAndGrade(
  webProgramming,
  computerProgramming,
  statistics,
  databaseSystems
)

// untuk run
// npx tsc && node nilai.js