// Write a generic type AsyncReturnType<T> that extracts the return type of an asynchronous function (i.e., a function that returns a Promise).

async function fetchData(url: string): Promise<string> {
    return "data";
  }
  type Awaitedme<T>=T extends Promise<infer A>?Awaitedme<A>:T;
  type FetchDataReturnType = AsyncReturnType<typeof fetchData>;  // string
  type AsyncReturnType<T>=T extends (...args:any[])=>infer A?Awaitedme<A>:never;