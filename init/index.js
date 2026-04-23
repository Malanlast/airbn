 const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");
const MONGO_URL="mongodb://127.0.0.1:27017/wonderLust";
main()
.then(()=>{
	console.log("database connect");
})
.catch(err => {
console.log(err);
});

async function main() {
  await mongoose.connect(MONGO_URL); 
}

const initDB=async()=>{
	await Listing.deleteMany({});
	initData.data=initData.data.map((obj)=>(
		{
		...obj,
		owner:"69e4ad94d8b87cae34428458",
	    }
));
	await Listing.insertMany(initData.data);
	console.log("data was initialized");
};
initDB();
