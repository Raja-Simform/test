
type SplitString<T,U extends string,Z extends any[]=[]>=T extends `${infer A}${U }${infer B}`?SplitString<B,U,[...Z,A]>:[...Z,T];

type S1 = SplitString<"a,b,c", ",">;        // Expected: ["a", "b", "c"]
type S2 = SplitString<"foo-bar-baz", "-">;  // Expected: ["foo", "bar", "baz"]
type S3 = SplitString<"hello", ",">;        // Expected: ["hello"]