Books:

{
    _id:objectId(),
    book:"book1",
    isbn:"1234",
    author:["Author1", "Author2"],
    tag:["Tag1","Tag2","Tag3"],
    borrowing:[
    {student:"Ramy",barrowStart:"12/23/2017",borrowEnd:"01/05/2018",return:"true" returndate:"01/01/2017"},
    {student:"Saad",barrowStart:"01/28/2018",borrowEnd:"03/02/2018",return:"false",returndate:""}]
}

Students:
{
     _id:objectId(),
     Firstname:"Ramy",
     Lastname:"Saad",
     Email:"rmahmadin@mum.edu"
}