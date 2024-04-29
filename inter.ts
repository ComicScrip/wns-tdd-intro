export default function inter(a1: any[], a2: any[]) {
  const res: any[] = [];
  a1.forEach((el) => {
    if (a2.includes(el)) res.push(el);
  });
  return res;
}
