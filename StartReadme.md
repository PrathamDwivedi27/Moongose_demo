1)  In sequel everything is already connected but here we need to connect . In config code is written on how to connect . It's pretty simple.
2) mongoose is ODM just like sequelize is ORM
3) Schemas is same like models where we describe how our documents look like.
4) In SQL we have rows here we have documents and here databases are called collections.
5) We are making models on how a tweet should look like.
6) --v in document is version
7) Now we will do crud on moongose.
8) If we dont do new:true then in console it will print last updated value.
9) Virtuals are properties which do not show in mongodb database. They only exist to do some logical work.For eg you have a document with first and last name and now you want to print fullname but this full name should not be shown in database. That's when virtual will come in action.
10) get and set function is provided in virtual.
11) There is also a concept of hooks like in mysql.In authorisation we have done na beforecreate in password encrypt in model part. Same here we can also do. Like before saving add something in my content.
12) With the help of these hooks we can do many things like before creating a content check its validation or check for something etc
13) Concept of Index(type of data structure) -- Suppose if you have to find a user then mongo will search for that user in linear fashion but if you give some index then it will searched optimised.
14) 