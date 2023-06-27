/* eslint-disable no-useless-escape */
import { zonedTimeToUtc, format } from 'date-fns-tz';
import { ChangeEvent } from 'react';
const timeZone = 'America/Sao_Paulo';

export const formatDateTimezone = (date: string) => {
  const utcDate = zonedTimeToUtc(date, timeZone);
  const formattedDate = format(utcDate, 'yyyy-MM-dd\'T\'HH:mm:ss', { timeZone });
  return formattedDate;
};

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
  return formatDateTimezone(convertToISODate(date));
}

export const formatCurrency = (value: number) => {
  const absoluteValue = Math.abs(value);
  return absoluteValue.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

export function mascaraMoeda(event: ChangeEvent<HTMLInputElement>) {
  const onlyDigits = event.target.value
    .split('')
    .filter((s) => /\d/.test(s))
    .join('')
    .padStart(3, '0');
  const digitsFloat = onlyDigits.slice(0, -2) + '.' + onlyDigits.slice(-2);
  event.target.value = maskCurrency(digitsFloat);
}

export function maskCurrency(valor: string, locale = 'pt-BR', currency = 'BRL') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(parseFloat(valor));
}


export function removeCurrencySymbols(str: string): number {
  return Number(removeSymbols(str)) / 100;
}
