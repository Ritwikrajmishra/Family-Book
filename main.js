var images =
[
    "https://i.postimg.cc/MKdhy06Z/family.jpg" , "DSC_0146.JPG" ,  "DSC_0223.JPG" , "20200101_153853.jpg" , 
]
var names = 
[
    "Family Book","Kali Prasad Mishra", "Parbati Mishra", "Ritwik Raj Mishra"
];
var i = 0;
function update()
            {
                i++;
                var numbers_of_family_member_in_array = 3 
                if(i > numbers_of_family_member_in_array )
                {
                    i = 0;
                }
                var updatedImage = images[i];
                var updatedName  = names[i];
                document.getElementById("family_member_image").src = updatedImage;
                document.getElementById("family_member_name").innerHTML = updatedName;
            }