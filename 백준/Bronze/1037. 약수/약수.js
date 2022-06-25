function sol(input) {
  const divisors = input[1].split(" ");
  return Math.min(...divisors) * Math.max(...divisors);
}

const input = [];
require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", (line) => {
    input.push(line);
  })
  .on("close", () => {
    console.log(sol(input));
    process.exit();
  });