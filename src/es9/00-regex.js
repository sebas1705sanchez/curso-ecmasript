const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matcher = regex.exec('2022-01-01');
console.table(matcher);