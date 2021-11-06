export class DateHelper {
  formatDateTime(date: Date): string {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = date.getDate();
    const time = `${date.getHours}:${date.getMinutes()}`;

    return `${month} ${day} ${year}, at ${time}`;
  }
}
