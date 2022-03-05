import { padZero } from './number';

export const formatDate = (date: Date) => {
    return `${date.getFullYear()}-${padZero(date.getMonth()+1, 2)}-${padZero(date.getDay(), 2)} ${padZero(date.getHours(), 2)}:${padZero(date.getMinutes(), 2)}`;
}