/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Show = require('../api/show/show.model');
var User = require('../api/user/user.model');

Show.find({}).remove(function() {
  Show.create({
    "id" : 83277,
    "Airs_DayOfWeek" : "Thursday",
    "FirstAired" : new Date("2008-10-02T00:00:00.000Z"),
    "Network" : "TV Tokyo",
    "Overview" : "Despite Ryuji Takasu's gentle personality, his eyes make him look like an intimidating delinquent so he is utterly hopeless about his chances of getting a girlfriend anytime soon, and does not have many close friends either. After being greeted by his hungover mother in the morning, Ryuji goes to school and is happy to find that he gets to be in the same class as his best friend Yusaku Kitamura and crush Minori Kushieda. However, it is then that he unexpectedly knocks into \"the school's most dangerous animal of the highest risk level\" — Taiga Aisaka — who just happens to also be in his class, and is a good friend of Minori.",
    "Rating" : 9.4,
    "RatingCount" : 25,
    "Runtime" : 25,
    "SeriesName" : "Toradora!",
    "Status" : "Ended",
    "banner" : "graphical/83277-g.jpg",
    "fanart" : "fanart/original/83277-8.jpg",
    "poster" : "posters/83277-10.jpg",
    "Episodes" : [
      {
        "id" : 441319,
        "EpisodeNumber" : 1,
        "FirstAired" : new Date("2009-02-22T00:00:00.000Z"),
        "Overview" : "Taiga-tan DVD shorts from the Toradora DVDs.",
        "Rating" : 4.7,
        "RatingCount" : 3,
        "SeasonNumber" : 0
      },
      {
        "id" : 2686621,
        "EpisodeNumber" : 2,
        "FirstAired" : new Date("2009-04-22T00:00:00.000Z"),
        "Overview" : "Short Toradora DVD clips featuring the Toradora cast eating and discussing various food.",
        "Rating" : null,
        "RatingCount" : 0,
        "SeasonNumber" : 0
      },
      {
        "id" : 2686631,
        "EpisodeNumber" : 3,
        "FirstAired" : new Date("2009-06-24T00:00:00.000Z"),
        "Overview" : "Short Toradora DVD clips featuring the Toradora cast eating and discussing various food.",
        "Rating" : null,
        "RatingCount" : 0,
        "SeasonNumber" : 0
      },
      {
        "id" : 2686641,
        "EpisodeNumber" : 4,
        "FirstAired" : new Date("2009-08-26T00:00:00.000Z"),
        "Overview" : "Short Toradora DVD clips featuring the Toradora cast eating and discussing various food.",
        "Rating" : null,
        "RatingCount" : 0,
        "SeasonNumber" : 0
      },
      {
        "id" : 4225416,
        "EpisodeNumber" : 5,
        "FirstAired" : new Date("2011-12-21T00:00:00.000Z"),
        "Overview" : "An unaired episode included in the Blu-ray box set. Kitamura brings a gigantic bentou to school: His parents are on a business trip, so his grandma is taking care of him for the time being. While everyone else is happy to be allowed to eat from this bentou, Takasu considers it a challenge to his own housewife skills; during the following days he tries to make creative special bentous in order to \"beat\" his mysterious opponent... before he learns what making bentou is ultimately about.",
        "Rating" : 10,
        "RatingCount" : 1,
        "SeasonNumber" : 0
      },
      {
        "id" : 393406,
        "EpisodeNumber" : 1,
        "FirstAired" : new Date("2008-10-02T00:00:00.000Z"),
        "Overview" : "Ryuji Takasu is discontent about how his eyes make him look like an intimidating delinquent. He wants to get closer to a girl he liked named Minori Kushieda, but he has not been able to tell her how he feels. On the first day of his second year of high school, he runs into a short girl named Taiga Aisaka who is known for snapping at others and her outward brutality. By coincidence, Taiga and Minori are in Ryuji's class this year. Taiga accidentally puts a love letter in Ryuji's bag, mistaking his for his friend Yusaku's, and Taiga comes to Ryuji's house that night to kill him for knowing that she likes Yusaku. Taiga finds out that Ryuji likes Minori, who is also Taiga's good friend, and Ryuji tells her that he will do anything to help her with Yusaku. Ryuji finds out the next morning that Taiga is already living in an apartment building right next door to his house, and when he comes over, he cleans the kitchen area and serves her food.",
        "Rating" : 8.9,
        "RatingCount" : 7,
        "SeasonNumber" : 1
      },
      {
        "id" : 395522,
        "EpisodeNumber" : 2,
        "FirstAired" : new Date("2008-10-09T00:00:00.000Z"),
        "Overview" : "Ryuji figures out that for Taiga to help him get closer to Minori, he has to first help her get closer to Yusaku. During school, Taiga makes some cookies and plans to give them to Yusaku, but she falls off the stairs, throwing them out the window, and Ryuji breaks her off. Since Ryuji and Taiga are together so often, a misunderstanding begins among their classmates, thinking that Ryuji and Taiga are going out together. Taiga sets the record straight the next day, and even confesses her love to Yusaku, but he just wants to continue being friends.",
        "Rating" : 8.6,
        "RatingCount" : 5,
        "SeasonNumber" : 1
      },
      {
        "id" : 395523,
        "EpisodeNumber" : 3,
        "FirstAired" : new Date("2008-10-16T00:00:00.000Z"),
        "Overview" : "After Ryujo's rice cooker breaks, Taiga takes him to a nearby family restaurant where, Ryuji's find out, Minori is working part-time. Minori tells Ryuji that she has several part-time jobs, but he later wonders if there is a special reason why Minori needs more money. The next day, Ryuji and Taiga by coincidence meet Minori at another of her part-time jobs, and the two help out for the day, despite Taiga wanting to back down from the start. Ryuji and Minori get locked inside the storehouse, and Ryuji starts to learn more about why Minori is often so cheerful.",
        "Rating" : 8.4,
        "RatingCount" : 5,
        "SeasonNumber" : 1
      },
      {
        "id" : 400786,
        "EpisodeNumber" : 4,
        "FirstAired" : new Date("2008-10-23T00:00:00.000Z"),
        "Overview" : "After viewing some blurred images Taiga took of Yusaku, Ryuji offers to take pictures of him for Taiga. During school, Taiga speaks out to the student council president, but is stopped by Yusaku which Taiga becomes both happy and depressed about. Ryuji manages to take several photos of Yūsaku, but he later finds out about them. Yusaku tells Ryuji that he confessed to Taiga a year ago that he liked her, but she quickly turned him down, only to end up liking him back. Taiga later recounts this to Ryūji, and she gets mad about telling such embarrassing things to him.",
        "Rating" : 8.5,
        "RatingCount" : 4,
        "SeasonNumber" : 1
      },
      {
        "id" : 403681,
        "EpisodeNumber" : 5,
        "FirstAired" : new Date("2008-10-30T00:00:00.000Z"),
        "Overview" : "When at the restaurant where Minori works, Yūsaku arrives with the model Ami Kawashima who is also his childhood friend. When Yūsaku and Ryūji excuse themselves, Yūsaku shows Ryūji how Ami's true self is a conceited and manipulative person, very different from her being a self-proclaimed \"air head\". Taiga quickly comes to dislike Ami, and even slaps her in the restaurant. Ami tries to make Taiga think Yūsaku hates her now because of how she acted, but Ryūji assures her that is not the case.",
        "Rating" : 8.800000000000001,
        "RatingCount" : 4,
        "SeasonNumber" : 1
      },
      {
        "id" : 403682,
        "EpisodeNumber" : 6,
        "FirstAired" : new Date("2008-11-06T00:00:00.000Z"),
        "Overview" : "After being chased by what can only be described as a psycho-fanboy, Kawashima takes refuge at Taiga's condo where she was subjected to hours of torture in the form of what Taiga describes as \"Rapid-Fire Impressions\". Soon Yusaku, upon learning what happened in Taiga's condo, asks Taiga and Ryuji to befriend Kawashima due to the fact that they know her true self. However, before any progress could take place, Ryuji, Taiga, Minori, and Kawashima takes part in a clean-up event. However, due to Taiga and Kawashima getting into each other's skin, they split into two groups leaving Ryuji with Kawashima. During the event, the same psycho-fanboy appears and at which point Kawashima hides. She then reveals to Ryuji why she transferred school. Unfortunately for the psycho-fanboy, he crosses paths with Taiga, who proceeds to beat him up with her garbage bag when the fanboy tried to take a picture of her. Impressed with Taiga's fearlessness and honesty, Kawashima shows her darker self and chases down the stalker-fanboy and effectively drives him out. After the mishap, she takes shelter at Ryuji's house where she shows a love interest in Ryuji, asking him whether he would fall in love with her by showing her true self...and then, Taiga walks in.",
        "Rating" : 8.800000000000001,
        "RatingCount" : 4,
        "SeasonNumber" : 1
      },
      {
        "id" : 403683,
        "EpisodeNumber" : 7,
        "FirstAired" : new Date("2008-11-13T00:00:00.000Z"),
        "Overview" : "The school's pool has finally opened for the summer season, and Minori, Ami, and Taiga go buy swimsuits with Ryūgi. Ami and Minori easily pick out swimsuits while Taiga has trouble due to her small chest size. Later, Ryūji realizes Taiga's problem and decides to create padding to make her breasts look bigger and fill out her swimsuit. At the pool, people are going around throwing others into the pool, and Ami throws Taiga into the pool. It turns out Taiga cannot swim, and when Ryūji goes to save her, she tells him one of the pads came out. Ryūji manages to work everything out and Taiga is saved. Back at the classroom, Ami and Taiga argue until Minori shows up, telling them to settle things with a sports contest.",
        "Rating" : 8.5,
        "RatingCount" : 4,
        "SeasonNumber" : 1
      },
      {
        "id" : 403684,
        "EpisodeNumber" : 8,
        "FirstAired" : new Date("2008-11-20T00:00:00.000Z"),
        "Overview" : "The sports contest between Taiga and Ami is decided, and if Ami wins, Ryūji will come over to her villa over summer break, leaving Taiga alone. When the class passes around a paper, taking bets on who will win Ryūji in the end, Ryūji places his bet on Taiga and helps her practice. However, after Ryūji insists that she wants to win for Kitamura and says that he would go to Ami's villa alone if she wanted, Taiga is furious and refuses to compete. As the competition begins, Taiga is nowhere to be found, but when Taiga realizes that Ryūji packed her lunch with extra meat, like how she asked, she decides to participate. When Taiga hurts her ankle, Ryuuji jumps into the pool to stop her from continuing, but Taiga declares that she wants to win for him and he should be happy about that, so Ryuuji lets her go. However, when Taiga is pushing for the lead, a few boys are pushed into the pool and Ryūji is knocked out. Realizing that Ryūji is in danger, Taiga turns around and goes to save him, losing the match. Afterward, Ryūji regains consciousness for a brief moment and Taiga is shaken and angry to the point where she screams that Ryūji is hers. In the end, all the main characters decide to visit Ami's villa to spend their summer break together.",
        "Rating" : 8,
        "RatingCount" : 3,
        "SeasonNumber" : 1
      },
      {
        "id" : 410578,
        "EpisodeNumber" : 9,
        "FirstAired" : new Date("2008-11-27T00:00:00.000Z"),
        "Overview" : "After a horrible dream that Ryūji and Taiga both share, Taiga decides to create a plan to avoid the reality of being married to a begging Ryūji (as that was the dream they shared), hold a badminton contest against Ryūji to see who will \"support the other side.\" Ryūji wins and Taiga agrees to help him with a plan to get Minori closer to Ryūji by scaring her. The two arrive at the train station to meet Minori and Yūsaku attracting a lot of attention, doing exercises. The two convince Ryūji and Taiga to join in, driving Ami away in fear of being seen with such weird people. They finally arrive at Ami's villa and while Ryūji cleans the house, the others go to the beach and play a bit. Yūsaku and Minori go grocery shopping, while the rest clean the house. After dinner, Ryūji and Minori talk about love and ghosts outside while having ice cream that Minori bought. The two go back inside and Taiga orders Ryūji to make a midnight snack since she couldn't eat the super-spicy curry that Ryūji made earlier. The two go to their rooms, and Ryūji finds strands of hair and a sticky substance on his bed, while one of Taiga's dresses is warm and is covered with the same substance as Ryūji's. Banging sounds emerge from the door and the balcony door as the two grip each other in fear.",
        "Rating" : 8.800000000000001,
        "RatingCount" : 4,
        "SeasonNumber" : 1
      },
      {
        "id" : 412417,
        "EpisodeNumber" : 10,
        "FirstAired" : new Date("2008-12-04T00:00:00.000Z"),
        "Overview" : "Ryuji and Taiga stay up all night, still unsure on what had occurred last night and how to scare Minori. Yusaku overhears them and wants to help, believing that Minori loves being terrified, and enlists Ami in helping too. They decide to pull a massive scare by taking a walk through a hidden cave that Ami knows of, filled with traps designed to scare Minori. However, Ami backs out after Ryuji refuses to tell her why he wants to do this. However, she eventually decides to help out and leads the group into the cave, where Yusaku has planted many pathetic scary traps. Ami quickly decides to leave via a secret passageway, and Ryuji follows her. While alone, Ami tells Ryuji that Minori is like the sun to his moon, and will eventually burn him out. Ami further states that a person like her, afraid of being alone, is better suited for him. Quickly things get out of hand as Yusaku and Minori disappear, and the mysterious hair and seaweed from last night appears again. However, a terrified Ryuji and Taiga realize that Yusaku and Minori were only playing a trick on them, which included last night's scare. The two claim to have known what Ryuji and Taiga were up to, but Minori appreciated it for being so thrilling. Later that night, Ryuji talks to Ami and Minori about thinking about being alone and discovering ghosts, respectively, while a saddened Taiga watches him. The next day, the group returns home and Ryuji and Taiga head to the store, while she begins to experience even more confusion and sadness when around him.",
        "Rating" : 8.800000000000001,
        "RatingCount" : 4,
        "SeasonNumber" : 1
      },
      {
        "id" : 414717,
        "EpisodeNumber" : 11,
        "FirstAired" : new Date("2008-12-11T00:00:00.000Z"),
        "Overview" : "Preparations have begun for the school's cultural festival, with the student body president and her brother in charge. The council helps make decisions, yet the students also formulate plans in order to help themselves with their love lives. Suggested ideas are a maid café and a cosplay café among others, but the draw results in a professional wrestling skit. Throughout the day, Taiga receives continuous phone calls from her father, and Taiga sends Ryuji to talk to him. Taiga's father eventually follows Taiga and Ryuji to his home, where Taiga immediately kicks her father's groin. Ryūji talks sense into Taiga, and Taiga's father is finally able to talk with his daughter.",
        "Rating" : 9,
        "RatingCount" : 3,
        "SeasonNumber" : 1
      },
      {
        "id" : 417478,
        "EpisodeNumber" : 12,
        "FirstAired" : new Date("2008-12-17T00:00:00.000Z"),
        "Overview" : "Taiga and her dad start to reconnect and Taiga wants to switch parts with Ami so that her father can see her good side. When Ryuji tells Minori of them reconciling, Minori is upset and argues with Ryuji because she thinks Taiga should not have anything to do with her dad, but Ryuji thinks she should. Taiga tries to calm things down by making the two of them shake hands, but Ryuji walks away angrily. During the festival, Taiga's dad does not show up, and Ryuji still has not apologized to Minori.",
        "Rating" : 8.5,
        "RatingCount" : 4,
        "SeasonNumber" : 1
      },
      {
        "id" : 418828,
        "EpisodeNumber" : 13,
        "FirstAired" : new Date("2008-12-24T00:00:00.000Z"),
        "Overview" : "Just as Taiga makes a dramatic appearance in the beauty contest, Ryuji receives a text from her dad saying he would not be able to live with her. Taiga wins the beauty contest, despite the sadness that her father did not show up. A race is held where the winner earns a dance with Taiga, and Ryuji, finally realizing what Minori warned him about, is determined to win it. Almost at the end of the race, Minori throws herself towards the last four participants and provides an opportunity for Ryuji to win, but he goes back for her and they hold hands as they cross the finish line together, forgiving each other.",
        "Rating" : 9,
        "RatingCount" : 3,
        "SeasonNumber" : 1
      },
      {
        "id" : 422013,
        "EpisodeNumber" : 14,
        "FirstAired" : new Date("2009-01-07T00:00:00.000Z"),
        "Overview" : "A legend starts that anyone who touches Taiga will be granted happiness or one wish. A boy named Tomiya keeps trying to touch her so that he can get closer to the girl he likes, much to Taiga's aggravation. The cultural festival pictures are for sale and whilst Taiga buys the picture of her and Yusaku dancing, Minori notices Ryuji buying a picture of both of them running towards the finishing line and holding hands and buys it too. Ami is complimented as being mature all day, but after bumping into Ryuji at the market is told she is more like a kid. She later gets a call from her mom and tells her that she wants to stay. Yusaku is told something by the student council president and goes to contemplate it, running into Taiga along the way. She returns to Ryūji's house where his mother boasts that the three of them are like a family. Everyone else is left to contemplate what it is they're wishing for from the Palmtop Tiger legend.",
        "Rating" : 8.800000000000001,
        "RatingCount" : 4,
        "SeasonNumber" : 1
      },
      {
        "id" : 424920,
        "EpisodeNumber" : 15,
        "FirstAired" : new Date("2009-01-14T00:00:00.000Z"),
        "Overview" : "Yūsaku flips out in the middle of class, and shows up to school the next day with his hair dyed blonde, which gets him in trouble with the teacher. Whilst everyone tries to figure out what is wrong with him, Ryūji walks home with Minori. When he arrives home, he is surprised to find Yūsaku in his house with a reversed personality, much to Taiga's delight. He spends the day with him full of excitement, but runs off when Ryūji's mother offers to dye his hair back to normal.",
        "Rating" : 8.800000000000001,
        "RatingCount" : 4,
        "SeasonNumber" : 1
      },
      {
        "id" : 424937,
        "EpisodeNumber" : 16,
        "FirstAired" : new Date("2009-01-21T00:00:00.000Z"),
        "Overview" : "Taiga and Ryūji try to get Yūsaku to become the next student council president by telling students how she will ruin everyone's high school life. Ryūji discovers that Yūsaku has feelings for Sumire, the student council president, and that she is going to be studying abroad in America soon, thus explaining his recent odd behavior. After some encouragement from Sumire, Yūsaku becomes a candidate, but Taiga drops out, leaving Yūsaku to become the student council president. He confesses his love to Sumire in front of everyone, but she does not respond to his feelings. Taiga becomes outraged at this, and fights a willing Sumire; after Ryūji and council members stop the fight, Sumire confesses she did not want Yūsaku to sacrifice everything for her. Yūsaku overhears this and states he is glad he fell in love with her. As Minori is leaving, Ami asks her if she feels guilty. Two days later Sumire leaves to study abroad and Taiga is suspended for two weeks. She is told to send a letter of apology to Sumire and instead sends a letter with only the word 'idiot'.",
        "Rating" : 8.800000000000001,
        "RatingCount" : 4,
        "SeasonNumber" : 1
      },
      {
        "id" : 424938,
        "EpisodeNumber" : 17,
        "FirstAired" : new Date("2009-01-28T00:00:00.000Z"),
        "Overview" : "Minori spaces out during a baseball game due to what Ami had said, and makes a mistake causing her team to lose the game. Christmas is coming up, much to the joy of Taiga, whose suspension from school has just lifted. After Ryūji tells her that his relationship with Minori has not progressed, Taiga declares the need to play the role of Cupid for him, since she wants to be good for Santa. At school the next morning, students who became fans of Taiga's after her fight with Sumire surround Taiga and Ryūji. After acknowledging her victory, Taiga and Ryūji head to their classroom to see Minori wearing a bald wig while speaking nonsense. Yūsaku arrives and lies down in front of Taiga in admiration for her actions to help his relationship with Sumire. Later, Yūsaku announces the student council will organize a Christmas party on Christmas Eve to boost romantic feelings between students. Taiga and Ryūji ask Minori to go to the Christmas party with them, but she vehemently declines. Taiga, Ryūji, Yūsaku, Haruta, Noto, and Maya eat together at the restaurant where Minori works (who is off today), and they force pair Yūsaku and Taiga up at a table by themselves. Maya approaches Ryūji about going to the party with Taiga, but it just leads Ryūji to the conclusion that Maya has a crush on Yūsaku.",
        "Rating" : 8.800000000000001,
        "RatingCount" : 4,
        "SeasonNumber" : 1
      },
      {
        "id" : 424939,
        "EpisodeNumber" : 18,
        "FirstAired" : new Date("2009-02-04T00:00:00.000Z"),
        "Overview" : "Everyone is helping out with the Christmas party. While Ryūji's friends keep giving Yūsaku and Taiga some alone time, Ami compares Ryūji's relationship with Taiga as akin to a father/daughter relationship, and tells him he should stop it soon. After the final exam, Ryūji helps Taiga send out some presents to her parents and some lonely children, and Taiga recalls when she got to meet Santa, which despite possibly being a dream, gives her hope that someone is always watching over her. Everyone helps putting together an artificial Christmas tree topped with a glass star that Taiga brought. Everyone is pleased with their efforts and awed by the site of the tree lit up. However, a stray softball crashes through the gym window and knocks over the tree, smashing the star. This sends Minori into deep regret and she forces it upon herself to fix the broken star, but despite her protests, Ryūji helps her out. The baseball club apologizes and Minori leaves, still declining Ryūji's offer of going to the party as she feels she would not be welcome after the accident. Despite hearing that, Ryūji promises her that he will wait for her.",
        "Rating" : 8.800000000000001,
        "RatingCount" : 4,
        "SeasonNumber" : 1
      },
      {
        "id" : 435432,
        "EpisodeNumber" : 19,
        "FirstAired" : new Date("2009-02-12T00:00:00.000Z"),
        "Overview" : "On the night of the party, Taiga brings over a suit for Ryūji to wear while he still attempts to convince Minori to come. The party begins with a special Christmas song performed by Taiga and Ami. Following the song, Ami informs Ryūji that Taiga has left the party. Taiga decides to go home in order to wait for Santa Claus, only stopping by Minori's house on the way to convince her to go to the party. Ryūji, figuring she would be alone, goes to Taiga's apartment dressed up as a 'Bear Santa Claus' in order to help Taiga realize that she is not alone. Afterwards, she tells Ryūji to go back and wait for Minori. Ryūji leaves, despite initially resisting. Taiga begins crying uncontrollably, thinking that with Ryūji together with Minori, Ryūji and herself can no longer stay together. Taiga rushes after Ryūji, calling for him, but he is already gone. Minori, who was heading to the party, witnesses this. When Minori meets Ryūji at the school, she implies to him that she does not wish to have a boyfriend at this point in time. Ryūji interprets this as being rejected, and collapses onto the sidewalk.",
        "Rating" : 8.800000000000001,
        "RatingCount" : 4,
        "SeasonNumber" : 1
      },
      {
        "id" : 435506,
        "EpisodeNumber" : 20,
        "FirstAired" : new Date("2009-02-19T00:00:00.000Z"),
        "Overview" : "Following Ryūji's rejection by Minori, Taiga visits a shrine while he has the flu and runs into Yūsaku. Taiga decides not to come over to Ryūji's house anymore and tells him not to give up on her. The teacher informs her students that the field trip to Okinawa is now going to be a ski trip due to their previously booked hotel burning down. Taiga points out to Ryūji that this would be his last chance to confirm Minori's feelings before classes are rearranged. Ryūji catches up with Minori, who is still a bit disheartened from Christmas, and Taiga provides an opportunity for the two to start talking again. Later, Ryūji, Minori, Yūsaku, Ami and the other students go to Taiga's apartment to discuss plans for the trip. Ryūji and Minori talk in the kitchen, where she constantly praises Ryūji for the way Taiga has become. She wishes that things would stay the way they were forever, while Ryūji knows that it would not be possible, and becomes determined to confess properly",
        "Rating" : 8.800000000000001,
        "RatingCount" : 4,
        "SeasonNumber" : 1
      },
      {
        "id" : 435507,
        "EpisodeNumber" : 21,
        "FirstAired" : new Date("2009-02-26T00:00:00.000Z"),
        "Overview" : "During the ski trip, Ryūji wonders why Taiga had not told him about meeting Yūsaku on New Year's, and Hisamitsu gets into a fight with Maya concerning her attempts to be around Yūsaku. Ryūji has a brief talk with Minori about how to deal with it, and puts on the hairpin Ryūji got for her, saying Taiga gave it to her. When confronted by Yūsaku, Hisamitsu, and Haruta, Ryūji reveals he has a crush on Minori. Later, they investigate the girl's room in order to find out the true reason behind Minori's rejection, only to end up hiding in a closet, along with Taiga, when Ami, Minori, Maya, and Nanako come in. Ami brings up the topic of Ryūji's rejection by Minori, and the two get angry at each other. The next day, Taiga and Minori accidentally run into Ami on their sled, who decides it she did it on purpose due to the previous night and engages in a physical fight with Minori. Minori's drops her hairpin on a nearby slope and Taiga goes to search for it by herself, but ends up falling down without the others noticing. When Taiga does not return, Yūsaku, Minori, and Ryūji search for her. Ryūji finds her at the bottom of a hill, bleeding and covered in snow. As Ryūji carries her back, a barely conscious Taiga (thinking that he is Yūsaku) apologizes and confesses that she cannot stop loving Ryūji.",
        "Rating" : 9,
        "RatingCount" : 4,
        "SeasonNumber" : 1
      },
      {
        "id" : 440749,
        "EpisodeNumber" : 22,
        "FirstAired" : new Date("2009-03-05T00:00:00.000Z"),
        "Overview" : "Following the incident at the ski trip, Taiga is staying with her mother, and has not come back to school yet. Ryūji asks Yūsaku to pretend he was the one who saved Taiga in order to make her story true. Later, Hisamitsu and Haruta take Ryūji to a ramen shop where Minori has started another part time job. At home, Ryūji bemoans the fact he would not be able to afford further education, but Yasuko tells him he should aim to be the best. The next day, Minori catches up to Ami and tells her that she has decided to 'find the thing she cannot see'. Ryūji goes home and finds Yasuko had gone to work, as a result of yesterday's discussion. Noticing the hairpin he got for Minori, he puts it away in his box, realizing he would not be able to give it to her. He is surprised to find Taiga on his doorstep, who lied about being seriously ill in order to bond with her mother, and came over due to being locked outside her apartment. When she notices the box with Minori's hairpin in it, she reassures Ryūji that he will be with her. Taiga tells him that she had a dream about the events that occurred and the 'stupid words' she said, and he assures her that, apart from Yūsaku saving her, it was all a dream.",
        "Rating" : 8.800000000000001,
        "RatingCount" : 4,
        "SeasonNumber" : 1
      },
      {
        "id" : 440750,
        "EpisodeNumber" : 23,
        "FirstAired" : new Date("2009-03-12T00:00:00.000Z"),
        "Overview" : "As Valentine's Day approaches, Ryūji and Taiga get called in concerning their future ambitions form, though Taiga seems uninterested. Ryūji encounters Ami refusing to model the school uniform and talks with her, who tells him she originally planned to stay at school short term, but stayed to help Taiga. Ryūji gets a call from Taiga saying Yasuko had collapsed due to anemia from being overworked. Ryūji blames himself, but the both of them decide to fill in for Yasuko's part-time job selling chocolate, using Ami's celebrity status to boost sales. Taiga decides to make everyone some chocolate as thanks for the things they have done for her. However, when Minori notices that Taiga believed Yūsaku rescued her from the ski trip instead of Ryūji, she becomes angry. She confronts Taiga, with Ami and Yūsaku blocking the exits, trying to get her to show her true feelings. Taiga says she only wanted Minori to be happy, but Minori says that happiness is something only she can decide for herself. Taiga runs off and after Minori decides to go after her, she asks Ryūji if he will go after her too.",
        "Rating" : 8.800000000000001,
        "RatingCount" : 5,
        "SeasonNumber" : 1
      },
      {
        "id" : 440751,
        "EpisodeNumber" : 24,
        "FirstAired" : new Date("2009-03-19T00:00:00.000Z"),
        "Overview" : "Ryūji decides to help Minori go after Taiga. While running to catch up, Minori shouts out that she has always liked Ryūji but held back because of her friendship with Taiga, but says that Taiga has to obtain her own happiness as well. Despite hearing Minori's voice, Taiga walks away before Ryūji and Minori could reach her. Afterwards, in the infirmary, Minori tells Ryūji about her dreams and confirms that Ryūji does like Taiga. Later, at work, Taiga finds Ryūji waiting for her and agrees to talk to him after the shift. However, after work, Ryūji and Taiga's mothers come to confront their children, and the two run away. They stop at a bridge to talk about their situations and, after Taiga tells Ryūji that he has to live on, accidentally pushes him into the river. Standing in the river, Ryūji yells to Taiga his plan of running away and marrying her. Soon after, Yūsaku has them go to Ami's house, where they and Minori meet up. Minori, Ami, and Yūsaku do not agree with their plans, but decide to support them. Soon after they leave, Minori breaks down and cries about the relationship between Ryūji and Taiga. Comforted by Ami, who reassures her that they still are only young and that they can not know what life will hold for them. At home, Ryūji finds that his mother has run away, leaving a note and his grandfather's watch. The next morning, Ryūji and Taiga get on a train, but after Taiga talks about being a three-person family with Yasuko, Ryūji decides that they will not run away. He takes Taiga to his grandparents' house, as Yasuko told him to in her note, and introduces himself as their grandson and Taiga as his wife.",
        "Rating" : 9,
        "RatingCount" : 4,
        "SeasonNumber" : 1
      },
      {
        "id" : 440752,
        "EpisodeNumber" : 25,
        "FirstAired" : new Date("2009-03-26T00:00:00.000Z"),
        "Overview" : "After hearing a fake voicemail message by Taiga, Yasuko arrives at Ryūji's grandparents house, where Ryūji awaits. Yasuko makes up with her parents, and tells Ryūji that his father ran off while she was still pregnant, and gave birth to him despite protest. Ryūji decides that he and Taiga should not run away, and instead get married with everyone's approval. They have a rehearsal wedding where they share their first kisses. They all go home, but Taiga, after listening to her mother’s exasperated voicemails, decides to go back to her because she does not want to run away from her problems. Minori is not happy that Ryūji let her leave, but he has come to terms with everything. Taiga sends everyone a mail with a picture of the night sky and a single star, and Minori thinks that this is supposed to encourage them to do their best. Everyone gets together to send a group picture to Taiga. Over a year later during their high school graduation ceremony, Taiga comes back. Ryūji finds her in a locker in the classroom, and he says that he loves her at last. She gets flustered and responds by headbutting him.",
        "Rating" : 9.4,
        "RatingCount" : 5,
        "SeasonNumber" : 1
      }
    ],
    "Genre" : [
      "Animation",
      "Comedy",
      "Drama",
      "Romance"
    ],
    "Actors" : [
      "Junji Majima",
      "Rie Kugimiya",
      "Yui Horie",
      "Saori Goto",
      "Rie Tanaka",
      "Hiroyuki Yoshino",
      "Eri Kitamura",
      "Ai Nonaka",
      "Hirofumi Nojima",
      "Kazuyuki Okitsu",
      "Momoko Ishikawa",
      "Sayaka Ohara"
    ],
    "AliasNames" : [],
    torrentOptions: {
      name: 'toradora',
      resolution: 720,
      tag: 'CoalGuys'
    }
  }, function(){
    console.log('finished adding sample show data');
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});
