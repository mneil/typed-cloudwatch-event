type SnakeToCamelCase<S extends string> =
  S extends `${infer P1}_${infer P2}${infer P3}`
    ? `${Lowercase<P1>}${Uppercase<P2>}${SnakeToCamelCase<P3>}`
    : Lowercase<S>;

type CamelCase<T> = {
  [K in keyof T as SnakeToCamelCase<string & K>]: T[K] extends {}
    ? CamelCase<T[K]>
    : T[K];
};

interface SnakeCase {
  bar_value: string;
  baz_value: {
    blah_test: number;
  };
}

const transformed: CamelCase<SnakeCase> = {
  bazValue: {
    blahTest: 2,
  },
  barValue: 'test',
};

transformed.barvalue;
