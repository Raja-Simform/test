function getContentInfo(content) {
    // Return different information based on the content type
    if (content.type === 'image') {
        return "".concat(content.type, ":").concat(content.dimensions.height, "x").concat(content.dimensions.width);
    }
    else if (content.type === "video") {
        return "".concat(content.type, ":").concat(content.duration, "minutes");
    }
    else {
        return "".concat(content.type, ":").concat(content.duration, "minutes by ").concat(content.artist ? content.artist : "Unknown Artist");
    }
}
var image = { type: 'image', url: 'pic.jpg', dimensions: { width: 100, height: 200 } };
var video = { type: 'video', url: 'movie.mp4', duration: 120 };
var audio = { type: 'audio', url: 'song.mp3', duration: 180, artist: 'Artist Name' };
console.log(getContentInfo(image)); // Should output: "Image: 100x200 pixels"
console.log(getContentInfo(video)); // Should output: "Video: 2 minutes"
console.log(getContentInfo(audio)); // Should output: "Audio: 3 minutes by Artist Name" or "Audio: 3 minutes by Unknown Artist" if no artist
