type Routes = {
  [key: string]: string;
};

type Replacements = {
  [key: string]: string | number;
};

export const routes: Routes = {
  home: '/',
};

export function route(name: string, replacements: Replacements = {}): string {
  let route = routes[name] || null;

  if (!route) {
    throw new Error(`Route "${name}" not found!`);
  }

  Object.keys(replacements).forEach((key: string) => {
    route = (route as string).replace(`:${key}`, replacements[key] as string);
  });

  return route;
}
