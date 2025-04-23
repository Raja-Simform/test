# test
Set -4
Q1>
TypeScript
```typescript
type MediaContent = 
  | { type: 'image'; url: string; dimensions: { width: number; height: number } }
  | { type: 'video'; url: string; duration: number }
  | { type: 'audio'; url: string; duration: number; artist?: string };
  
function getContentInfo(content: MediaContent): string {
  // Return different information based on the content type
}

const image: MediaContent = { type: 'image', url: 'pic.jpg', dimensions: { width: 100, height: 200 } };
const video: MediaContent = { type: 'video', url: 'movie.mp4', duration: 120 };
const audio: MediaContent = { type: 'audio', url: 'song.mp3', duration: 180, artist: 'Artist Name' };
console.log(getContentInfo(image)); // Should output: "Image: 100x200 pixels"
console.log(getContentInfo(video)); // Should output: "Video: 2 minutes"
console.log(getContentInfo(audio)); // Should output: "Audio: 3 minutes by Artist Name" or "Audio: 3 minutes by Unknown Artist" if no artist
```
 
Q2>

```TypeScript
type S1 = SplitString<"a,b,c", ",">;        // Expected: ["a", "b", "c"]
type S2 = SplitString<"foo-bar-baz", "-">;  // Expected: ["foo", "bar", "baz"]
type S3 = SplitString<"hello", ",">;        // Expected: ["hello"]```
 
Q3>
TypeScript
// Write a generic type AsyncReturnType<T> that extracts the return type of an asynchronous function (i.e., a function that returns a Promise).
async function fetchData(url: string): Promise<string> {
  return "data";
}
type FetchDataReturnType = AsyncReturnType<typeof fetchData>;  // string


Q1>JS

// Chunk Array into n length Equal Parts
const arr = [1, 2, 3, 4, 5, 6, 7];
output: [[1, 2, 3], [4, 5, 6], [7]]
 
 
Q2>>js
// Build Object from Key Paths
const paths = [
  { path: "user.name.first", value: "John" },
  { path: "user.name.last", value: "Doe" },
  { path: "user.age", value: 30 }
];
output:
{
  user: {
    name: {
      first: "John",
      last: "Doe"
    },
    age: 30
  }
}
 
Q3>JS

// getElementsByTagName accepts element and HTML tag.
getElementsByTagName(document.body, 'a'); // returns array of all anchor tags from who are part of body element.