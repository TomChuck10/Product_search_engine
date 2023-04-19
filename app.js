// const search = () => {
//     const searchbox = document.getElementById("search-item").ariaValueMax.toUpperCase();
//     const storeitems = document.getElementById("product-list");
//     const product = document.querySelectorAll(".product");
//     const pname = document.getElementsByTagName("h2");

//     for(let i=0; i < pname.length(); i++){
//         let match = product[i].getElementsByTagName("h2")[0];

//         if(match){
//             let textvalue = match.textContent || match.innerHTML;
//             if(textvalue.toUpperCase().indexOf(searchbox) > -1){
//                 product[i].style.display = "";
//             }else{
//                 product[i].style.display = "none";
//             }
//         }
//     }
// }

let searchForm = document.getElementById('search-item');
    let searchResultList = document.querySelectorAll('.product');
    let result = document.getElementById('product-list');
    let searchValue = result.getElementsByTagName("h2");


    searchForm.addEventListener("keyup", function(){
        for(let i=0; i< searchValue.length; i++){
            
            console.log(searchForm.value);
           
            let value = searchResultList[i].getElementsByTagName('p')[0];
            
               let filterValue = value.textContent || value.innerHTML;

               if(filterValue.toUpperCase().indexOf(searchForm.value.toUpperCase()) > -1){
                searchResultList[i].style.display = "";
               }
               else{
                searchResultList[i].style.display="none";
               }
        }
    });