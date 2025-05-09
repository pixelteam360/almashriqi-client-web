import { parse, isValid } from "date-fns";

export function validateHHMMTime(time: string): boolean {
  if (time.length !== 5) return false;

  const parsed = parse(time, "HH:mm", new Date());
  return isValid(parsed);
}
