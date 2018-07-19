/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Test / driver code (temporary). Eventually will get this from the server.

const tweets = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];



function renderTweets(tweets) {
  //console.log(tweets);
  //loops through 'tweets'
    tweets.forEach(function(tweet){
      let tweetData = createTweetElement(tweet);
  //calls createTweetElement for each tweet
      $(".tweet-container").append(tweetData);
    });
  }

function createTweetElement(tweet) {
  const $tweet = $("<article>").addClass("tweet");
  const $header = $("<header>")
  const $avatar = $("<img>").addClass("profile").attr("src", tweet.user.avatars.small);
  const $handle = $("<p3>").text(tweet.user.handle);
  const $name = $("<h2>").text(tweet.user.name);
  const $p = $("<p>").text(tweet.content.text)
  const $footer = $("<footer>");
  const $p1 = $("<p1>").addClass("post-date").text(moment(tweet.created_at).fromNow());
  const $p2 = $("<p2>")
  const $icon1 = $("<i>").addClass("fas fa-heart");
  const $icon2 = $("<i>").addClass("fas fa-flag");
  const $icon3 = $("<i>").addClass("fas fa-retweet");

  $($footer).append($p1, $p2, $icon1, $icon2, $icon3)
  $($header).append($avatar, $handle, $name)
  $($tweet).append($header, $p, $footer)

  return $tweet;

 };


// Test / driver code (temporary)
$(document).ready(function () {
  renderTweets(tweets);
});