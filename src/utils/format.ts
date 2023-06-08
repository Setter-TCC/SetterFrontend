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
