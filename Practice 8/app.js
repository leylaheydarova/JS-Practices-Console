//create array by 2 ways:
//literal method
const arr = [8,9]

//constructor method
const numbers = new Array(2,3,4,5,6,7)
const newArray = numbers.concat(arr)

newArray.shift();
newArray.shift();
newArray.push(3);
newArray.pop();
newArray.unshift(90,1);

newArray.sort((a,b)=> a-b)
// console.log(newArray);

brands = ['Kiko', 'Yves', 'Nars', 'Huda', 'Beaulis']

// brands.sort()
// console.log(brands);

//next lesson

let nameLengh = [];
brands.forEach((element, index, array) => {
    nameLengh.push(element.length)
});

for (const brand of brands){
    console.log(brands);
}

const newbrands = brands.map((element, index, array)=>`**${element}**`);

const filterbrands = brands.filter((element, index, array) => {
    if(element.startsWith("Y")) return element;
})

const findedelement = brands.find((element, index, array) => {
    if(element.startsWith("K")) return element;
})

const lastfindedelement = brands.findLast((element, index, array) => {
    if(element.startsWith("K")) return element;
})

const someelement = brands.some((element, index, array) => {
    if(element.startsWith("N")) return element
})

const everyelement = brands.every((element, index, array) => {
    if(element.startsWith("N")) return element
})

console.log(brands);
console.log(filterbrands);
console.log(findedelement);
console.log(lastfindedelement);
console.log(someelement);
console.log(everyelement);


const array = [
    {
      postId: 1,
      id: 1,
      name: "id labore ex et quam laborum",
      email: "Eliseo@gardner.biz",
      body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
    },
    {
      postId: 1,
      id: 2,
      name: "quo vero reiciendis velit similique earum",
      email: "Jayne_Kuhic@sydney.com",
      body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
    },
    {
      postId: 1,
      id: 3,
      name: "odio adipisci rerum aut animi",
      email: "Nikita@garfield.biz",
      body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
    },
    {
      postId: 1,
      id: 4,
      name: "alias odio sit",
      email: "Lew@alysha.tv",
      body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati",
    },
    {
      postId: 1,
      id: 5,
      name: "vero eaque aliquid doloribus et culpa",
      email: "Hayden@althea.biz",
      body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et",
    },
    {
      postId: 2,
      id: 6,
      name: "et fugit eligendi deleniti quidem qui sint nihil autem",
      email: "Presley.Mueller@myrl.com",
      body: "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in",
    },
    {
      postId: 2,
      id: 7,
      name: "repellat consequatur praesentium vel minus molestias voluptatum",
      email: "Dallas@ole.me",
      body: "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor",
    },
    {
      postId: 2,
      id: 8,
      name: "et omnis dolorem",
      email: "Mallory_Kunze@marie.org",
      body: "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque",
    },
    {
      postId: 2,
      id: 9,
      name: "provident id voluptas",
      email: "Meghan_Littel@rene.us",
      body: "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus",
    },
    {
      postId: 2,
      id: 10,
      name: "eaque et deleniti atque tenetur ut quo ut",
      email: "Carmen_Keeling@caroline.name",
      body: "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis",
    },
  ];

  console.log(array);

  const newaray = array.map((element, index, array)=>{
    return {name:element.name, email:element.email}
  })

  console.log(newaray);