/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Test / driver code (temporary). Eventually will get this from the server.




function renderTweets(tweets) {
  //loops through 'tweets'
    tweets.forEach(function(tweet){
      let tweetData = createTweetElement(tweet);
  //calls createTweetElement for each tweet
      $(".tweet-container").prepend(tweetData);
    });
  }

  //===== Creates 
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

function loadTweets() {
  $.get("/tweets").done(renderTweets)
}

$(document).ready(function() {
  $("#tweetForm").on("submit", function(event) {
    event.preventDefault();
    let tweetPost = $("#tweetPost")
    let tweetData = $("#tweetForm").serialize();
  if (tweetPost.val().length === 0) {
    alert("Cannot post empty field")

  } else if (tweetPost.val().length > 140)
      alert("140 character limit, please edit your post.")  
    else {
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: tweetData,
    })  
      loadTweets();
  }
  })
});






/*Test  driver code (temporary)
$(document).ready(function () {
  renderTweets(tweets);
}); */