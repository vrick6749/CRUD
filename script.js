var app = new function(){
    this.el = document.getElementById('tasks')
    this.tasks =[]

    //this is the read in crud apps 
    this.FetchAll = function(){
        var data=""

        if(this.tasks.length >0){
            for(i=0; i<this.tasks.length; i++){
               data+='<tr>';
               data+='<td>'+ (i+1) + '. ' + this.task[i]+'</td>';
               data+='</tr>';
            }
        }


        this.Count(this.tasks.length)
        return this.el.innerHTML =data
    };



    //this is to create new data in the to do list
    this.Add = function(){

        el = document.getElementById('add-todo')
    };




    // this is to edit existing items 
    this.Edit = function(item){};

    this.Delete = function(item){};


    this.Count = function(data){

    };
}


// this function will keep calling in order to show constant refresh of page list to do items
app.FetchAll();



// CloseInput will change the display status of editbox to none
function CloseInput(){
    document.getElementById('edit-box').style.display ='none'; 
};