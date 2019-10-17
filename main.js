/*var ul = document.getElementById("tasks");
console.log(ul);

var li = document.createElement('li');
console.log(li);

var test = document.createElement('li');

li.appendChild(document.createTextNode("test"));
console.log(li);

ul.appendChild(li);

test.appendChild(document.createTextNode("Learn React JS"));
ul.appendChild(test);*/
var button = document.getElementById("send");
console.log(button);

var input = document.getElementById("user_value");
console.log(input);

input.addEventListener("keyup", function(event)
{
    if (event.keyCode == 13)
        test();
});

button.addEventListener("click", test);

function str_contain_alpha(str)
{
    var i = 0;

    while (i < str.length)
    {
        if (str[i] >= 'a' || str[i] <= 'z')
            return (true);
        i++;
    }
    return (false);
}

function str_is_valid(str)
{
    var i = 0;
    var check = 0;
    
    if (str_contain_alpha(str))
    {
        while(i < str.length)
        {
            if (str[i] == " ")
                check++;
            i++;
        }
        if (check == str.length)
            return (false);
    }
    else
        return false;
    return (true);
}

function test ()
{
    var str_of_input = document.getElementById("user_value").value;
    var ul = document.getElementsByClassName("tasks");
    if (str_is_valid(str_of_input))
    {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(str_of_input));
        console.log(li);
        var create_btn = document.createElement("button");
        document.getElementById("tasks").appendChild(li);
        set_id (document.getElementsByTagName("li").length);
        document.getElementById("user_value").value = "";
    }
    else
        {
            alert("Input field cannot be empty, pleas add at least 1 character");
        }
}

function set_id (__int)
{
    var i;

    i = 1;
    console.log(document.getElementsByTagName("li")[i]);
    
}