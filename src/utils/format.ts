import format from 'date-fns/format';

export function removeSymbols(str: string): string {
  return str.replace(/\D/g, '');
}

export function convertToISODate(dateString: string) {
  const parts = dateString.split('/');
  const day = parts[0];
  const month = parts[1];
  const year = parts[2];
  return `${year}-${month}-${day}`;
}

export function formatCPF(cpf: string) {
  return cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
}

export function formatRG(rg: string) {
  return rg.replace(/^(\d{2})(\d{3})(\d{3})(\d{1})$/, '$1.$2.$3-$4');
}

export function formatPhone(phone: string) {
  return phone.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
}

export function formatEditDate(date: string) {
  const partesData = date.split('/');
  const day = parseInt(partesData[0], 10);
  const month = parseInt(partesData[1], 10) - 1;
  const year = parseInt(partesData[2], 10);

  const formattedDate = format(new Date(year, month, day), 'yyyy-MM-dd\'T\'HH:mm:ss');

  return formattedDate;
}
