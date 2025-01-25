const initialState = { count: 0 };

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "incrementByAmount":
    case "addExpense":
      return { count: state.count + action.payload };
    case "decrementByAmount":
    case "subtractExpense":
      return { count: state.count - action.payload };
    case "multiplyByAmount":
      return { count: state.count * action.payload };
    case "divideByAmount":
    case "splitBill":
      return { count: state.count / action.payload };
    case "reset":
    case "resetExpenses":
      return { count: 0 };
    case "factorial":
      return { count: factorial(state.count) };
    case "fibonacciUpTo":
      return { count: generateFibonacci(state.count).join(", ") };
    case "isPrime":
      return { count: isPrime(state.count) ? "Prime" : "Not Prime" };
    case "convertToBinary":
      return { count: state.count.toString(2) };
    case "percentageOf":
    case "calculateTip":
      return { count: (state.count * action.payload) / 100 };   
    case "logarithm":
      return { count: Math.log10(state.count) }; 
    case "exponential":
      return { count: Math.exp(state.count) };
    case "mean":
      return { count: calculateMean(action.payload) };   
    case "calculateSavings":
      return { count: action.payload - state.count }; 
    case "convertToRadians":
      return { count: (state.count * Math.PI) / 180 };
    case "sin":
      return { count: Math.sin((state.count * Math.PI) / 180) };
    case "cos":
      return { count: Math.cos((state.count * Math.PI) / 180) };
    case "tan":
      return { count: Math.tan((state.count * Math.PI) / 180) };
    case "generatePrimes":
      return { count: generatePrimes(state.count).join(", ") };
    case "gcd":
      return { count: gcd(state.count, action.payload) };
    case "calculateInterest":
      return {
        count: (state.count * action.payload.rate * action.payload.days) / 100,
      };
    case "percentageChange":
      return {
        count:
          ((action.payload.newValue - action.payload.oldValue) /
            action.payload.oldValue) *
          100,
      };
    case "rollDice":
      return { count: Math.floor(Math.random() * action.payload) + 1 };
    case "guessNumber":
      const random = Math.floor(Math.random() * 100) + 1; // Range: 1 to 100
      return {
        count: random === state.count ? "Correct!" : `Try Again! (${random})`,
      };
    default:
      return state;
  }
}

function factorial(num) {
  if (num < 0) return "Invalid";
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
}

function generateFibonacci(n) {
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.slice(0, n);
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function calculateMean(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b, 0);
  return sum / numbers.length;
}

function generatePrimes(limit) {
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) primes.push(i);
  }
  return primes;
}

function gcd(a, b) {
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
}

export { initialState, counterReducer };
