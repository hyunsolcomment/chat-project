export function hm2str(date: Date) {
    // 시간을 2자리 숫자로 포맷팅
    const hours = String(date.getHours()).padStart(2, '0');
    // 분을 2자리 숫자로 포맷팅
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    // "HH:MM" 형식의 문자열 반환
    return `${hours}:${minutes}`;
}