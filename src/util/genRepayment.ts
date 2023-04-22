export default function genRepayment(balance: number) {
  const data = [
    {
      title: "6 Months",
      color:"orange",
      month: 6,
      weekly: (balance / 52) * 2,
      fortnightly: (balance / 52) * 2 * 2,
      monthly: (balance / 12) * 2,
    },
    {
      title: "12 Months",
      color:"blue.400",
      month: 12,
      weekly: balance / 52,
      fortnightly: (balance / 52) * 2,
      monthly: balance / 12,
    },
    {
      title: "18 Months",
      color:"pink.300",
      month: 18,
      weekly: balance / 52 / 1.5,
      fortnightly: ((balance / 52) * 2) / 1.5,
      monthly: balance / 12 / 1.5,
    },
  ];
  return data
}
