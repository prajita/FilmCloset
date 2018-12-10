
--sample data--

db.Actors.insert(
{name: "Jonny Depp",
sex: "Male",
dob: "09-23-1990",
isProducer: true,
 bio: [{movie: "Pirates of the Caribbean: On Stranger Tides",role: "Jack Sparrow",year: 2011},
	{movie: "Alice in Wonderland",role: "Mad Hatter",year: 2010}]
	})

{name: "Knight and Day",
yearOfRelease: 2010,
plot: "action comedy",
poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZvydaJABq9J-LYg4PxdlZ3lWS5Kc90DUkoqBeWPg047Ivw30J",
 actors:[ {name: "Tom Cruise",id: "123"},{name: "Cameron Diaz",id: "123"}],
 producers: [{name: "James Mangold", id: "456"}]}


The Shawshank Redemption

{name: "The Shawshank Redemption",yearOfRelease: 1884,
poster: "https://m.media-amazon.com/images/M/MV5BNjQ2NDA3MDcxMF5BMl5BanBnXkFtZTgwMjE5NTU0NzE@._V1_CR0,60,640,360_AL_UX477_CR0,0,477,268_AL_.jpg",
actors:[ {name: "Tim Robbins",id: "1253"},{name: "Morgan Freeman",id: "1238"}], 
producers: [{name: " Liz Glotzer,", id: "4576"}]}

{"name": "Prisoners",
"yearOfRelease": 2013,
"poster":"https://timedotcom.files.wordpress.com/2017/11/private-prisons-lock-up-thousands-americans-almost-no-oversight.jpg","actors":[ {"name": "Hugh Jackman","id": "12453"},{"name": "Jake Gyle","id": "12348"}],
"plot": "drama",
 "producers": [{"name": "Broderick Johnson", "id": "44576"}]}

 update plot::
 "When the police take time to find Keller Dover's daughter and her friend, he decides to go on a search himself. His desperation leads him closer to finding the truth and also jeopardises his own life"

{name: "tom Cruise",sex: "Male",dob: "09-23-1990",isProducer: true, bio: [{movie: "Knight and day",role: "Roy",year: 2010}]}
