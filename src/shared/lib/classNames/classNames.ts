type Mods = Record<string, string | boolean>;

type ClassNames = (cls: string, mods?: Mods, additional?: string[]) => string

export const classNames: ClassNames = (cls, mods = {}, additional = []) => [
  cls,
  ...additional.filter(Boolean),
  ...Object.entries(mods)
    .filter(([_, value]) => Boolean(value))
    .map(([className]) => className),
].join(' ');
