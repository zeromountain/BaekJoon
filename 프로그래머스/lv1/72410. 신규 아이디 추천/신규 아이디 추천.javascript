function solution(newId) {
  const recommended = newId
    .toLowerCase()
    .replace(/[^\w\-\.]/g, '') // 모든 문자와 마침표(.)를 제외하고 공백 처리
    .replace(/\.+/g, '.') // 1개이상의 모든 마침표(.)를 마침표 하나로 처리
    .replace(/^\.|\.$/g, '') // 첫 문자에 마침표가 있거나 문자의 끝 문자에 마침표가 있으면 공백 처리
    .replace(/^$/, 'a') // 문자가 없는 경우 a로 처리
    .slice(0, 15) // 문자열의 길이를 15까지 제한
    .replace(/\.$/, ''); // 문자열의 마지막에 마침표가 있으면 공백 처리
  return recommended.length > 2
    ? recommended
    : recommended.padEnd(3, recommended[recommended.length - 1]); // 문자열의 길이가 2보다 작으면 마지막 문자열을 추가
}