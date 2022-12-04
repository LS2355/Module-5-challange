

//all that is left to finish is the timing


//jQuery
$(function() {
    var $TimeblockContainer = $(".TimeblocksContainer .time-block");   
    var $saveBlock = $(".TimeblocksContainer .time-block .saveBtn");
    var $textboxColor = $(".TimeblocksContainer .time-block .textarea")

    //loads and writes previous data
    for (var i = 0; i < localStorage.length; i++){
        var loadId = localStorage.key(i);
        var loadText = JSON.parse(localStorage[loadId]);
        console.log(loadId + " " + loadText);
        $(".TimeblocksContainer #"+ loadId +" textarea").append(loadText);
    }
    
    
    
    $TimeblockContainer.on('click', function() {
        $textboxColor.removeClass('past');
        $(this).addClass("future"); 

        // var timeBlockId = $(this).attr('data-timeframe');
        // $(this).removeClass('past').addClass('future');
        // alert (timeBlockId);;
    
    })    

    
    
    //on click of save icon
    $saveBlock.on('click', function() {
        //find the id of the block that was selected
        var SelectedId = $(this).parent().attr('id');
        
        //this will get the text of the selected block and store it in a variable
        var textarea = $(".TimeblocksContainer #"+ SelectedId +" textarea").val();
      
        //save data
            //delete the prev identical key
        localStorage.removeItem(SelectedId);
            //save the id as the key & inputed text as the value
        localStorage.setItem(SelectedId, JSON.stringify(textarea))
    })


})