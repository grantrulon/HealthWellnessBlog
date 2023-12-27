

export function toDisplayDate(utcDate: string) {
    var date = new Date(utcDate)
    return date.toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"}) ;
}