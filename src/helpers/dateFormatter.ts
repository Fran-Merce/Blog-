import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
export const dateFormmater = (date: string | Date) => {
  dayjs.extend(relativeTime);
  return dayjs(date).fromNow();
};
