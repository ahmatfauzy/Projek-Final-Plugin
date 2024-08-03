function Matkul(
  PemrogramanWeb: number,
  PemrogramanKomputer: number,
  Statistika: number,
  SistemBasisData: number
): void {
  if (
    typeof PemrogramanWeb !== "number" ||
    typeof PemrogramanKomputer !== "number" ||
    typeof Statistika !== "number" ||
    typeof SistemBasisData !== "number"
  ) {
    console.log("NIlai tidak boleh kosong dan harus berupa angka.");
    return;
  }

  const total =
    PemrogramanWeb + PemrogramanKomputer + Statistika + SistemBasisData;
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

const PemrogramanWeb: any = 90;
const PemrogramanKomputer: any = 90;
const Statistika: any = 78;
const SistemBasisData: any = 88;

Matkul(
  PemrogramanWeb,
  PemrogramanKomputer,
  Statistika,
  SistemBasisData
);

// untuk run
// npx tsc && node nilai.js
