/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */
var readlineSync=require('readline-sync');
var fs=require('fs');


var contacts=[];

function loadData()
{
    var fileContent= fs.readFileSync('./data.json');
    contacts=JSON.parse(fileContent);
}


 function showMenu()
 {
     console.log("1.Add contact");
     console.log("2.Edit contact");
     console.log("3.Delete contact");
     console.log("4.Find contact");
 }
function showContact()
{
    for(var i in contacts)
    {
        console.log(contacts[i].name, contacts[i].number);
    }
}

function addContact()
{
    var name= readlineSync.question('Name:');
    var number=readlineSync.question('Number:');
    var contact={name:name,number:number};
    contacts.push(contact);
    var content=JSON.stringify(contacts);
        fs.writeFileSync('./data.json',content,{encoding:'utf-8'});
        console.log('edit success');
}
function editContact()
{
    var id=readlineSync.question('Input:');
    if(id>contacts.length)
    {
        console.log('cannot contact');
    }
    else
    {
        var newName=readlineSync.question('New name:');
        var newNumber=readlineSync.question('New number');
        contacts[id-1].name=newName;
        contacts[id-1].number=newNumber;
        var content=JSON.stringify(contacts);
        fs.writeFileSync('./data.json',content,{encoding:'utf-8'});
        console.log('edit success');
    }
}
function change_alias(alias) {
    var str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str = str.replace(/đ/g,"d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    str = str.replace(/ + /g," ");
    str = str.trim(); 
    return str;
}
function findContact()
{
    var key= change_alias(readlineSync.question('key word:'));
    var result=contacts.find(function(x)
    { if(x.name===key)
    {
        return x;
    }
    else if(x.number===key)
    {
        return x;
    }
    else
    console.log("cant not find");
});
console.log(result);
}
 function main()
 {
     loadData();
     showMenu();
     showContact();
     //editContact();
     //findContact();
     var option =readlineSync.question('>');
     console.log(contacts);
     switch(option)
     {
         case '1':
             addContact();
             break;
        case '2':
            editContact();
            break;
        case '3':
            deleteContact();
            break;
        case '4':
            findContact();
            break;
        default:
            console.log("Wrong choose");
            break;
     }
 }
 main();