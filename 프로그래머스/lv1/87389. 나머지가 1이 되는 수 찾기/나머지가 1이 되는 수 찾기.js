function solution(n) {
    var answer = [];
    for (let i =0; i<=n; i++) {
        if (n%i == 1) answer.push(i)
    }
    return answer[0];
}