// Task 1
//İstifadəçidən soyad, ad və ata adını istəyən, soyadı və baş hərfləri konsola çıxaran proqram tərtib edin.`<br>` Məsələn, «İvanov Pyotr Sergeevich» — «İvanov P.S.»

//let username = prompt('Your full name: Surname-Name-Pname')
// let fname = username.split(' ');
// console.log(`${fname[0]} ${fname[1].slice(0,1)}.${fname[2].slice(0,1)}`)


// Task 2
//Adınız, cinsiniz və doğum tarixiniz olan user obyekti yaradın (name, surname, gender, birthday). Konsola doğum tarixini çıxarın.

let user = 
{
    name: 'Hasan',
    surname: 'Heydarov',
    gender: 'Male',
    birthday: '1995-01-13'
};

console.log(user.birthday);

//Obyektə yaş (age) əlavə edin və doğum tarixini silin.İstifadəçi məlumatları olan bir obyekt verilib.
//Bu obyektə yaş (age) əlavə edin və doğum tarixini silin.Alınmış obyekti konsola çıxarın.

//add age property
Object.defineProperty(user, 'age', {value:29})
console.log(user);

//delete birthday property
delete user.birthday

for (key in user){
    console.log(`${key}: ${user[key]}`);
}