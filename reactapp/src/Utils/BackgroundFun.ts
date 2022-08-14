export function colorMutate(value: string): string {
    const place = Math.floor(Math.random() * 3);
    const colors = [
      parseInt(value.substring(1, 3), 16),
      parseInt(value.substring(3, 5), 16),
      parseInt(value.substring(5), 16),
    ];
    const add =
      colors[place] === 0
        ? 1
        : colors[place] === 255
        ? 0
        : Math.random() > .5;
    colors[place] = colors[place] + (add ? 1 : -1);
    return (
      "#" +
      colors[0].toString(16) +
      colors[1].toString(16) +
      colors[2].toString(16)
    );
  }

