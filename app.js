// "use strict";
const quotes = [
  {
    quote:
      "He who is slow to be angry has great good sense; but he whose spirit is over-quick gives support to what is foolish.",
    author: "Proverbs 14:29"
  },
  {
    quote:
      "The only effect of pride is fighting; but wisdom is with the quiet in spirit.",
    author: "Proverbs 13:10"
  },
  {
    quote:
      "Then have no care for tomorrow: tomorrow will take care of itself. Take the trouble of the day as it comes.",
    author: "Matthew 6:34"
  },
  {
    quote:
      "But I say to you, Have love for those who are against you, and make prayer for those who are cruel to you.",
    author: "Matthew 5:44"
  },
  {
    quote:
      "But it is important for you to keep this fact in mind, that the head of every man is Christ; and the head of the woman is the man, and the head of Christ is God.",
    author: "I Corinthians 11:3"
  },
  {
    quote:
      "Keep in mind this thought, that as a son is trained by his father, so you have been trained by the Lord your God.",
    author: "Deuteronomy 8:5"
  },
  {
    quote:
      "It is the same to me if I am looked down on or honoured; everywhere and in all things I have the secret of how to be full and how to go without food; how to have wealth and how to be in need.I am able to do all things through him who gives me strength.",
    author: "Philippians 4:12,13"
  },
  {
    quote:
      "God is love, and everyone who has love is in God, and God is in him.",
    author: "I John 4:16"
  },
  {
    quote:
      "When I was a child, I made use of a child's language, I had a child's feelings and a child's thoughts: now that I am a man, I have put away the things of a child.",
    author: "I Corinthians 13:11"
  },
  {
    quote:
      "Love is never tired of waiting; love is kind; love has no envy; love has no high opinion of itself, love has no pride.",
    author: "I Corinthians 13:4"
  },
  {
    quote:
      "When you go through the waters, I will be with you; and through the rivers, they will not go over you: when you go through the fire, you will not be burned; and the flame will have no power over you.",
    author: "Isaiah 43:2"
  },
  {
    quote:
      "And you husbands, give thought to your way of life with your wives, giving honour to the woman who is the feebler vessel, but who has an equal part in the heritage of the grace of life; so that you may not be kept from prayer.",
    author: "I Peter 3:7"
  },
  {
    quote:
      "The fear of the LORD is the beginning of knowledge, but fools despise wisdom and instruction.",
    author: "Proverbs 1:7"
  },
  {
    quote:
      "Those who conceal their sins do not prosper, but those who confess and renounce them find mercy.",
    author: "Proverbs 28:13"
  },
  {
    quote:
      "Commit to the LORD whatever you do, and he will establish your plans.",
    author: "Proverbs 16:3"
  },
  {
    quote:
      "In their hearts human beings plan their course, but the LORD establishes their steps.",
    author: "Proverbs 16:9"
  },
  {
    quote:
      "A new command I give you: Love one another. As I have loved you, so you must love one another. 35 By this everyone will know that you are my disciples, if you love one another.",
    author: "John 13:34-35"
  }
];

const displayRandomQuote = () => {
  const i = Math.floor(Math.random() * 17);
  $("p").text(`''${quotes[i].quote}''`);
  $("#author").text(quotes[i].author);
};

$(document).ready(() => {
  displayRandomQuote();
});

$("#tweet").click(() => {
  let i = quotes.quote;
  const tweet = `'${quotes[1].quote}'' ${quotes[1].author}'`;
  $("#tweet").attr(
    "href",
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`
  );
});

$("#verse-but").click(() => {
  $("#block")
    .fadeOut(1000, () => {
      displayRandomQuote();
    })
    .fadeIn(1000);
});
