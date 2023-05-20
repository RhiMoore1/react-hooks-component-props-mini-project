import React from "react";

function MinutesToRead({minutes}) {
    const coffeeEmoji = "☕️";
    const sushiEmoji = "🍱";
    const timeToRead = minutes;
    const fiveMinuteIncrement = Math.ceil(minutes/5);
    const tenMinuteIncrement = Math.ceil(minutes/10);
    const coffeeEmojiCount = coffeeEmoji.repeat(fiveMinuteIncrement);
    const sushiEmojiCount = sushiEmoji.repeat(tenMinuteIncrement);
    
    return (
        <div>
          {timeToRead < 30 ? (
            <div>{timeToRead} {coffeeEmojiCount} </div>
          ) : (
            <div>{timeToRead} {sushiEmojiCount}</div>
          )}
        </div>
      );
}

export default MinutesToRead;