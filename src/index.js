const express=require('express');
const app=express();
const connect=require('./config/database')

// const Tweet=require('./models/tweet');
const TweetRepository=require('./repository/tweet-repository');
const Comment=require('./models/comment')

app.listen(3000,async ()=>{
    console.log("Server started at 3000");
    await connect();
    console.log('Database is connected');

    // const tweet=await Tweet.create({
    //     content:'Second Tweet',
    //     // userEmail:'A@n.com'             //If we dont pass email then in document it will not show userEmail becoz it is not required property
    // });

    // const tweets=await Tweet.find();            //give all tweets
    // const tweets=await Tweet.find({userEmail:'A@n.com' })               //where type jaise in sql

    // const tweet =await Tweet .findById('665d4e3b9c06612974976a15');
    // tweet.userEmail='B@.com';
    // await tweet.save();
    // console.log(tweet);

    // const tweetRepo=new TweetRepository();
    // // const tweet=await tweetRepo.update('665d4e3b9c06612974976a15',{content:'Updated second tweet with new property'},{new:true});

    // const tweet= await tweetRepo.create({content:"Tweet with comment here"});
    // console.log(tweet);

    // tweet.comment.push({content:"first Comment "});
    // console.log(tweet);

    // const tweetRepo=new TweetRepository();
    // const tweet= await tweetRepo.create({content:"Tweet with new comment schema"});
    // console.log(tweet);
    // const comment=await Comment.create({content:"New comment here"});
    // tweet.comment.push(comment);
    // await tweet.save();
    // console.log(tweet);

    // const tweet= await tweetRepo.getWithComments('665d6ec5392545697f9b77c0');
    // const tweet=await tweetRepo.getAll(0,2);
    // console.log(tweet[0].contentWithEmail);
    // console.log(tweet);

    const tweetRepo=new TweetRepository();
    const tweet=await tweetRepo.create({content:"Using hooks in mongo"});
    console.log(tweet);
    
})