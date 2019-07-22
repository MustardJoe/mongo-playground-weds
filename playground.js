function rnt_dn_to_half(n) {
  n = int(n * 10);
  x = n % 5;
  return((n - x) /10);
}