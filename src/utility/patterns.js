function generatePattern(patternName) {
  const gliderPattern = [
    {
      row: 1,
      col: 25,
    },
    {
      row: 2,
      col: 23,
    },
    {
      row: 2,
      col: 25,
    },
    {
      row: 3,
      col: 13,
    },
    {
      row: 3,
      col: 14,
    },
    {
      row: 3,
      col: 21,
    },
    {
      row: 3,
      col: 22,
    },
    {
      row: 3,
      col: 35,
    },
    {
      row: 3,
      col: 36,
    },
    {
      row: 4,
      col: 12,
    },
    {
      row: 4,
      col: 16,
    },
    {
      row: 4,
      col: 21,
    },
    {
      row: 4,
      col: 22,
    },
    {
      row: 4,
      col: 35,
    },
    {
      row: 4,
      col: 36,
    },
    {
      row: 5,
      col: 1,
    },
    {
      row: 5,
      col: 2,
    },
    {
      row: 5,
      col: 11,
    },
    {
      row: 5,
      col: 17,
    },
    {
      row: 5,
      col: 21,
    },
    {
      row: 5,
      col: 22,
    },
    {
      row: 6,
      col: 1,
    },
    {
      row: 6,
      col: 2,
    },
    {
      row: 6,
      col: 11,
    },
    {
      row: 6,
      col: 15,
    },
    {
      row: 6,
      col: 17,
    },
    {
      row: 6,
      col: 18,
    },
    {
      row: 6,
      col: 23,
    },
    {
      row: 6,
      col: 25,
    },
    {
      row: 7,
      col: 11,
    },
    {
      row: 7,
      col: 17,
    },
    {
      row: 7,
      col: 25,
    },
    {
      row: 8,
      col: 12,
    },
    {
      row: 8,
      col: 16,
    },
    {
      row: 9,
      col: 13,
    },
    {
      row: 9,
      col: 14,
    },
  ];
  const pulsarPattern = [
    {
      row: 8,
      col: 21,
    },
    {
      row: 8,
      col: 27,
    },
    {
      row: 9,
      col: 21,
    },
    {
      row: 9,
      col: 27,
    },
    {
      row: 10,
      col: 21,
    },
    {
      row: 10,
      col: 22,
    },
    {
      row: 10,
      col: 26,
    },
    {
      row: 10,
      col: 27,
    },
    {
      row: 12,
      col: 17,
    },
    {
      row: 12,
      col: 18,
    },
    {
      row: 12,
      col: 19,
    },
    {
      row: 12,
      col: 22,
    },
    {
      row: 12,
      col: 23,
    },
    {
      row: 12,
      col: 25,
    },
    {
      row: 12,
      col: 26,
    },
    {
      row: 12,
      col: 29,
    },
    {
      row: 12,
      col: 30,
    },
    {
      row: 12,
      col: 31,
    },
    {
      row: 13,
      col: 19,
    },
    {
      row: 13,
      col: 21,
    },
    {
      row: 13,
      col: 23,
    },
    {
      row: 13,
      col: 25,
    },
    {
      row: 13,
      col: 27,
    },
    {
      row: 13,
      col: 29,
    },
    {
      row: 14,
      col: 21,
    },
    {
      row: 14,
      col: 22,
    },
    {
      row: 14,
      col: 26,
    },
    {
      row: 14,
      col: 27,
    },
    {
      row: 16,
      col: 21,
    },
    {
      row: 16,
      col: 22,
    },
    {
      row: 16,
      col: 26,
    },
    {
      row: 16,
      col: 27,
    },
    {
      row: 17,
      col: 19,
    },
    {
      row: 17,
      col: 21,
    },
    {
      row: 17,
      col: 23,
    },
    {
      row: 17,
      col: 25,
    },
    {
      row: 17,
      col: 27,
    },
    {
      row: 17,
      col: 29,
    },
    {
      row: 18,
      col: 17,
    },
    {
      row: 18,
      col: 18,
    },
    {
      row: 18,
      col: 19,
    },
    {
      row: 18,
      col: 22,
    },
    {
      row: 18,
      col: 23,
    },
    {
      row: 18,
      col: 25,
    },
    {
      row: 18,
      col: 26,
    },
    {
      row: 18,
      col: 29,
    },
    {
      row: 18,
      col: 30,
    },
    {
      row: 18,
      col: 31,
    },
    {
      row: 20,
      col: 21,
    },
    {
      row: 20,
      col: 22,
    },
    {
      row: 20,
      col: 26,
    },
    {
      row: 20,
      col: 27,
    },
    {
      row: 21,
      col: 21,
    },
    {
      row: 21,
      col: 27,
    },
    {
      row: 22,
      col: 21,
    },
    {
      row: 22,
      col: 27,
    },
  ];

  const maxiDensityPattern = [
    {
      row: 0,
      col: 0,
    },
    {
      row: 0,
      col: 1,
    },
    {
      row: 0,
      col: 48,
    },
    {
      row: 0,
      col: 49,
    },
    {
      row: 1,
      col: 0,
    },
    {
      row: 1,
      col: 1,
    },
    {
      row: 1,
      col: 48,
    },
    {
      row: 1,
      col: 49,
    },
    {
      row: 5,
      col: 4,
    },
    {
      row: 5,
      col: 6,
    },
    {
      row: 5,
      col: 7,
    },
    {
      row: 5,
      col: 9,
    },
    {
      row: 5,
      col: 10,
    },
    {
      row: 5,
      col: 12,
    },
    {
      row: 5,
      col: 14,
    },
    {
      row: 5,
      col: 15,
    },
    {
      row: 5,
      col: 17,
    },
    {
      row: 5,
      col: 18,
    },
    {
      row: 5,
      col: 20,
    },
    {
      row: 5,
      col: 22,
    },
    {
      row: 5,
      col: 23,
    },
    {
      row: 5,
      col: 26,
    },
    {
      row: 5,
      col: 28,
    },
    {
      row: 5,
      col: 29,
    },
    {
      row: 5,
      col: 31,
    },
    {
      row: 5,
      col: 32,
    },
    {
      row: 5,
      col: 34,
    },
    {
      row: 5,
      col: 36,
    },
    {
      row: 5,
      col: 37,
    },
    {
      row: 5,
      col: 39,
    },
    {
      row: 5,
      col: 40,
    },
    {
      row: 5,
      col: 42,
    },
    {
      row: 5,
      col: 44,
    },
    {
      row: 5,
      col: 45,
    },
    {
      row: 6,
      col: 4,
    },
    {
      row: 6,
      col: 5,
    },
    {
      row: 6,
      col: 7,
    },
    {
      row: 6,
      col: 9,
    },
    {
      row: 6,
      col: 11,
    },
    {
      row: 6,
      col: 12,
    },
    {
      row: 6,
      col: 13,
    },
    {
      row: 6,
      col: 15,
    },
    {
      row: 6,
      col: 17,
    },
    {
      row: 6,
      col: 19,
    },
    {
      row: 6,
      col: 20,
    },
    {
      row: 6,
      col: 22,
    },
    {
      row: 6,
      col: 26,
    },
    {
      row: 6,
      col: 27,
    },
    {
      row: 6,
      col: 29,
    },
    {
      row: 6,
      col: 31,
    },
    {
      row: 6,
      col: 33,
    },
    {
      row: 6,
      col: 34,
    },
    {
      row: 6,
      col: 35,
    },
    {
      row: 6,
      col: 37,
    },
    {
      row: 6,
      col: 39,
    },
    {
      row: 6,
      col: 41,
    },
    {
      row: 6,
      col: 42,
    },
    {
      row: 6,
      col: 44,
    },
    {
      row: 7,
      col: 7,
    },
    {
      row: 7,
      col: 9,
    },
    {
      row: 7,
      col: 15,
    },
    {
      row: 7,
      col: 17,
    },
    {
      row: 7,
      col: 23,
    },
    {
      row: 7,
      col: 29,
    },
    {
      row: 7,
      col: 31,
    },
    {
      row: 7,
      col: 37,
    },
    {
      row: 7,
      col: 39,
    },
    {
      row: 7,
      col: 45,
    },
    {
      row: 8,
      col: 4,
    },
    {
      row: 8,
      col: 5,
    },
    {
      row: 8,
      col: 7,
    },
    {
      row: 8,
      col: 9,
    },
    {
      row: 8,
      col: 10,
    },
    {
      row: 8,
      col: 11,
    },
    {
      row: 8,
      col: 12,
    },
    {
      row: 8,
      col: 13,
    },
    {
      row: 8,
      col: 14,
    },
    {
      row: 8,
      col: 16,
    },
    {
      row: 8,
      col: 18,
    },
    {
      row: 8,
      col: 19,
    },
    {
      row: 8,
      col: 20,
    },
    {
      row: 8,
      col: 21,
    },
    {
      row: 8,
      col: 22,
    },
    {
      row: 8,
      col: 23,
    },
    {
      row: 8,
      col: 26,
    },
    {
      row: 8,
      col: 27,
    },
    {
      row: 8,
      col: 29,
    },
    {
      row: 8,
      col: 31,
    },
    {
      row: 8,
      col: 32,
    },
    {
      row: 8,
      col: 33,
    },
    {
      row: 8,
      col: 34,
    },
    {
      row: 8,
      col: 35,
    },
    {
      row: 8,
      col: 36,
    },
    {
      row: 8,
      col: 38,
    },
    {
      row: 8,
      col: 40,
    },
    {
      row: 8,
      col: 41,
    },
    {
      row: 8,
      col: 42,
    },
    {
      row: 8,
      col: 43,
    },
    {
      row: 8,
      col: 44,
    },
    {
      row: 8,
      col: 45,
    },
    {
      row: 9,
      col: 5,
    },
    {
      row: 9,
      col: 7,
    },
    {
      row: 9,
      col: 14,
    },
    {
      row: 9,
      col: 16,
    },
    {
      row: 9,
      col: 18,
    },
    {
      row: 9,
      col: 27,
    },
    {
      row: 9,
      col: 29,
    },
    {
      row: 9,
      col: 36,
    },
    {
      row: 9,
      col: 38,
    },
    {
      row: 9,
      col: 40,
    },
    {
      row: 10,
      col: 4,
    },
    {
      row: 10,
      col: 7,
    },
    {
      row: 10,
      col: 8,
    },
    {
      row: 10,
      col: 9,
    },
    {
      row: 10,
      col: 10,
    },
    {
      row: 10,
      col: 11,
    },
    {
      row: 10,
      col: 12,
    },
    {
      row: 10,
      col: 14,
    },
    {
      row: 10,
      col: 16,
    },
    {
      row: 10,
      col: 18,
    },
    {
      row: 10,
      col: 20,
    },
    {
      row: 10,
      col: 21,
    },
    {
      row: 10,
      col: 22,
    },
    {
      row: 10,
      col: 23,
    },
    {
      row: 10,
      col: 26,
    },
    {
      row: 10,
      col: 29,
    },
    {
      row: 10,
      col: 30,
    },
    {
      row: 10,
      col: 31,
    },
    {
      row: 10,
      col: 32,
    },
    {
      row: 10,
      col: 33,
    },
    {
      row: 10,
      col: 34,
    },
    {
      row: 10,
      col: 36,
    },
    {
      row: 10,
      col: 38,
    },
    {
      row: 10,
      col: 40,
    },
    {
      row: 10,
      col: 42,
    },
    {
      row: 10,
      col: 43,
    },
    {
      row: 10,
      col: 44,
    },
    {
      row: 10,
      col: 45,
    },
    {
      row: 11,
      col: 4,
    },
    {
      row: 11,
      col: 5,
    },
    {
      row: 11,
      col: 6,
    },
    {
      row: 11,
      col: 12,
    },
    {
      row: 11,
      col: 14,
    },
    {
      row: 11,
      col: 16,
    },
    {
      row: 11,
      col: 18,
    },
    {
      row: 11,
      col: 20,
    },
    {
      row: 11,
      col: 23,
    },
    {
      row: 11,
      col: 26,
    },
    {
      row: 11,
      col: 27,
    },
    {
      row: 11,
      col: 28,
    },
    {
      row: 11,
      col: 34,
    },
    {
      row: 11,
      col: 36,
    },
    {
      row: 11,
      col: 38,
    },
    {
      row: 11,
      col: 40,
    },
    {
      row: 11,
      col: 42,
    },
    {
      row: 11,
      col: 45,
    },
    {
      row: 12,
      col: 7,
    },
    {
      row: 12,
      col: 8,
    },
    {
      row: 12,
      col: 9,
    },
    {
      row: 12,
      col: 10,
    },
    {
      row: 12,
      col: 12,
    },
    {
      row: 12,
      col: 14,
    },
    {
      row: 12,
      col: 16,
    },
    {
      row: 12,
      col: 18,
    },
    {
      row: 12,
      col: 20,
    },
    {
      row: 12,
      col: 22,
    },
    {
      row: 12,
      col: 29,
    },
    {
      row: 12,
      col: 30,
    },
    {
      row: 12,
      col: 31,
    },
    {
      row: 12,
      col: 32,
    },
    {
      row: 12,
      col: 34,
    },
    {
      row: 12,
      col: 36,
    },
    {
      row: 12,
      col: 38,
    },
    {
      row: 12,
      col: 40,
    },
    {
      row: 12,
      col: 42,
    },
    {
      row: 12,
      col: 44,
    },
    {
      row: 13,
      col: 4,
    },
    {
      row: 13,
      col: 5,
    },
    {
      row: 13,
      col: 6,
    },
    {
      row: 13,
      col: 10,
    },
    {
      row: 13,
      col: 12,
    },
    {
      row: 13,
      col: 14,
    },
    {
      row: 13,
      col: 16,
    },
    {
      row: 13,
      col: 18,
    },
    {
      row: 13,
      col: 20,
    },
    {
      row: 13,
      col: 22,
    },
    {
      row: 13,
      col: 23,
    },
    {
      row: 13,
      col: 26,
    },
    {
      row: 13,
      col: 27,
    },
    {
      row: 13,
      col: 28,
    },
    {
      row: 13,
      col: 32,
    },
    {
      row: 13,
      col: 34,
    },
    {
      row: 13,
      col: 36,
    },
    {
      row: 13,
      col: 38,
    },
    {
      row: 13,
      col: 40,
    },
    {
      row: 13,
      col: 42,
    },
    {
      row: 13,
      col: 44,
    },
    {
      row: 13,
      col: 45,
    },
    {
      row: 14,
      col: 4,
    },
    {
      row: 14,
      col: 7,
    },
    {
      row: 14,
      col: 8,
    },
    {
      row: 14,
      col: 10,
    },
    {
      row: 14,
      col: 12,
    },
    {
      row: 14,
      col: 14,
    },
    {
      row: 14,
      col: 16,
    },
    {
      row: 14,
      col: 18,
    },
    {
      row: 14,
      col: 20,
    },
    {
      row: 14,
      col: 22,
    },
    {
      row: 14,
      col: 26,
    },
    {
      row: 14,
      col: 29,
    },
    {
      row: 14,
      col: 30,
    },
    {
      row: 14,
      col: 32,
    },
    {
      row: 14,
      col: 34,
    },
    {
      row: 14,
      col: 36,
    },
    {
      row: 14,
      col: 38,
    },
    {
      row: 14,
      col: 40,
    },
    {
      row: 14,
      col: 42,
    },
    {
      row: 14,
      col: 44,
    },
    {
      row: 15,
      col: 5,
    },
    {
      row: 15,
      col: 7,
    },
    {
      row: 15,
      col: 9,
    },
    {
      row: 15,
      col: 11,
    },
    {
      row: 15,
      col: 13,
    },
    {
      row: 15,
      col: 15,
    },
    {
      row: 15,
      col: 17,
    },
    {
      row: 15,
      col: 18,
    },
    {
      row: 15,
      col: 20,
    },
    {
      row: 15,
      col: 23,
    },
    {
      row: 15,
      col: 27,
    },
    {
      row: 15,
      col: 29,
    },
    {
      row: 15,
      col: 31,
    },
    {
      row: 15,
      col: 33,
    },
    {
      row: 15,
      col: 35,
    },
    {
      row: 15,
      col: 37,
    },
    {
      row: 15,
      col: 39,
    },
    {
      row: 15,
      col: 40,
    },
    {
      row: 15,
      col: 42,
    },
    {
      row: 15,
      col: 45,
    },
    {
      row: 16,
      col: 4,
    },
    {
      row: 16,
      col: 5,
    },
    {
      row: 16,
      col: 7,
    },
    {
      row: 16,
      col: 9,
    },
    {
      row: 16,
      col: 11,
    },
    {
      row: 16,
      col: 13,
    },
    {
      row: 16,
      col: 15,
    },
    {
      row: 16,
      col: 20,
    },
    {
      row: 16,
      col: 21,
    },
    {
      row: 16,
      col: 22,
    },
    {
      row: 16,
      col: 23,
    },
    {
      row: 16,
      col: 26,
    },
    {
      row: 16,
      col: 27,
    },
    {
      row: 16,
      col: 29,
    },
    {
      row: 16,
      col: 31,
    },
    {
      row: 16,
      col: 33,
    },
    {
      row: 16,
      col: 35,
    },
    {
      row: 16,
      col: 37,
    },
    {
      row: 16,
      col: 42,
    },
    {
      row: 16,
      col: 43,
    },
    {
      row: 16,
      col: 44,
    },
    {
      row: 16,
      col: 45,
    },
    {
      row: 17,
      col: 5,
    },
    {
      row: 17,
      col: 7,
    },
    {
      row: 17,
      col: 9,
    },
    {
      row: 17,
      col: 11,
    },
    {
      row: 17,
      col: 13,
    },
    {
      row: 17,
      col: 15,
    },
    {
      row: 17,
      col: 16,
    },
    {
      row: 17,
      col: 17,
    },
    {
      row: 17,
      col: 18,
    },
    {
      row: 17,
      col: 19,
    },
    {
      row: 17,
      col: 27,
    },
    {
      row: 17,
      col: 29,
    },
    {
      row: 17,
      col: 31,
    },
    {
      row: 17,
      col: 33,
    },
    {
      row: 17,
      col: 35,
    },
    {
      row: 17,
      col: 37,
    },
    {
      row: 17,
      col: 38,
    },
    {
      row: 17,
      col: 39,
    },
    {
      row: 17,
      col: 40,
    },
    {
      row: 17,
      col: 41,
    },
    {
      row: 18,
      col: 4,
    },
    {
      row: 18,
      col: 7,
    },
    {
      row: 18,
      col: 9,
    },
    {
      row: 18,
      col: 11,
    },
    {
      row: 18,
      col: 13,
    },
    {
      row: 18,
      col: 20,
    },
    {
      row: 18,
      col: 21,
    },
    {
      row: 18,
      col: 22,
    },
    {
      row: 18,
      col: 23,
    },
    {
      row: 18,
      col: 26,
    },
    {
      row: 18,
      col: 29,
    },
    {
      row: 18,
      col: 31,
    },
    {
      row: 18,
      col: 33,
    },
    {
      row: 18,
      col: 35,
    },
    {
      row: 18,
      col: 42,
    },
    {
      row: 18,
      col: 43,
    },
    {
      row: 18,
      col: 44,
    },
    {
      row: 18,
      col: 45,
    },
    {
      row: 19,
      col: 4,
    },
    {
      row: 19,
      col: 5,
    },
    {
      row: 19,
      col: 6,
    },
    {
      row: 19,
      col: 7,
    },
    {
      row: 19,
      col: 9,
    },
    {
      row: 19,
      col: 11,
    },
    {
      row: 19,
      col: 13,
    },
    {
      row: 19,
      col: 14,
    },
    {
      row: 19,
      col: 15,
    },
    {
      row: 19,
      col: 16,
    },
    {
      row: 19,
      col: 17,
    },
    {
      row: 19,
      col: 18,
    },
    {
      row: 19,
      col: 20,
    },
    {
      row: 19,
      col: 23,
    },
    {
      row: 19,
      col: 26,
    },
    {
      row: 19,
      col: 27,
    },
    {
      row: 19,
      col: 28,
    },
    {
      row: 19,
      col: 29,
    },
    {
      row: 19,
      col: 31,
    },
    {
      row: 19,
      col: 33,
    },
    {
      row: 19,
      col: 35,
    },
    {
      row: 19,
      col: 36,
    },
    {
      row: 19,
      col: 37,
    },
    {
      row: 19,
      col: 38,
    },
    {
      row: 19,
      col: 39,
    },
    {
      row: 19,
      col: 40,
    },
    {
      row: 19,
      col: 42,
    },
    {
      row: 19,
      col: 45,
    },
    {
      row: 20,
      col: 9,
    },
    {
      row: 20,
      col: 11,
    },
    {
      row: 20,
      col: 18,
    },
    {
      row: 20,
      col: 20,
    },
    {
      row: 20,
      col: 22,
    },
    {
      row: 20,
      col: 31,
    },
    {
      row: 20,
      col: 33,
    },
    {
      row: 20,
      col: 40,
    },
    {
      row: 20,
      col: 42,
    },
    {
      row: 20,
      col: 44,
    },
    {
      row: 21,
      col: 4,
    },
    {
      row: 21,
      col: 5,
    },
    {
      row: 21,
      col: 6,
    },
    {
      row: 21,
      col: 7,
    },
    {
      row: 21,
      col: 8,
    },
    {
      row: 21,
      col: 9,
    },
    {
      row: 21,
      col: 11,
    },
    {
      row: 21,
      col: 12,
    },
    {
      row: 21,
      col: 13,
    },
    {
      row: 21,
      col: 14,
    },
    {
      row: 21,
      col: 15,
    },
    {
      row: 21,
      col: 16,
    },
    {
      row: 21,
      col: 18,
    },
    {
      row: 21,
      col: 20,
    },
    {
      row: 21,
      col: 22,
    },
    {
      row: 21,
      col: 23,
    },
    {
      row: 21,
      col: 26,
    },
    {
      row: 21,
      col: 27,
    },
    {
      row: 21,
      col: 28,
    },
    {
      row: 21,
      col: 29,
    },
    {
      row: 21,
      col: 30,
    },
    {
      row: 21,
      col: 31,
    },
    {
      row: 21,
      col: 33,
    },
    {
      row: 21,
      col: 34,
    },
    {
      row: 21,
      col: 35,
    },
    {
      row: 21,
      col: 36,
    },
    {
      row: 21,
      col: 37,
    },
    {
      row: 21,
      col: 38,
    },
    {
      row: 21,
      col: 40,
    },
    {
      row: 21,
      col: 42,
    },
    {
      row: 21,
      col: 44,
    },
    {
      row: 21,
      col: 45,
    },
    {
      row: 22,
      col: 4,
    },
    {
      row: 22,
      col: 10,
    },
    {
      row: 22,
      col: 16,
    },
    {
      row: 22,
      col: 18,
    },
    {
      row: 22,
      col: 20,
    },
    {
      row: 22,
      col: 22,
    },
    {
      row: 22,
      col: 26,
    },
    {
      row: 22,
      col: 32,
    },
    {
      row: 22,
      col: 38,
    },
    {
      row: 22,
      col: 40,
    },
    {
      row: 22,
      col: 42,
    },
    {
      row: 22,
      col: 44,
    },
    {
      row: 23,
      col: 5,
    },
    {
      row: 23,
      col: 7,
    },
    {
      row: 23,
      col: 8,
    },
    {
      row: 23,
      col: 10,
    },
    {
      row: 23,
      col: 12,
    },
    {
      row: 23,
      col: 13,
    },
    {
      row: 23,
      col: 14,
    },
    {
      row: 23,
      col: 16,
    },
    {
      row: 23,
      col: 18,
    },
    {
      row: 23,
      col: 20,
    },
    {
      row: 23,
      col: 23,
    },
    {
      row: 23,
      col: 27,
    },
    {
      row: 23,
      col: 29,
    },
    {
      row: 23,
      col: 30,
    },
    {
      row: 23,
      col: 32,
    },
    {
      row: 23,
      col: 34,
    },
    {
      row: 23,
      col: 35,
    },
    {
      row: 23,
      col: 36,
    },
    {
      row: 23,
      col: 38,
    },
    {
      row: 23,
      col: 40,
    },
    {
      row: 23,
      col: 42,
    },
    {
      row: 23,
      col: 45,
    },
    {
      row: 24,
      col: 4,
    },
    {
      row: 24,
      col: 5,
    },
    {
      row: 24,
      col: 7,
    },
    {
      row: 24,
      col: 8,
    },
    {
      row: 24,
      col: 10,
    },
    {
      row: 24,
      col: 11,
    },
    {
      row: 24,
      col: 13,
    },
    {
      row: 24,
      col: 15,
    },
    {
      row: 24,
      col: 16,
    },
    {
      row: 24,
      col: 18,
    },
    {
      row: 24,
      col: 19,
    },
    {
      row: 24,
      col: 22,
    },
    {
      row: 24,
      col: 23,
    },
    {
      row: 24,
      col: 26,
    },
    {
      row: 24,
      col: 27,
    },
    {
      row: 24,
      col: 29,
    },
    {
      row: 24,
      col: 30,
    },
    {
      row: 24,
      col: 32,
    },
    {
      row: 24,
      col: 33,
    },
    {
      row: 24,
      col: 35,
    },
    {
      row: 24,
      col: 37,
    },
    {
      row: 24,
      col: 38,
    },
    {
      row: 24,
      col: 40,
    },
    {
      row: 24,
      col: 41,
    },
    {
      row: 24,
      col: 44,
    },
    {
      row: 24,
      col: 45,
    },
    {
      row: 28,
      col: 0,
    },
    {
      row: 28,
      col: 1,
    },
    {
      row: 28,
      col: 48,
    },
    {
      row: 28,
      col: 49,
    },
    {
      row: 29,
      col: 0,
    },
    {
      row: 29,
      col: 1,
    },
    {
      row: 29,
      col: 48,
    },
    {
      row: 29,
      col: 49,
    },
  ];

  const loadPattern = [
    {
      row: 1,
      col: 25,
    },
    {
      row: 1,
      col: 37,
    },
    {
      row: 1,
      col: 38,
    },
    {
      row: 2,
      col: 23,
    },
    {
      row: 2,
      col: 25,
    },
    {
      row: 2,
      col: 37,
    },
    {
      row: 2,
      col: 38,
    },
    {
      row: 3,
      col: 13,
    },
    {
      row: 3,
      col: 14,
    },
    {
      row: 3,
      col: 21,
    },
    {
      row: 3,
      col: 22,
    },
    {
      row: 3,
      col: 35,
    },
    {
      row: 3,
      col: 36,
    },
    {
      row: 4,
      col: 12,
    },
    {
      row: 4,
      col: 16,
    },
    {
      row: 4,
      col: 21,
    },
    {
      row: 4,
      col: 22,
    },
    {
      row: 4,
      col: 35,
    },
    {
      row: 4,
      col: 36,
    },
    {
      row: 5,
      col: 1,
    },
    {
      row: 5,
      col: 2,
    },
    {
      row: 5,
      col: 11,
    },
    {
      row: 5,
      col: 17,
    },
    {
      row: 5,
      col: 21,
    },
    {
      row: 5,
      col: 22,
    },
    {
      row: 6,
      col: 1,
    },
    {
      row: 6,
      col: 2,
    },
    {
      row: 6,
      col: 11,
    },
    {
      row: 6,
      col: 15,
    },
    {
      row: 6,
      col: 17,
    },
    {
      row: 6,
      col: 18,
    },
    {
      row: 6,
      col: 23,
    },
    {
      row: 6,
      col: 25,
    },
    {
      row: 7,
      col: 11,
    },
    {
      row: 7,
      col: 17,
    },
    {
      row: 7,
      col: 25,
    },
    {
      row: 8,
      col: 12,
    },
    {
      row: 8,
      col: 16,
    },
    {
      row: 8,
      col: 42,
    },
    {
      row: 8,
      col: 43,
    },
    {
      row: 8,
      col: 44,
    },
    {
      row: 9,
      col: 13,
    },
    {
      row: 9,
      col: 14,
    },
    {
      row: 9,
      col: 42,
    },
    {
      row: 9,
      col: 44,
    },
    {
      row: 10,
      col: 42,
    },
    {
      row: 10,
      col: 43,
    },
    {
      row: 10,
      col: 44,
    },
    {
      row: 11,
      col: 42,
    },
    {
      row: 11,
      col: 43,
    },
    {
      row: 11,
      col: 44,
    },
    {
      row: 12,
      col: 42,
    },
    {
      row: 12,
      col: 43,
    },
    {
      row: 12,
      col: 44,
    },
    {
      row: 13,
      col: 42,
    },
    {
      row: 13,
      col: 43,
    },
    {
      row: 13,
      col: 44,
    },
    {
      row: 14,
      col: 42,
    },
    {
      row: 14,
      col: 44,
    },
    {
      row: 15,
      col: 8,
    },
    {
      row: 15,
      col: 9,
    },
    {
      row: 15,
      col: 10,
    },
    {
      row: 15,
      col: 14,
    },
    {
      row: 15,
      col: 15,
    },
    {
      row: 15,
      col: 16,
    },
    {
      row: 15,
      col: 42,
    },
    {
      row: 15,
      col: 43,
    },
    {
      row: 15,
      col: 44,
    },
    {
      row: 17,
      col: 6,
    },
    {
      row: 17,
      col: 11,
    },
    {
      row: 17,
      col: 13,
    },
    {
      row: 17,
      col: 18,
    },
    {
      row: 18,
      col: 6,
    },
    {
      row: 18,
      col: 11,
    },
    {
      row: 18,
      col: 13,
    },
    {
      row: 18,
      col: 18,
    },
    {
      row: 19,
      col: 6,
    },
    {
      row: 19,
      col: 11,
    },
    {
      row: 19,
      col: 13,
    },
    {
      row: 19,
      col: 18,
    },
    {
      row: 20,
      col: 8,
    },
    {
      row: 20,
      col: 9,
    },
    {
      row: 20,
      col: 10,
    },
    {
      row: 20,
      col: 14,
    },
    {
      row: 20,
      col: 15,
    },
    {
      row: 20,
      col: 16,
    },
    {
      row: 20,
      col: 23,
    },
    {
      row: 20,
      col: 24,
    },
    {
      row: 21,
      col: 23,
    },
    {
      row: 21,
      col: 24,
    },
    {
      row: 22,
      col: 8,
    },
    {
      row: 22,
      col: 9,
    },
    {
      row: 22,
      col: 10,
    },
    {
      row: 22,
      col: 14,
    },
    {
      row: 22,
      col: 15,
    },
    {
      row: 22,
      col: 16,
    },
    {
      row: 22,
      col: 25,
    },
    {
      row: 22,
      col: 26,
    },
    {
      row: 23,
      col: 6,
    },
    {
      row: 23,
      col: 11,
    },
    {
      row: 23,
      col: 13,
    },
    {
      row: 23,
      col: 18,
    },
    {
      row: 23,
      col: 25,
    },
    {
      row: 23,
      col: 26,
    },
    {
      row: 24,
      col: 6,
    },
    {
      row: 24,
      col: 11,
    },
    {
      row: 24,
      col: 13,
    },
    {
      row: 24,
      col: 18,
    },
    {
      row: 25,
      col: 6,
    },
    {
      row: 25,
      col: 11,
    },
    {
      row: 25,
      col: 13,
    },
    {
      row: 25,
      col: 18,
    },
    {
      row: 25,
      col: 45,
    },
    {
      row: 25,
      col: 46,
    },
    {
      row: 25,
      col: 47,
    },
    {
      row: 27,
      col: 8,
    },
    {
      row: 27,
      col: 9,
    },
    {
      row: 27,
      col: 10,
    },
    {
      row: 27,
      col: 14,
    },
    {
      row: 27,
      col: 15,
    },
    {
      row: 27,
      col: 16,
    },
    {
      row: 28,
      col: 37,
    },
    {
      row: 28,
      col: 38,
    },
    {
      row: 28,
      col: 39,
    },
  ];

  const crazyCorners = [
    {
      row: 0,
      col: 1,
    },
    {
      row: 0,
      col: 2,
    },
    {
      row: 0,
      col: 47,
    },
    {
      row: 0,
      col: 48,
    },
    {
      row: 1,
      col: 0,
    },
    {
      row: 1,
      col: 2,
    },
    {
      row: 1,
      col: 4,
    },
    {
      row: 1,
      col: 45,
    },
    {
      row: 1,
      col: 47,
    },
    {
      row: 1,
      col: 49,
    },
    {
      row: 2,
      col: 0,
    },
    {
      row: 2,
      col: 1,
    },
    {
      row: 2,
      col: 4,
    },
    {
      row: 2,
      col: 5,
    },
    {
      row: 2,
      col: 6,
    },
    {
      row: 2,
      col: 43,
    },
    {
      row: 2,
      col: 44,
    },
    {
      row: 2,
      col: 45,
    },
    {
      row: 2,
      col: 48,
    },
    {
      row: 2,
      col: 49,
    },
    {
      row: 4,
      col: 1,
    },
    {
      row: 4,
      col: 2,
    },
    {
      row: 4,
      col: 47,
    },
    {
      row: 4,
      col: 48,
    },
    {
      row: 5,
      col: 2,
    },
    {
      row: 5,
      col: 47,
    },
    {
      row: 6,
      col: 2,
    },
    {
      row: 6,
      col: 47,
    },
    {
      row: 10,
      col: 25,
    },
    {
      row: 11,
      col: 25,
    },
    {
      row: 12,
      col: 25,
    },
    {
      row: 15,
      col: 20,
    },
    {
      row: 15,
      col: 21,
    },
    {
      row: 15,
      col: 22,
    },
    {
      row: 15,
      col: 28,
    },
    {
      row: 15,
      col: 29,
    },
    {
      row: 15,
      col: 30,
    },
    {
      row: 18,
      col: 25,
    },
    {
      row: 19,
      col: 25,
    },
    {
      row: 20,
      col: 25,
    },
    {
      row: 23,
      col: 2,
    },
    {
      row: 23,
      col: 47,
    },
    {
      row: 24,
      col: 2,
    },
    {
      row: 24,
      col: 47,
    },
    {
      row: 25,
      col: 1,
    },
    {
      row: 25,
      col: 2,
    },
    {
      row: 25,
      col: 47,
    },
    {
      row: 25,
      col: 48,
    },
    {
      row: 27,
      col: 0,
    },
    {
      row: 27,
      col: 1,
    },
    {
      row: 27,
      col: 4,
    },
    {
      row: 27,
      col: 5,
    },
    {
      row: 27,
      col: 6,
    },
    {
      row: 27,
      col: 43,
    },
    {
      row: 27,
      col: 44,
    },
    {
      row: 27,
      col: 45,
    },
    {
      row: 27,
      col: 48,
    },
    {
      row: 27,
      col: 49,
    },
    {
      row: 28,
      col: 0,
    },
    {
      row: 28,
      col: 2,
    },
    {
      row: 28,
      col: 4,
    },
    {
      row: 28,
      col: 45,
    },
    {
      row: 28,
      col: 47,
    },
    {
      row: 28,
      col: 49,
    },
    {
      row: 29,
      col: 1,
    },
    {
      row: 29,
      col: 2,
    },
    {
      row: 29,
      col: 47,
    },
    {
      row: 29,
      col: 48,
    },
  ];

  const newMatrix = Array(30)
    .fill(0)
    .map((_, rowIndex) =>
      Array(50)
        .fill(0)
        .map((_, colIndex) => ({
          rowIndex,
          colIndex,
          value: 0,
          key: `${rowIndex}-${colIndex}`,
        }))
    );
  if (patternName === "glider-gun")
    for (let pos of gliderPattern) {
      newMatrix[pos.row][pos.col].value = 1;
    }
  else if (patternName === "pulsar") {
    for (let pos of pulsarPattern) {
      newMatrix[pos.row][pos.col].value = 1;
    }
  } else if (patternName == "max-density") {
    for (let pos of maxiDensityPattern) {
      newMatrix[pos.row][pos.col].value = 1;
    }
  } else if (patternName == "load") {
    for (let pos of loadPattern) {
      newMatrix[pos.row][pos.col].value = 1;
    }
  } else {
    for (let pos of crazyCorners) {
      newMatrix[pos.row][pos.col].value = 1;
    }
  }

  return newMatrix;
}

function simulatePattern(matrix) {
  const newMatrix = Array(30)
    .fill(0)
    .map((_, rowIndex) =>
      Array(50)
        .fill(0)
        .map((_, colIndex) => ({
          rowIndex,
          colIndex,
          value: 0,
          key: `${rowIndex}-${colIndex}`,
        }))
    );

  const rowCount = matrix.length;
  const colCount = matrix[0].length;
  const changeArr = [
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
  ];

  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      let liveCount = 0;
      for (let v of changeArr) {
        let dx = v[0];
        let dy = v[1];
        if (
          i + dx < rowCount &&
          i + dx >= 0 &&
          j + dy < colCount &&
          j + dy >= 0
        ) {
          if (matrix[i + dx][j + dy].value == 1) liveCount++;
        }
      }

      if (liveCount < 2 || liveCount > 3)
        newMatrix[i][j].value = 0; // die by under/over/population
      else if (liveCount == 3 || (liveCount == 2 && matrix[i][j].value == 1))
        newMatrix[i][j].value = 1;
    }
  }

  return newMatrix;
}

export { generatePattern, simulatePattern };
