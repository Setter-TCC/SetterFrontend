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
