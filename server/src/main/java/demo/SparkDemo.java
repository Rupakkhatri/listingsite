package demo;

import static spark.Spark.*;


import com.mongodb.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.google.gson.Gson;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import org.bson.Document;

public class SparkDemo {

  static Gson gson = new Gson();


  public static void main(String[] args) {
    port(1235);
    webSocket("/ws",WebSocketHandler.class);

    //mongo init

      MongoClient mongoClient = new MongoClient("localhost", 27017);
      MongoDatabase db = mongoClient.getDatabase("posts");
      MongoCollection<Document> myCollection = db.getCollection("data");
      System.out.println("connected to db");





    //create post
    post("/api/postListing",(req,res)-> {
      System.out.println("Post running");
      System.out.println(req.body());
  //make object to transfer json data!

              PostListObject postListObject = gson.fromJson(req.body(),PostListObject.class);
              if(postListObject.title.length()==0||postListObject.price.length()==0||postListObject.description.length()==0||postListObject.email.length()==0){
              return "null data is invalid";
              }

              Document doc = new Document("email",postListObject.email).append("title",postListObject.title).append("price",postListObject.price).append("description", postListObject.description);
              myCollection.insertOne(doc);
              return "Post successfully created!";
            });





    //delete Post

    post("/api/deleteListing",(req,res)-> {
      System.out.println("Post being deleted");
      // System.out.println(req.body());
      //make object to transfer json data!
      System.out.println(req.body());

        List<Document> documents = myCollection.find().limit(100).into(new ArrayList<Document>());
        documents.forEach(document ->{
           if(document.getString("title").equals(req.body())) {
               myCollection.deleteOne(document);
           }
        });
        System.out.println("end");
     return "Post successfully deleted!";
    });





get("/api/viewListings",(req,res)->{
  System.out.println("Total Documents :" +  myCollection.countDocuments());
  int i=0;
  List<Document> documents = myCollection.find().limit(100).into(new ArrayList<Document>());
  List<String> list = new ArrayList<>();
  documents.forEach(document -> {

    PostListObject postListObject = new PostListObject(document.getString("email"),document.getString("title"),document.getString("price"),document.getString("description"));


    String json = gson.toJson(postListObject);


    list.add(json);

  });

  String result = list.toString();//gson.toJson(list);
  System.out.println(result);
  return result;
});

//returns number of entries
get("/api/countListings",(req,res)->{
  long counter = myCollection.countDocuments();
  int result = (int) counter;
  return result;
});




  }
}
