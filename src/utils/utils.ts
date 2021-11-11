import dayjs from 'dayjs'

const ONE_MINUTE = 60 * 1000;
const ONE_HOUR = 60 * ONE_MINUTE;
const ONE_DAY = ONE_HOUR * 24;

export function dateToString(date: Date): string {
    const dayDate = dayjs(date);

    const diff = dayjs().diff(dayDate);
    const diffDay = dayjs(diff);

    if(diff < ONE_MINUTE) {
        return 'Just now';
    }

    if(diff < ONE_HOUR) {
        return `${diffDay.minute()} minutes ago`;
    }

    if(diff < ONE_DAY) {
        return `${diffDay.hour()} hours ago`;
    }

    return dayDate.format('MM/DD/YYYY');
}