import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function maskAddressRegex(a: string | undefined) {
  return a?.replace(/^(.{6}).+(.{4})$/, "$1…$2") ?? "";
}

export function formatBalance(value: string | number, decimals = 4) {
  const num = Number(value);
  if (isNaN(num)) return "0";
  const factor = Math.pow(10, decimals);
  const truncated = Math.floor(num * factor) / factor;
  return truncated.toString();
}
