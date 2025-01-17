//Todo list app by Afolabi Sheriff
//features
//store in localstorage of browser
//delete list items


var todoList = document.getElementById('todoList');

// https://www.bkacontent.com/40-popular-idioms-and-their-meanings/
var listArray = ['inevitable',
                 'it goes without saying',
                 'grade in disguise',
                 'chore',
                 'silver lining in the cloud',
                 'can\'t stant some one',
                 'nagging',
                 'you lost me',
                 'a\'int',
                 'corny',
                 'flustered',
                'can\'t think straight', 'I am a mess', 'dazed', 'all over the place', 'pitfall', 'wake up and smell the coffee/roses', 
                'A dime a dozen : Something that is very common, not unique',
                'Adding insult to injury : To make a bad situation even worse',
                'Beat around the bush: Avoid sharing your true viewpoint or feelings because it is uncomfortable',
                'Beating a dead horse: Giving time or energy to something that is ended or over',
                'Bite the bullet: To get an unfavorable situation or chore over with now because it will need to get finished eventually',
                'Best of both worlds: The choice or solution has all of the advantages of two contrasting things at the same time',
                'Biting off more than you can chew: Not having the capacity to take on a new assignment or task that is just too taxing',
                'By the skin of your teeth: Just barely making it',
                'Don’t judge a book by its cover: Not judging something by its initial appearance',
                'Doing something at the drop of a hat: Doing something at the moment of being asked',
                'Don’t count your chickens before they hatch: Not to count on something happening until after it’s already happened',
                'Caught between a rock and a hard place: Making a choice between two unpleasant choices',
                'Costs an arm and a leg: Something that is overpriced or very expensive',
                'Cutting corners: Not performing a task or duty correctly in order to save time or money',
                'Devil’s advocate: To take the side of the counter-argument, or offer an alternative point of view',
                'Feeling under the weather: Not feeling well, or feeling sick',
                'Fit as a fiddle: Being in good health',
                'Getting a taste of your own medicine: Being treated the way that you have been treating others',
                'Getting a second wind: Having energy again after being tired',
                'Giving the benefit of the doubt: Believing someone’s story without proof even though it may seem unbelievable',
                'Giving someone the cold shoulder: Ignoring someone',
                'Going on a wild goose chase: Doing something that is pointless',
                'Heard it on the grapevine: Hearing rumors about someone or something',
                'Hitting the nail on the head: Performing a task with exactness',
                'Killing two birds with one stone: Accomplishing two different tasks in the same undertaking',
                'Letting someone off the hook: Not holding someone responsible for something',
                'Letting the cat out of the bag: Sharing information that was intended to be a secret',
                'No pain, no gain: You have to work hard in order to see results',
                'On the ball: Doing a good job, being prompt, or being responsible',
                'Once in a blue moon: Something that doesn’t happen very often',
                'Piece of cake: A task or job that is easy to complete',
                'Pulling someone’s leg: Joking with someone',
                'Speak of the devil: When the person you have just been talking about arrives',
                'Stealing someone’s thunder: Taking credit for someone else’s achievements',
                'Straight from the horse’s mouth: Reading or hearing something from the source',
                'The last straw: The last difficulty or annoyance that makes the entire situation unbearable',
                'The elephant in the room: An issue, person, or problem that someone is trying to avoid',
                'Throwing caution to the wind: Being reckless or taking a risk',
                'Your guess is as good as mine: To not know something'
                ];

var changeToComp = function(){
    var parent = this.parentElement;
    console.log('Changed to complete');
    parent.className = 'uncompleted well';
    this.innerText = 'Incomplete';
    this.removeEventListener('click',changeToComp);
    this.addEventListener('click',changeToInComp);
    changeListArray(parent.firstChild.innerText,'complete');

}

var changeToInComp = function(){
    var parent = this.parentElement;
    console.log('Changed to incomplete');
    parent.className = 'completed well';
    this.innerText = 'Complete';
    this.removeEventListener('click',changeToInComp);
    this.addEventListener('click',changeToComp);

    changeListArray(parent.firstChild.innerText,'incomplete');

}

var removeItem = function(){
    var parent = this.parentElement.parentElement;
    parent.removeChild(this.parentElement);

    var data = this.parentElement.firstChild.innerText;
    for(var i=0; i < listArray.length; i++){

        if(listArray[i].content == data){
            listArray.splice(i,1);
            refreshLocal();
            break;
        }
    }


}

//function to change the todo list array
var changeListArray = function(data,status){

    for(var i=0; i < listArray.length; i++){
        if(listArray[i].content == data){
            listArray[i].status = status;
            refreshLocal();
            break;
        }
    }
}

//function to chage the dom of the list of todo list
var createItemDom = function(text,status){

    var listItem = document.createElement('li');

    var itemLabel = document.createElement('label');

    var itemCompBtn = document.createElement('button');

    listItem.className = (status == 'incomplete')?'completed well':'uncompleted well';

    itemLabel.innerText = text;
    itemCompBtn.className = 'btn btn-success';
    itemCompBtn.innerText = (status == 'incomplete')?'Complete':'Incomplete';
    if(status == 'incomplete'){
        itemCompBtn.addEventListener('click',changeToComp);
    }else{
        itemCompBtn.addEventListener('click',changeToInComp);
    }

    listItem.appendChild(itemLabel);
    listItem.appendChild(itemCompBtn);
    // listItem.appendChild(itemIncompBtn);

    return listItem;
}

window.onload = function(){
    //  localStorage.removeItem('todoList');
     for(var i=0; i < listArray.length; i++){
        var item = createItemDom(listArray[i],'incomplete');
        todoList.appendChild(item);;
     }     
    //  refreshLocal();
};