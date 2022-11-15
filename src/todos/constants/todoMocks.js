import dayjs from 'dayjs';

const addDayToCurrentDate = (daysNumber) => {
  return dayjs().add(daysNumber, 'd').toDate();
};

export const STATUS = {
  Pending: 'Pending',
  InProgress: 'In Progress',
  Completed: 'Completed'
};

export const TODOS = [
  {
    id: 0,
    createdDate: addDayToCurrentDate(2),
    status: STATUS.Pending,
    title: 'Do the dishes'
  },
  {
    id: 1,
    createdDate: addDayToCurrentDate(0),
    status: STATUS.InProgress,
    title: 'Finish homework'
  },
  {
    id: 2,
    createdDate: addDayToCurrentDate(-1),
    status: STATUS.Completed,
    title: 'Do another dishes'
  },
  {
    id: 3,
    createdDate: addDayToCurrentDate(-5),
    status: STATUS.Completed,
    title: 'Go to dentist'
  },
  {
    id: 4,
    createdDate: addDayToCurrentDate(-7),
    status: STATUS.Pending,
    title: 'Buy some cloth'
  }
];
