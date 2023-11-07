function order_sandwich(items: string[]): void {
    let sandwichSummary = 'Your sandwich includes: ';
    for (const item of items) {
      sandwichSummary += `${item}, `;
    }
    sandwichSummary = sandwichSummary.substring(0, sandwichSummary.length - 2);
  
    console.log(sandwichSummary);
  }
  
  // Call the function three times, using a different number of arguments each time
  order_sandwich(['bread', 'cheese', 'ham']);
  order_sandwich(['bread', 'cheese', 'tomato', 'lettuce']);
  order_sandwich(['bread', 'cheese', 'turkey', 'bacon', 'avocado']);
  