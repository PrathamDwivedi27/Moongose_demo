const mongoose=require('mongoose');

const tweetSchema=new  mongoose.Schema({
    content:{
        type:String,
        required:true,
    },

    userEmail:{
        type:String
    },
    // comment:[                                                   //We can add comment like an array or you can make different model and integrate here. Comment is inside content
    //     {
    //         content:{
    //             type:String,
    //             required:true
    //         }
    //     }
    // ]

    comment:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Comment'
        }
    ]
},{
    timestamps:true
})  

tweetSchema.virtual('contentWithEmail').get(function process(){
    return `${this.content} is written by ${this.userEmail}`;
})

tweetSchema.pre('save',function(next){
    console.log('Inside the hooks');
    this.content=this.content+'...'             //it means pre(before saving ) add ... in my content
    next();                 //to go to next middleware
})

//We can easily make createdAt and updatedAt just by writing 
const Tweet=mongoose.model('Tweet',tweetSchema);            //create a model with name Tweet which follow tweetSchema, It will automatically make Tweet ---> Tweets


module.exports=Tweet;