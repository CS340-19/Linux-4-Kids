import { Lesson } from '../app/classes/lesson/lesson';

export const LESSONS: Lesson[] = [
  {
    id: 1,
    title: "How to Make Money",
    parts: [
      { id: 2, title: "Have Money", parts: [] },
      { id: 3, title: "Invest Money", parts: []},
      { id: 4, title: "Profit", parts: []}
    ]
  },
  {
    id: 5,
    title: "How to Lose Money",
    parts: [
      { id: 6, title: "Have Money", parts: [] },
      { id: 7, title: "Buy Big House", parts: []},
      { id: 8, title: "Declare Bankruptcy", parts: [] }
    ]
  },
];
