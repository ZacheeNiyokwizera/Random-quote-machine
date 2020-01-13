var quotes = {
    '1': ["He who is slow to be angry has great good sense; but he whose spirit is over-quick gives support to what is foolish.", "Proverbs 14:29"],
    '2': ["The only effect of pride is fighting; but wisdom is with the quiet in spirit.", "Proverbs 13:10"],
    '3': ["Then have no care for tomorrow: tomorrow will take care of itself. Take the trouble of the day as it comes.", "Matthew 6:34"],
    '4': ["But I say to you, Have love for those who are against you, and make prayer for those who are cruel to you.", "Matthew 5:44"],
    '5': ["But it is important for you to keep this fact in mind, that the head of every man is Christ; and the head of the woman is the man, and the head of Christ is God.", "I Corinthians 11:3"],
    '6': ["Keep in mind this thought, that as a son is trained by his father, so you have been trained by the Lord your God.", "Deuteronomy 8:5"],
    '7': ["It is the same to me if I am looked down on or honoured; everywhere and in all things I have the secret of how to be full and how to go without food; how to have wealth and how to be in need.I am able to do all things through him who gives me strength.", "Philippians 4:12,13"],
    '8': ["God is love, and everyone who has love is in God, and God is in him.", "I John 4:16"],
    '9': ["When I was a child, I made use of a child's language, I had a child's feelings and a child's thoughts: now that I am a man, I have put away the things of a child.", "I Corinthians 13:11"],
    '10': ["Love is never tired of waiting; love is kind; love has no envy; love has no high opinion of itself, love has no pride.", "I Corinthians 13:4"],
    '11': ["When you go through the waters, I will be with you; and through the rivers, they will not go over you: when you go through the fire, you will not be burned; and the flame will have no power over you.", "Isaiah 43:2"],
    '12': ["And you husbands, give thought to your way of life with your wives, giving honour to the woman who is the feebler vessel, but who has an equal part in the heritage of the grace of life; so that you may not be kept from prayer.", "I Peter 3:7"]
}
$(document).ready(function() {
    i = Math.floor(Math.random() * 12) + 1;
    $('p').text("''" + quotes[i][0] + "''");
    $('#author').text(quotes[i][1]);

    $('#tweet').click(function() {
        $('#tweetter').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent("''" + quotes[i][0] + "''" + quotes[i][1]));
    });

    $('#button').click(function() {
        $('#block').fadeOut(1500, function() {
            i = Math.floor(Math.random() * 12) + 1;
            $('p').text("''" + quotes[i][0] + "''");
            $('#author').text(quotes[i][1]);
            $('#block').fadeIn(1500);
        });

    });
});