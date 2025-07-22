export function ipsBetween(start: string, end: string): number {
  function ipInt(ip: string): number {
    return ip.split('.')
             .map(Number)
             .reduce((total, octet) => total * 256 + octet, 0);
  }

  return ipInt(end) - ipInt(start);
}