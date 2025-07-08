export function driver(data: Array<string>): string {
  const [firstName, middleName, surname, dob, gender] = data;
  const surnameCode = (surname.toUpperCase() + '99999').slice(0, 5);

  const [dayStr, monthStr, yearStr] = dob.split('-');
  const day = dayStr.padStart(2, '0');
  const year = yearStr;
  const decadeDigit = year[2];
  const yearDigit = year[3];

  const months: { [key: string]: string } = {
    jan: "01",
    feb: "02", 
    mar: "03", 
    apr: "04",
    may: "05", 
    jun: "06", 
    jul: "07", 
    aug: "08",
    sep: "09", 
    oct: "10", 
    nov: "11", 
    dec: "12"
  };

  const month = months[monthStr.slice(0, 3).toLowerCase()];
  let monthCode = parseInt(month, 10);

  if (gender.toUpperCase() === 'F') monthCode += 50;

  const monthCodeStr = monthCode.toString().padStart(2, '0');

  const firstInitial = firstName[0].toUpperCase();
  const middleInitial = middleName ? middleName[0].toUpperCase() : '9';

  const result: string = surnameCode + decadeDigit + monthCodeStr + day + yearDigit + firstInitial + middleInitial + '9AA'
  return result
}
