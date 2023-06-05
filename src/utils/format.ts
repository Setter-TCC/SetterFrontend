export function removeSymbols(str: string): string {
  return str.replace(/\D/g, '');
}