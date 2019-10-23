var button = document.getElementById("send");
console.log(button);

var input = document.getElementById("user_value");
console.log(input);

button.addEventListener("click", () => test());

input.addEventListener("keyup", function(event)
{
    if (event.keyCode == 13)
        test();
});

function rm_task ()
{
    var i;
    var btn = document.getElementsByClassName("rm");
    i = 0;

    while (i < btn.length)
    {
        btn[i].addEventListener("click", function(event)
        {
            var curr_task = event.target.parentNode;
            document.getElementById("tasks").removeChild(curr_task);
        });
        i++;
    }
}

function cross ()
{
    var i;
    var btn = document.getElementsByClassName("btn_cross");
    i = 0;

    while (i < btn.length)
    {
        var curr_task = event.target.parentNode;
        curr_task.removeAttribute("class", "done");

        btn[i].addEventListener("click", function(event)
        {
            var curr_task = event.target.parentNode;
            curr_task.setAttribute("class", "done");
            setTimeout (btn[i].addEventListener("click", function(event)
            {
                var curr_task = event.target.parentNode;
                curr_task.removeAttribute("class", "done");
            }), 300);
                
        });

        i++;
    }
}

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
        var rm =  document.createElement("button");
        var cross_task = document.createElement("button");
        cross_task.setAttribute("class", "btn_cross");
        cross_task.appendChild(document.createTextNode("Task completed √"))
        rm.setAttribute("class", "rm");
        rm.appendChild(document.createTextNode("Remove task"));
        li.appendChild(document.createTextNode(str_of_input));
        li.appendChild(rm);
        li.appendChild(cross_task);
        var create_btn = document.createElement("button");
        document.getElementById("tasks").appendChild(li);
        document.getElementById("user_value").value = "";
        rm_task ();
        cross ();
        }
    else
        {
            alert("Input field cannot be empty, pleas add at least 1 character");
        }
}