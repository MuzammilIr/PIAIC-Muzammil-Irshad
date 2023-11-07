function make_car<T extends { name: string; value: string }>(
    manufacturer: string,
    model: string,
    ...options: T[]
  ): { manufacturer: string; model: string; [key: string]: string } {
    const car: { manufacturer: string; model: string; [key: string]: string } = { manufacturer, model };
  
    for (const option of options) {
      car[option.name] = option.value;
    }
  
    return car;
  }
  