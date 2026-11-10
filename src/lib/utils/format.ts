/**
 * Format a date to a localized string.
 */
export function formatDate(date: Date | string, locale = "id-ID"): string {
  return new Date(date).toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Format a number to a currency string (Rupiah by default).
 */
export function formatCurrency(
  amount: number,
  locale = "id-ID",
  currency = "IDR"
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(amount);
}

