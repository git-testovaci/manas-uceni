export function formatClockTime(hour: number, minute: number): string {
  return `${hour}:${String(minute).padStart(2, "0")}`;
}

export function composeClockAnswer(
  hourInput: string,
  minuteInput: string,
  expectedMinute?: number,
): string {
  const hour = hourInput.trim();
  const minute = minuteInput.trim();

  if (!hour) {
    return "";
  }

  if (!minute) {
    if (expectedMinute === 30) {
      return "";
    }

    return hour;
  }

  const hourValue = Number(hour);
  const minuteValue = Number(minute);

  if (
    Number.isInteger(hourValue) &&
    Number.isInteger(minuteValue) &&
    hourValue >= 1 &&
    hourValue <= 12
  ) {
    return formatClockTime(hourValue, minuteValue);
  }

  return `${hour}:${minute.padStart(2, "0")}`;
}

export function parseClockAnswer(
  input: string,
): { hour: number; minute: number } | null {
  const trimmed = input.trim();

  if (trimmed.length === 0) {
    return null;
  }

  const wholeHourMatch = /^(\d{1,2})$/.exec(trimmed);
  if (wholeHourMatch) {
    const hour = Number(wholeHourMatch[1]);
    if (!isValidClockHour(hour)) {
      return null;
    }

    return { hour, minute: 0 };
  }

  const timeMatch = /^(\d{1,2})\s*([.:])\s*(\d{2})$/.exec(trimmed);
  if (!timeMatch) {
    return null;
  }

  const hour = Number(timeMatch[1]);
  const minute = Number(timeMatch[3]);

  if (!isValidClockHour(hour) || (minute !== 0 && minute !== 30)) {
    return null;
  }

  return { hour, minute };
}

function isValidClockHour(hour: number): boolean {
  return Number.isInteger(hour) && hour >= 1 && hour <= 12;
}

export function formatClockTimeLabel(hour: number, minute: number): string {
  if (minute === 0) {
    return `${hour} hodin`;
  }

  return `${hour} a půl`;
}
