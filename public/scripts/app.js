/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Test / driver code (temporary). Eventually will get this from the server.



// ===== Renders and prepends to container =====
function renderTweets(tweets) {
  $(".tweet-container").empty();
//loops through 'tweets'
  tweets.forEach(function(tweet){
    //calls createTweetElement for each tweet
    let tweetData = createTweetElement(tweet);
    $(".tweet-container").prepend(tweetData);
  });
}

// ===== Creates new tweet =====
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

  $($footer).append($p1, $p2, $icon1, $icon2, $icon3);
  $($header).append($avatar, $handle, $name);
  $($tweet).append($header, $p, $footer);

  return $tweet;
};

// ===== Ajax request to load new tweets =====
function loadTweets() {
  $.get("/tweets").done(renderTweets)
  $("#tweetPost").val('');
  $("span.counter").text(140);
  $(".new-tweet p2").text('')

};

// ===== Compose New Tweet =====
$(document).ready(function() {
    //  ==== Compose button toggle ====
  $(".new-tweet").hide();
  $("#compose").on("click", () => {
    $("#compose").show();
    $(".new-tweet").slideToggle(600);
    $("#tweetPost").focus();
  })

  //   ===== Submit Tweet ======
  $("#tweetForm").on("submit", function(event) {
    event.preventDefault();
    let tweetPost = $("#tweetPost");
    let tweetData = $("#tweetPost").serialize();

  // ===== Validates composed tweet =====  
  if (tweetPost.val().length === 0) {
    $(".new-tweet p2").text("Cannot post empty Tweet!")
  } else if (tweetPost.val().length > 140)
    $(".new-tweet p2").text("You must erase text before you can post")
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


// ===== Loads Page Previous Tweets =====
$(document).ready(function () {
  $.get("/tweets").done(renderTweets)
}); 